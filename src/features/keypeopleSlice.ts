import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DetailsData:{},
  keyPeopleData:[]
};

export const keypeopleSlice = createSlice({
  name: "keypeople",
  initialState,
  reducers: {
    AddingKeyPopleData: (state,action) => {
      state.keyPeopleData = action.payload;
    },
    AddDetailsData: (state,action) => {
        state.DetailsData = action.payload;
    }
  },
});

export const { AddingKeyPopleData,AddDetailsData } = keypeopleSlice.actions;

export default keypeopleSlice.reducer;