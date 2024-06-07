import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
  },
});
