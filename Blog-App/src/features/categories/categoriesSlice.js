import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Academic" },
  { id: "1", name: "Work" },
  { id: "2", name: "Home" },
  { id: "3", name: "General" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectAllCategories = (state) => state.categories;

export default categoriesSlice.reducer;
