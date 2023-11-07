import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  itemsCounter: 0,
  selected: [],
  total: 0,
  config: {},
};

if (typeof window !== 'undefined') {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(initialState))
    const cart = localStorage.getItem('cart')
    initialState = JSON.parse(cart)
  } else {
    const cart = localStorage.getItem('cart')
    initialState = JSON.parse(cart)
  }
}


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.selected.find((element) => element.id === action.payload.id)) {
        action.payload.quantity = 1;
        state.selected.push(action.payload);
        const { itemsCounter, total } = sumItems(state.selected);
        state.itemsCounter = itemsCounter;
        state.total = total;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    plus: (state, action) => {
      const indexI = state.selected.findIndex((element) => element.id === action.payload.id);
      state.selected[indexI].quantity++;
      const { itemsCounter, total } = sumItems(state.selected);
      state.itemsCounter = itemsCounter;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    minus: (state, action) => {
      const indexI = state.selected.findIndex((element) => element.id === action.payload.id);
      if (state.selected[indexI].quantity > 0) {
        state.selected[indexI].quantity--;
        const { itemsCounter, total } = sumItems(state.selected);
        state.itemsCounter = itemsCounter;
        state.total = total;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    remove: (state, action) => {
      const newSelected = state.selected.filter((element) => element.id !== action.payload.id);
      state.selected = newSelected;
      const { itemsCounter, total } = sumItems(state.selected);
      state.itemsCounter = itemsCounter;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clear: (state) => {
      const clearState = {
        itemsCounter: 0,
        selected: [],
        total: 0,
        ...state,
      };
      localStorage.setItem("cart", JSON.stringify(clearState));
      return clearState;
    },
    setConfig: (state, action) => {
      state.config = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Export the reducer and actions
export const { addToCart, plus, minus, remove, clear, setConfig } = productSlice.actions;

export default productSlice.reducer;




const sumItems = items => {
  const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
  let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  return { itemsCounter, total }
}

