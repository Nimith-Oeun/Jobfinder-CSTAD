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
    async ({ file, id }) => {
        const token = getAccessToken();
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${jobFinder}jobfinder_api/v1/upload-file/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
    const data = await response.json();
    // If your backend returns resume id, extract it here
    // Example: return { ...data, resumeId: data.resumeId };
    return data;
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
            });
    }
});

export default fileSlice.reducer;
// If your backend returns resumeId, you can select it like this:
export const selectResumeId = (state) => state?.file?.fileUpload?.resumeId;
export const selectFile = (state) => state?.file?.fileUpload;