import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder} from "../api/index";
import {addAccessToken,removeAccessToken} from "../../../lib/securLocalStorage";


const initialState = {
    createUser: {},
    verifyEmail: {},
    // login: {},
    resendOtp: {},
    status: 'idle',
    error: null,
};

// Register User
export const fetchCreateUser = createAsyncThunk(
    'User/fetchCreateUser',
    async (value) => {
        // console.log("From Register",value);
        const body = JSON.stringify(value);
        const respone = await fetch(`${jobFinder}register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
        const user = await respone.json()
        return user;
    }
);

// verify User
export const fetchVerifyEmail = createAsyncThunk(
    'User/fetchVerifyEmail',
    async (value ) => {
        console.log("From Register",value);
        const body = JSON.stringify(value);
        const respone = await fetch(`${jobFinder}verify-otp/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
        const user = await respone.json()
        return user;
    }
);
// Login User

export const fetchLogin = createAsyncThunk(
    'User/fetchLogin',
    async (value) => {
        const body = JSON.stringify(value);
        const respone = await fetch(`${import.meta.env.VITE_BASE_URL}login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
        const apiLogin = await respone.json()
        return apiLogin;
    }
);

// Resend OTP
export const fetchResendOTP = createAsyncThunk(
    'User/fetchResendOTP',
    async (value) => {
        console.log("From Resend OTP",value);
        const body = JSON.stringify(value);
        const respone = await fetch(`${jobFinder}resend-otp/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
        const user = await respone.json()
        return user;
    }
);



export const userSlice = createSlice({
    name: 'CreateUser',
    initialState,
    reducers: {
        logout: (state) => {
            removeAccessToken();
        },
    },
    extraReducers:(builder) => {
        builder
        // Register
        .addCase(fetchCreateUser.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchCreateUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.createUser = action.payload;
            console.log("action",action.payload);
        })
        .addCase(fetchCreateUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // Verify Email
        .addCase(fetchVerifyEmail.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.verifyEmail = action.payload;
            console.log("action",action.payload);
        })
        .addCase(fetchVerifyEmail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // Login
        .addCase(fetchLogin.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            addAccessToken(action.payload.access);
            // state.login = action.payload.access;
            console.log("action",action.payload.access);
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // Resend OTP
        .addCase(fetchResendOTP.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchResendOTP.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.resendOtp = action.payload;
            console.log("action",action.payload);
        })
        .addCase(fetchResendOTP.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
export const selectCreateUser = (state) => state?.user?.createUser;
export const selectVerifyEmail = (state) => state?.user?.verifyEmail;
export const selectUserLogin = (state) => state?.user?.login;
export const selectResendOTP = (state) => state?.user.resendOtp;