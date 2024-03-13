import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
  TotalPrice: 0,
  TotalQty: 0,
};

export const crafSlice = createSlice({
  name: "craft",
  initialState,
  reducers: {
    AddCraftItem: (state, action) => {
      state.Products = [...state.Products, action.payload];
      state.TotalPrice += action.payload.price * action.payload.Qty;
      state.TotalQty += action.payload.Qty;
    },
    RemoveCraftItem: (state, action) => {
      state.Products = state.Products.filter(
        (el) => el.id !== action.payload.id
      );
      state.TotalPrice -= action.payload.price * action.payload.Qty;
      state.TotalQty -= action.payload.Qty;
    },
    IncreaseQty: (state, action) => {
      console.log("Hello");
      state.Products = state.Products.map((el) => 
        el.id === action.payload.id? {...el,Qty:action.payload.quantity} : el
      );

      state.TotalPrice += action.payload.price;
      state.TotalQty ++;
    },
    ReduceQty: (state, action) => {
      state.Products = state.Products.map((el) => 
        el.id === action.payload.id? {...el,Qty:action.payload.quantity} : el
      );

      state.TotalPrice -= action.payload.price;
      state.TotalQty --;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddCraftItem, RemoveCraftItem, IncreaseQty,ReduceQty } = crafSlice.actions;

export default crafSlice.reducer;
