import React, { createContext, useReducer, useContext } from "react";

// Create a context for the cart state
export const CartContext = createContext();

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productExist = state.find((item) => item.id === action.payload.id);
      if (productExist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

// Custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}

// Context Provider component
export function CartProvider({ children }) {
  // Initialize the cart state using useReducer
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
