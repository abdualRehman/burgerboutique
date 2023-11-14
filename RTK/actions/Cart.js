const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return { itemsCounter, total }
}
const setInitialState = () => {
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
    return initialState;
}

const addToCartAction = (state, action) => {
    if (!state.selected.find((element) => element.id === action.payload.id)) {
        state.selected.push(action.payload);
        const { itemsCounter, total } = sumItems(state.selected);
        state.itemsCounter = itemsCounter;
        state.total = total;
        localStorage.setItem("cart", JSON.stringify(state));
    }
}
const plusAction = (state, action) => {
    const indexI = state.selected.findIndex((element) => element.id === action.payload.id);
    state.selected[indexI].quantity++;
    const { itemsCounter, total } = sumItems(state.selected);
    state.itemsCounter = itemsCounter;
    state.total = total;
    localStorage.setItem("cart", JSON.stringify(state));
}

const minusAction = (state, action) => {
    const indexI = state.selected.findIndex((element) => element.id === action.payload.id);
    if (state.selected[indexI].quantity > 0) {
        state.selected[indexI].quantity--;
        const { itemsCounter, total } = sumItems(state.selected);
        state.itemsCounter = itemsCounter;
        state.total = total;
        localStorage.setItem("cart", JSON.stringify(state));
    }
}

const removeAction = (state, action) => {
    const newSelected = state.selected.filter((element) => element.id !== action.payload.id);
    state.selected = newSelected;
    const { itemsCounter, total } = sumItems(state.selected);
    state.itemsCounter = itemsCounter;
    state.total = total;
    localStorage.setItem("cart", JSON.stringify(state));
}


const clearAction = (state) => {
    const clearState = {
        itemsCounter: 0,
        selected: [],
        total: 0,
        ...state,
    };
    localStorage.setItem("cart", JSON.stringify(clearState));
    return clearState;
}
const setConfigAction = (state, action) => {
    state.config = action.payload;
    localStorage.setItem("cart", JSON.stringify(state));
}

export { setInitialState, addToCartAction, plusAction, minusAction, removeAction, clearAction, setConfigAction };