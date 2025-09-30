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
    const response = await fetch(`${jobFinder}jobfinder_api/v1/job-Apply/apply`, {
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

// post resume
export const fetchPostResume = createAsyncThunk(
  "ApplyJob/fetchPostResume",
  async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}jobfinder_api/v1/resume/upload`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    const postResumeres = await response.json();
    return postResumeres;
  }
);

// Get Resume
export const fetchGetResume = createAsyncThunk(
  "ApplyJob/fetchGetResume",
  async () => {
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}jobfinder_api/v1/resume/getResume`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const resumeRes = await response.json();
    return resumeRes;
  }
);

// get Apply Job
export const fetchListApplied = createAsyncThunk(
  "ApplyJob/fetchListApplied",
  async () => {
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}jobfinder_api/v1/job-Apply`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const listRes = await response.json();
    // Map responeData to results for compatibility
    if (listRes && Array.isArray(listRes.responeData)) {
      return { ...listRes, results: listRes.responeData };
    }
    return listRes;
  }
);

//delete Apply Job
export const fetchDeleteApplied = createAsyncThunk(
  "ApplyJob/fetchDeleteApplied",
  async (id) => {
    const token = getAccessToken();
    const response = await fetch(`${jobFinder}jobfinder_api/v1/job-Apply/delete/by-job/${id}`, {
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
      .addCase(fetchGetResume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetResume.fulfilled, (state, action) => {
        state.status = "success";
        state.resume = action.payload;
        console.log("Resume", action.payload);
      })
      .addCase(fetchGetResume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
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
export const selectPostResume = (state) => state?.applyJob?.postResume;
export const selectResume = (state) => state?.applyJob?.resume;

