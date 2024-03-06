import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ReviewData: [],
  BestSellingData: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    ReviewAdding: (state,action) => {
      state.ReviewData = action.payload;
    },
    BestSellingAdding: (state,action) => {
      state.BestSellingData = action.payload;
    }
  },
});

export const { ReviewAdding,BestSellingAdding } = homeSlice.actions;

export default homeSlice.reducer;
