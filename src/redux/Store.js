import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/UserSlice'
import jobSlice from './feature/Job/JobSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job : jobSlice,
  },
})