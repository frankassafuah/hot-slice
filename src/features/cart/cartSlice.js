import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (cartItem) => cartItem.pizzaId === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (cartItem) => cartItem.pizzaId === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0);

// reselect redux library to optimize the above selectors
