import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder } from "../api/index";

const initialState = {
    fileUpload: null,
    status: 'idle',
    error: null
};

export const fetchFileUpload = createAsyncThunk(
    'file/fetchFileUpload',
    async (file) => {
        console.log("fileFromUpdate", file);
        const response = await fetch(`${jobFinder}upload/`, {
            method: 'POST',
            body: file
        });
        const data = await response.json();
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
export const selectFile = (state) => state?.file?.fileUpload;