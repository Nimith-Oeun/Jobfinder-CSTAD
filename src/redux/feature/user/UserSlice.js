
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder } from "../api/index";
import {
  addAccessToken,
  removeAccessToken,
  getAccessToken,
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

// Thunk to refresh access token using refreshToken
export const refreshAccessToken = createAsyncThunk(
  'User/refreshAccessToken',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const login = state.user.login;
      const refreshToken = login.refreshToken || localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token available');
      const resp = await fetch(`${jobFinder}jobfinder_api/v1/auth/refresh-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });
      if (!resp.ok) throw new Error('Failed to refresh token');
      const data = await resp.json();
      addAccessToken(data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Helper to wrap API calls with auto-refresh logic
export const fetchWithAutoRefresh = async (apiCall, thunkAPI) => {
  try {
    return await apiCall();
  } catch (err) {
    // Support both Error objects and plain objects
    const status = err.status || (err.response && err.response.status);
    const message = err.message || (err.response && err.response.statusText);
    if (status === 401 || (message && message.includes('401'))) {
      const refreshResult = await thunkAPI.dispatch(refreshAccessToken());
      if (refreshResult.meta.requestStatus === 'fulfilled') {
        return await apiCall();
      } else {
        throw new Error('Session expired. Please login again.');
      }
    } else {
      throw err;
    }
  }
};

// Register User
export const fetchCreateUser = createAsyncThunk(
  "User/fetchCreateUser",
  async (value) => {
    // console.log("From Register",value);
    const body = JSON.stringify(value);
    const respone = await fetch(`${jobFinder}jobfinder_api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const user = await respone.json();
    return user;
  }
);

// verify User
export const fetchVerifyEmail = createAsyncThunk(
  "User/fetchVerifyEmail",
  async (value) => {
    console.log("From Register", value);
    const body = JSON.stringify(value);
    const respone = await fetch(`${jobFinder}jobfinder_api/v1/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const user = await respone.json();
    return user;
  }
);
// Login User

export const fetchLogin = createAsyncThunk(
  "User/fetchLogin", async (value) => {
  const body = JSON.stringify(value);
  const respone = await fetch(`${import.meta.env.VITE_BASE_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const apiLogin = await respone.json();
  return apiLogin;
});

// Resend OTP
export const fetchResendOTP = createAsyncThunk(
  "User/fetchResendOTP",
  async (value) => {
    console.log("From Resend OTP", value);
    const body = JSON.stringify(value);
    const respone = await fetch(`${jobFinder}jobfinder_api/v1/auth/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const user = await respone.json();
    return user;
  }
);

//getUser

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

//update User
export const fectupdateUser = createAsyncThunk(
  "User/fetchupdateUser",
  async (value) => {
    console.log("From Update User", value);
    const token = getAccessToken();
    const body = JSON.stringify(value);
    const respone = await fetch(`${jobFinder}jobfinder_api/v1/profile/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
    const updateProfile = await respone.json();
    return updateProfile;
  }
);

export const userSlice = createSlice({
  name: "CreateUser",
  initialState,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(fetchCreateUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createUser = action.payload;
        console.log("action", action.payload);
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Verify Email
      .addCase(fetchVerifyEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.verifyEmail = action.payload;
        console.log("action", action.payload);
      })
      .addCase(fetchVerifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Login
      .addCase(fetchLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.login = action.payload;
        addAccessToken(action.payload.token);
        console.log("action", action.payload.access);
        console.log("action", action.payload);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Resend OTP
      .addCase(fetchResendOTP.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchResendOTP.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.resendOtp = action.payload;
        console.log("action", action.payload);
      })
      .addCase(fetchResendOTP.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Get User
      .addCase(fetchGetUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        console.log("action", action.payload);
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Update User
      .addCase(fectupdateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fectupdateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updateUser = action.payload;
        console.log("action Updateuser", action.payload);
      })
      .addCase(fectupdateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
export const selectCreateUser = (state) => state?.user?.createUser;
export const selectVerifyEmail = (state) => state?.user?.verifyEmail;
export const selectUserLogin = (state) => state?.user?.login;
export const selectResendOTP = (state) => state?.user.resendOtp;
export const selectGetUser = (state) => state?.user?.getUser;
export const selectUpdateUser = (state) => state?.user?.updateUser;
