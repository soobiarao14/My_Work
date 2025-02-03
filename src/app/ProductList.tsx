import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";  // Sanity 
import Image from "next/image"; 
// import { useCart } from "../contexts/CartContext";  import {useCart}from "@/app/CartContext";
interface Product {
  _id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const [products, setProducts] = useState<Product[]>([]);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};

const ProductList = () => {
  const { addToCart } = useCart();  // addToCart 
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch('*[_type == "product"]');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover"
          />
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-sm text-gray-500">رنگ: {product.color}, سائز: {product.size}</p>
          <p className="font-semibold text-[#FB2E86]">{formatPrice(product.price)}</p>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })} 
            className="mt-4 w-full py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
          >
            
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
import { createContext, useContext } from "react";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

import { ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

