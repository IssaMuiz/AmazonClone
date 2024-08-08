import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmount: 0,
};

const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartQuantity++;
      state.cartTotalAmount += action.payload.price;
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItems[itemsIndex].itemQuantity += 1;
      } else {
        const cartProd = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(cartProd);
      }
    },

    dropdownQuantity(state, action) {
      state.cartQuantity = +parseInt(action.payload);
    },

    deleteCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    calculateTotalPrice(state) {
      state.cartTotalAmount = state.cartItems.reduce(
        (total, items) => total + items.price * items.itemQuantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  increaseCart,
  calculateTotalPrice,
  deleteCart,
  dropdownQuantity,
} = userSlice.actions;

export default userSlice.reducer;
