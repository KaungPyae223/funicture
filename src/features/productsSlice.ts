import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FetchData: [],
  ShowData: [],
  Types: [],
  SelectedType: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initialFetch: (state, action) => {
      state.FetchData = action.payload;
      state.ShowData = action.payload;
      action.payload.map((el) => {
        if (!state.Types.includes(el.type)) {
          state.Types.push(el.type);
        }
      });
    },
    SearchItem: (state, action) => {
      state.ShowData = [];
      state.FetchData.map((el) => {
        if (el.title.includes(action.payload) && el.type.includes(state.SelectedType)) {
          state.ShowData.push(el);
        }
      });
    },
    SelectType:(state,action) => {
      console.log("Hello")
      if(state.SelectedType == action.payload){
        state.SelectedType = "";
      }else{
        state.SelectedType = action.payload;
      }
      state.ShowData=[];
      state.FetchData.map((el) => {
        if (el.type.includes(state.SelectedType)) {
          state.ShowData.push(el);
        }
      });
    }
  },
});

// Action creators are generated for each case reducer function
export const { initialFetch,SearchItem,SelectType } = productsSlice.actions;

export default productsSlice.reducer;
