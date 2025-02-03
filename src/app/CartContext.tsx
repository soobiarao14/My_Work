"use client";
// import { useCart } from "./path/to/CartProvider";
// import { usePreviewCard } from "sanity";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: { asset: { url: string } };
};

// CartContext
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined); // context کی نوعیت۔

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context; 
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  
  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === newItem._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === newItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, newItem]; 
    });
  };

  
  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item._id !== id));  
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
