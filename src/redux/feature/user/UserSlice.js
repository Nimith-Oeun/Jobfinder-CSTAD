import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder } from "../api/index";
import {
  addAccessToken,
  removeAccessToken,
  getAccessToken,
  addRefreshToken,
  getRefreshToken,
  removeRefreshToken
} from "../../../lib/securLocalStorage";

const initialState = {
  createUser: {},
  verifyEmail: {},
  getUser: JSON.parse(localStorage.getItem("user")) || {},
  updateUser: {},
  login: {},
  resendOtp: {},
  status: "idle",
  error: null,
};

// ---------------- REFRESH TOKEN ----------------
export const refreshAccessToken = createAsyncThunk(
  "User/refreshAccessToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = getRefreshToken();
      if (!refreshToken) throw new Error("No refresh token available");

      const resp = await fetch(`${jobFinder}jobfinder_api/v1/auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!resp.ok) throw new Error("Failed to refresh token");
      const data = await resp.json();

      addAccessToken(data.token);
      addRefreshToken(data.refreshToken); // update if rotated

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ---------------- API WRAPPER ----------------
export const fetchWithAutoRefresh = async (apiCall, thunkAPI) => {
  try {
    return await apiCall();
  } catch (err) {
    const status = err.status || (err.response && err.response.status);
    const message = err.message || (err.response && err.response.statusText);

    if (status === 401 || (message && message.includes("401"))) {
      const refreshResult = await thunkAPI.dispatch(refreshAccessToken());
      if (refreshResult.meta.requestStatus === "fulfilled") {
        return await apiCall(); // retry
      } else {
        thunkAPI.dispatch(logout()); // force logout
        throw new Error("Session expired. Please login again.");
      }
    } else {
      throw err;
    }
  }
};

// ---------------- REGISTER ----------------
export const fetchCreateUser = createAsyncThunk(
  "User/fetchCreateUser",
  async (value) => {
    const resp = await fetch(`${jobFinder}jobfinder_api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    return resp.json();
  }
);

// ---------------- VERIFY EMAIL ----------------
export const fetchVerifyEmail = createAsyncThunk(
  "User/fetchVerifyEmail",
  async (value) => {
    const resp = await fetch(`${jobFinder}jobfinder_api/v1/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    return resp.json();
  }
);

// ---------------- LOGIN ----------------
export const fetchLogin = createAsyncThunk(
  "User/fetchLogin",
  async (value) => {
    const resp = await fetch(`${import.meta.env.VITE_BASE_URL}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    return resp.json();
  }
);

// ---------------- RESEND OTP ----------------
export const fetchResendOTP = createAsyncThunk(
  "User/fetchResendOTP",
  async (value) => {
    const resp = await fetch(`${jobFinder}jobfinder_api/v1/auth/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    return resp.json();
  }
);

// ---------------- GET USER ----------------
export const fetchGetUser = createAsyncThunk(
  "User/fetchGetUser",
  async (_, thunkAPI) => {
    return fetchWithAutoRefresh(async () => {
      const token = getAccessToken();
      const resp = await fetch(`${jobFinder}jobfinder_api/v1/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        const error = new Error(await resp.text());
        error.status = resp.status;
        throw error;
      }
      return resp.json();
    }, thunkAPI);
  }
);

// ---------------- UPDATE USER ----------------
export const fetchUpdateUser = createAsyncThunk(
  "User/fetchUpdateUser",
  async (value) => {
    const token = getAccessToken();
    const resp = await fetch(`${jobFinder}jobfinder_api/v1/profile/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    });
    return resp.json();
  }
);

// ---------------- SLICE ----------------
export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      removeRefreshToken();
      localStorage.removeItem("user");
      state.login = {};
      state.getUser = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(fetchCreateUser.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createUser = action.payload;
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // VERIFY EMAIL
      .addCase(fetchVerifyEmail.pending, (state) => { state.status = "loading"; })
      .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.verifyEmail = action.payload;
      })
      .addCase(fetchVerifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // LOGIN
      .addCase(fetchLogin.pending, (state) => { state.status = "loading"; })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.login = action.payload;
        addAccessToken(action.payload.token);
        addRefreshToken(action.payload.refreshToken);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // RESEND OTP
      .addCase(fetchResendOTP.pending, (state) => { state.status = "loading"; })
      .addCase(fetchResendOTP.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.resendOtp = action.payload;
      })
      .addCase(fetchResendOTP.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // GET USER
      .addCase(fetchGetUser.pending, (state) => { state.status = "loading"; })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // UPDATE USER
      .addCase(fetchUpdateUser.pending, (state) => { state.status = "loading"; })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updateUser = action.payload;
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;

// Selectors
export const selectCreateUser = (state) => state.user.createUser;
export const selectVerifyEmail = (state) => state.user.verifyEmail;
export const selectUserLogin = (state) => state.user.login;
export const selectResendOTP = (state) => state.user.resendOtp;
export const selectGetUser = (state) => state.user.getUser;
export const selectUpdateUser = (state) => state.user.updateUser;
