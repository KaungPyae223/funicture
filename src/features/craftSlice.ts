import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


const initialState = {
  Products: [],
  TotalPrice: 0,
  TotalQty: 0,
};

export const crafSlice = createSlice({
  name: "craft",
  initialState,
  reducers: {
    AddFromCookie: (state,action) => {
      state.Products = action.payload.Products
      state.TotalPrice = action.payload.TotalPrice
      state.TotalQty = action.payload.TotalQty
    },
    AddCraftItem: (state, action) => {
      state.Products = [...state.Products, action.payload];
      state.TotalPrice += action.payload.price * action.payload.Qty;
      state.TotalQty += action.payload.Qty;

      Cookies.set("Craft",JSON.stringify(state),{ expires: 1})
    },
    RemoveCraftItem: (state, action) => {
      state.Products = state.Products.filter(
        (el) => el.id !== action.payload.id
      );
      state.TotalPrice -= action.payload.price * action.payload.Qty;
      state.TotalQty -= action.payload.Qty;
     
      Cookies.set("Craft",JSON.stringify(state),{ expires: 1})
    },
    IncreaseQty: (state, action) => {
      console.log("Hello");
      state.Products = state.Products.map((el) => 
        el.id === action.payload.id? {...el,Qty:action.payload.quantity} : el
      );

      state.TotalPrice += action.payload.price;
      state.TotalQty ++;

      Cookies.set("Craft",JSON.stringify(state),{ expires: 1})
    },
    ReduceQty: (state, action) => {
      state.Products = state.Products.map((el) => 
        el.id === action.payload.id? {...el,Qty:action.payload.quantity} : el
      );

      state.TotalPrice -= action.payload.price;
      state.TotalQty --;

      Cookies.set("Craft",JSON.stringify(state),{ expires: 1})
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddCraftItem, RemoveCraftItem, IncreaseQty,ReduceQty,AddFromCookie } = crafSlice.actions;

export default crafSlice.reducer;
