import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessToken } from "../../../lib/securLocalStorage";
import { jobFinder } from "../api/index";

const initialState = {
  applyJob: {},
  listApplyJob: {},
  deleteApplyJob: {},
  status: "idle",
  error: null,
};

//  Apply Job
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

// get Apply Job
export const fetchListApplied = createAsyncThunk(
  "ApplyJob/fetchListApplied",
  async () => {
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}applied_jobs/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const listRes = await response.json();
    return listRes;
  }
);

//delete Apply Job
export const fetchDeleteApplied = createAsyncThunk(
  "ApplyJob/fetchDeleteApplied",
  async (id) => {
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}applied_jobs/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const deleteRes = await response.json();
    return {deleteRes};
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
      })
      //List Applied
      .addCase(fetchListApplied.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListApplied.fulfilled, (state, action) => {
        state.status = "success";
        state.listApplyJob = action.payload;
        console.log("ListApplied", action.payload);
      })
      .addCase(fetchListApplied.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Delete Applied
      .addCase(fetchDeleteApplied.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeleteApplied.fulfilled, (state, action) => {
        state.status = "success";
        state.deleteApplyJob = action.payload;
        console.log("DeleteApplied", action.payload);
      })
      .addCase(fetchDeleteApplied.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default applyJobSlice.reducer;
export const selectApplyJob = (state) => state?.applyJob?.applyJob;
export const selectListApplied = (state) => state?.applyJob?.listApplyJob;
