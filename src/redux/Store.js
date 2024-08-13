import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/UserSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})