import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobFinder } from "../api/index";



const initialState = {
    getJobs: {},
    status: 'idle',
    error: null,
};

export const fetchGetJob = createAsyncThunk(
    'Job/fetchGetJob',
    async () => {
        const respone = await fetch(`${jobFinder}jobs/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        } );
        const getJob = await respone.json()
        return getJob;
    }
);


export const jobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGetJob.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchGetJob.fulfilled, (state, action) => {
            state.status = 'success';
            state.getJobs = action.payload;
            console.log("action",action.payload);
        })
        .addCase(fetchGetJob.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
 });

 export default jobSlice.reducer;
 export const selectGetJob = (state) => state?.job?.getJobs;
 