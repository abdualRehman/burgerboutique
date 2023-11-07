import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;