import { configureStore } from '@reduxjs/toolkit'
import authService from '../slice/auth'

const store = configureStore({
  reducer: {
    auth: authService,
  }
})

export default store