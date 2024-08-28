import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessToken } from "../../../lib/securLocalStorage";
import { jobFinder } from "../api/index";

const initialState = {
  applyJob: {},
  status: "idle",
  error: null,
};

export const fetchApplyJob = createAsyncThunk(
  "ApplyJob/fetchApplyJob",
  async (value) => {
    console.log("valueFrom apply", value);
    const body = JSON.stringify(value);
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}applied_jobs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: body,
    });
    const applyJobres = await response.json();
    return applyJobres;
  }
);

export const applyJobSlice = createSlice({
  name: "ApplyJob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplyJob.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApplyJob.fulfilled, (state, action) => {
        state.status = "success";
        state.applyJob = action.payload;
        console.log("ApplyJob", action.payload);
      })
      .addCase(fetchApplyJob.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default applyJobSlice.reducer;
export const selectApplyJob = (state) => state?.applyJob?.applyJob;
