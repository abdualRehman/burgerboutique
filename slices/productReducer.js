import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesList, productsList } from "../src/constants/dummySoda";


let initialState = {
  list: null,
  categories: null,
  loading: false,
  error: null,
};

// Create an async thunk to fetch data from an API
const fetchData = createAsyncThunk('products/fetchData', async () => {
  try {
    const data = { categoriesList, productsList };
    return data;
  } catch (error) {
    throw error;
  }
})



const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload.productsList;
        state.categories = action.payload.categoriesList;
      })

  },
});
export { fetchData };
export default productSlice.reducer;


