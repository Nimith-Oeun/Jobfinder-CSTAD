import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/UserSlice'
import jobSlice from './feature/Job/JobSlice'
import ApplyJobSlice from './feature/apply/ApplyJobSlice'
import fileSlice  from './feature/file/FileUpload'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job : jobSlice,
    applyJob: ApplyJobSlice,
    file: fileSlice,
  },
})