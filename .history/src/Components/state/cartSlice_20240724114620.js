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

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    calculateTotalPrice(state) {
      state.cartTotalAmount = state.cartItems.reduce(
        (total, items) => total + items.price * items.itemQuantity,
        0
      );
    },
    deleteCart(state, action) {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemsIndex) {
        state.cartTotalAmount = state.cartItems.reduce(
          (total, items) => total - items.price * items.itemQuantity,
          0
        );
      }
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantity } = cartItem;
          const itemTotal = price * itemQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += itemQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = total;
      state.itemQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  increaseCart,
  calculateTotalPrice,
  deleteCart,
  getTotal,
} = userSlice.actions;

export default userSlice.reducer;
