import { configureStore } from '@reduxjs/toolkit'
import authService from '../slice/auth'
import articleService from  '../slice/article'

const store = configureStore({
  reducer: {
    auth: authService,
    article: articleService
  },

  devTools: process.env.NODE_ENV !== "production",
})

export default store