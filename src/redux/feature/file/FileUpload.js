
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder } from "../api/index";

const initialState = {
    fileUpload: null,
    status: 'idle',
    error: null
};

import { getAccessToken } from '../../../lib/securLocalStorage';

export const fetchFileUpload = createAsyncThunk(
    'file/fetchFileUpload',
    async (file) => {
        console.log("fileFromUpdate", file);
        const formData = new FormData();
        formData.append('file', file);
        // Log FormData contents
        for (let pair of formData.entries()) {
            console.log(`FormData key: ${pair[0]}, value:`, pair[1]);
        }
        const token = getAccessToken();
        console.log("Token sent to backend:", token);
        const response = await fetch(`${jobFinder}jobfinder_api/v1/upload-file`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Backend error response:", response.status, errorText);
            throw new Error(`Upload failed: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        // If backend returns image URL, return it for display
        return data;
    }
);

// Thunk to fetch profile image from backend
export const fetchProfileImage = createAsyncThunk(
    'file/fetchProfileImage',
    async (_, { rejectWithValue }) => {
        try {
            const token = getAccessToken();
            const response = await fetch(`${jobFinder}/jobfinder_api/v1/getPhoto`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Image fetch failed: ${response.status} - ${errorText}`);
            }

            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileUpload.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFileUpload.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.fileUpload = action.payload;
                console.log("action File", action.payload);
            })
            .addCase(fetchFileUpload.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchProfileImage.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProfileImage.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.fileUpload = { ...state.fileUpload, imageUrl: action.payload };
            })
            .addCase(fetchProfileImage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default fileSlice.reducer;
export const selectFile = (state) => state?.file?.fileUpload;