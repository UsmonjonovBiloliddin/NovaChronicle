import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  article: [],
  articleDetail: null,
};

const articleService = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleStart: (state) => {
      state.isLoading = true;
    },
    articleSuccess: (state, actions) => {
      state.isLoading = false;
      state.article = actions.payload;
      state.error = false;
    },
    articleError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    articleDetailStart: (state) => {
      state.isLoading = true;
    },
    articleDetailSuccess: (state, actions) => {
      state.isLoading = false;
      state.articleDetail = actions.payload;
      state.error = false;
    },
    articleDetailError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },

    createArticleStart: (state) => {
      state.isLoading = true;
    },
    createArticleSucces: (state) => {
      state.isLoading = false;
    },
    createArticleError: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  articleStart,
  articleSuccess,
  articleError,
  articleDetailStart,
  articleDetailSuccess,
  articleDetailError,
  createArticleStart,
  createArticleSucces,
  createArticleError,
} = articleService.actions;

export default articleService.reducer;
