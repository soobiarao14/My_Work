


// 'use client';

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// // Define types for Cart Item
// type CartItem = {
//   id: number; // Unique identifier for the cart item
//   name: string; // Name of the product
//   price: number; // Price of the product
//   quantity: number; // Quantity of the product in the cart
//   color: string; // Color of the product
//   size: string; // Size of the product
//   image: string; // Image URL of the product
// };

// // Mock cartproducts data (initial data in the cart)
// const initialCartProducts: CartItem[] = [
//   {
//     id: 1,
//     name: "Ut diam",
//     price: 30,
//     quantity: 2,
//     color: "Red",
//     size: "M",
//     image: "/image/big1.png",
//   },
//   {
//     id: 2,
//     name: "faucibus posuere",
//     price: 45,
//     quantity: 1,
//     color: "Blue",
//     size: "L",
//     image: "/image/big2.png",
//   },
//   {
//     id: 3,
//     name: "Ac vitae vestibulum",
//     price: 60,
//     quantity: 1,
//     color: "Green",
//     size: "S",
//     image: "/image/big3.png",
//   },
//   {
//     id: 4,
//     name: "Elit massa dia",
//     price: 50,
//     quantity: 2,
//     color: "Yellow",
//     size: "M",
//     image: "/image/big4.png",
//   },
//   {
//     id: 5,
//     name: "Proin pharetra",
//     price: 35,
//     quantity: 3,
//     color: "Black",
//     size: "L",
//     image: "/image/big5.png",
//   },
// ];

// const Cart = () => {
//   // State to hold the current cart items
//   const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } // Ensure quantity is at least 1
//           : item
//       )
//     );
//   };

//   // Function to calculate the total price of the cart
//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity, // Summing price * quantity for each item
//       0
//     );
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCartItems([]); // Sets the cartItems state to an empty array
//   };

//   // Function to reset the cart to the initial cart products
//   const resetCart = () => {
//     setCartItems(initialCartProducts); // Resets the cartItems to the initial data
//   };

//   return (
//     <>
//       <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Cart Items Section */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
//           {cartItems.length > 0 ? (
//             <div className="space-y-6">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
//                 >
//                   <div className="flex items-center space-x-4">
//                     {/* Product Image */}
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="w-20 h-20 rounded-lg object-cover"
//                     />
//                     <div>
//                       {/* Product Name */}
//                       <p className="font-semibold text-[#1D3178]">{item.name}</p>
//                       {/* Product Color and Size */}
//                       <p className="text-sm text-gray-500">
//                         Color: {item.color}, Size: {item.size}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-6">
//                     {/* Product Price */}
//                     <p className="text-[#1D3178]">${item.price.toFixed(2)}</p>
//                     {/* Quantity Input */}
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(item.id, Number(e.target.value)) // Updates quantity on change
//                       }
//                       className="w-12 px-2 py-1 border rounded-md text-center"
//                       min="1"
//                     />
//                     {/* Total Price for this item (price * quantity) */}
//                     <p className="font-bold text-[#1D3178]">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             // Display if the cart is empty
//             <p className="text-[#1D3178] text-center mt-6">
//               Your cart is empty. Add some products!
//             </p>
//           )}

//           {/* Action Buttons Section */}
//           <div className="flex justify-between mt-6">
//             {/* Button to reset cart to initial state */}
//             <button
//               onClick={resetCart}
//               className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
//             >
//               Update Cart
//             </button>
//             {/* Button to clear all items in the cart */}
//             <button
//               onClick={clearCart}
//               className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>

//         {/* Cart Totals Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
//           {/* Subtotal */}
//           <p className="flex justify-between text-[#1D3178]">
//             <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
//           </p>
//           {/* Shipping Fee */}
//           <p className="flex justify-between mb-4 text-[#1D3178]">
//             <span>Shipping:</span> <span>$15.00</span>
//           </p>
//           {/* Total (Subtotal + Shipping) */}
//           <p className="flex justify-between font-bold text-lg text-[#1D3178]">
//             <span>Total:</span> <span>${(calculateTotal() + 15).toFixed(2)}</span>
//           </p>
//           <li>
//             <Link href="/checkout">
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
//               >
//                 Proceed To Checkout
//               </button>
//             </Link>
//           </li>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

// "use client"

// import { useEffect, useState } from "react";
// // import client from "../lib/sanity";  // Import Sanity client
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";      // Import Image component from next/image
// import Link from "next/link";        // Import Link for navigation

// type CartItem = {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   color: string;
//   size: string;
// //   image: {
// //     asset: {
// //       _id: string;
// //       url: string;
// //     };
// //   };
// // };

// // const Cart = () => {
// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);

// //   // Fetch data from Sanity
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const query = `*[_type == "product"] {
// //         _id,
// //         name,
// //         price,
// //         quantity,
// //         color,
// //         size,
// //         image {
// //           asset->{
// //             _id,
// //             url
// //           }
// //         }
// //       }`;

// //       const data = await client.fetch(query); // Fetch the data from Sanity
// //       setCartItems(data); // Set the fetched data into state
// //     };

// //     fetchData();
// //   }, []);

// //   // Function to update quantity in the cart
// //   const updateQuantity = (id: string, newQuantity: number) => {
// //     setCartItems((prevItems) =>
// //       prevItems.map((item) =>
// //         item._id === id
// //           ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } // Ensure quantity is at least 1
// //           : item
// //       )
// //     );
// //   }; 

// //   // Function to calculate the total price of the cart
// //   const calculateTotal = () => {
// //     return cartItems.reduce(
// //       (total, item) => total + item.price * item.quantity, // Summing price * quantity for each item
// //       0
// //     );
// //   };

// //   // Function to clear the cart
// //   const clearCart = () => {
// //     setCartItems([]); // Sets the cartItems state to an empty array
// //   };

// //   // Function to reset the cart to the initial state (or mock data)
// //   const resetCart = () => {
// //     // You can reset this to the initial mock data or handle it according to your app's logic
// //     // setCartItems(initialCartProducts);
// //   };

// //   return (
// //     <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
// //       {/* Cart Items Section */}
// //       <div className="lg:col-span-2">
// //         <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
// //         {cartItems.length > 0 ? (
// //           <div className="space-y-6">
// //             {cartItems.map((item) => (
// //               <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
// //                 <div className="flex items-center space-x-4">
// //                   {/* Product Image */}
// //                   <Image
// //                     src={item.image.asset.url}
// //                     alt={item.name}
// //                     width={80}
// //                     height={80}
// //                     className="w-20 h-20 rounded-lg object-cover"
// //                   />
// //                   <div>
// //                     <p className="font-semibold text-[#1D3178]">{item.name}</p>
// //                     <p className="text-sm text-gray-500">
// //                       Color: {item.color}, Size: {item.size}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-6">
// //                   {/* Price */}
// //                   <p className="text-[#1D3178]">${item.price.toFixed(2)}</p>
// //                   {/* Quantity Input */}
// //                   <input
// //                     type="number"
// //                     value={item.quantity}
// //                     onChange={(e) =>
// //                       updateQuantity(item._id, Number(e.target.value)) // Updates quantity on change
// //                     }
// //                     className="w-12 px-2 py-1 border rounded-md text-center"
// //                     min="1"
// //                   />
// //                   {/* Total Price for this item (price * quantity) */}
// //                   <p className="font-bold text-[#1D3178]">
// //                     ${(item.price * item.quantity).toFixed(2)}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="text-[#1D3178] text-center mt-6">Your cart is empty. Add some products!</p>
// //         )}

// //         {/* Action Buttons */}
// //         <div className="flex justify-between mt-6">
// //           <button
// //             onClick={resetCart}
// //             className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
// //           >
// //             Update Cart
// //           </button>
// //           <button
// //             onClick={clearCart}
// //             className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
// //           >
// //             Clear Cart
// //           </button>
// //         </div>
// //       </div>

// //       {/* Cart Totals Section */}
// //       <div className="bg-white p-6 rounded-lg shadow-md">
// //         <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
// //         <p className="flex justify-between text-[#1D3178]">
// //           <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
// //         </p>
// //         <p className="flex justify-between mb-4 text-[#1D3178]">
// //           <span>Shipping:</span> <span>$15.00</span>
// //         </p>
// //         <p className="flex justify-between font-bold text-lg text-[#1D3178]">
// //           <span>Total:</span> <span>${(calculateTotal() + 15).toFixed(2)}</span>
// //         </p>
// //         <li>
// //           <Link href="/checkout">
// //             <button
// //               type="submit"
// //               className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
// //             >
// //               Proceed To Checkout
// //             </button>
// //           </Link>
// //         </li>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;

// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client"; // Sanity client کو import کریں
// import Image from "next/image"; // next/image سے Image component کو import کریں
// import Link from "next/link"; // Link کو import کریں تاکہ نیویگیشن ہو سکے

// type CartItem = {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   color: string;
//   size: string;
//   image: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//   };
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Sanity سے ڈیٹا حاصل کرنے کا عمل
//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == "product"] {
//         _id,
//         name,
//         price,
//         quantity,
//         color,
//         size,
//         image {
//           asset->{
//             _id,
//             url
//           }
//         }
//       }`;

//       const data = await client.fetch(query); // Sanity سے ڈیٹا حاصل کریں
//       setCartItems(data); // حاصل شدہ ڈیٹا کو state میں سیٹ کریں
//     };

//     fetchData();
//   }, []);

//   // کارٹ میں مقدار اپ ڈیٹ کرنے کا فنکشن
//   const updateQuantity = (id: string, newQuantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
// //         item._id === id
// //           ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } // یہ یقینی بناتا ہے کہ مقدار کم از کم 1 ہو
// //           : item
// //       )
// //     );
// //   };

// //   // کارٹ کی کل قیمت نکالنے کا فنکشن
// //   const calculateTotal = () => {
// //     return cartItems.reduce(
// //       (total, item) => total + item.price * item.quantity, // ہر آئٹم کی قیمت اور مقدار کا مجموعہ نکالیں
// //       0
// //     );
// //   };

// //   // کارٹ کو صاف کرنے کا فنکشن
// //   const clearCart = () => {
// //     setCartItems([]); // cartItems کو ایک خالی array میں تبدیل کر دیتا ہے
// //   };

// //   // کارٹ کو دوبارہ سیٹ کرنے کا فنکشن (آپ اپنی ایپ کی منطق کے مطابق اسے دوبارہ ترتیب دے سکتے ہیں)
// //   const resetCart = () => {
// //     // آپ اس کو ابتدائی mock ڈیٹا سے دوبارہ سیٹ کر سکتے ہیں
// //     // setCartItems(initialCartProducts);
// //   };

// //   return (
// //     <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
// //       {/* Cart Items Section */}
// //       <div className="lg:col-span-2">
// //         <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
// //         {cartItems.length > 0 ? (
// //           <div className="space-y-6">
// //             {cartItems.map((item) => (
// //               <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
// //                 <div className="flex items-center space-x-4">
// //                   {/* پروڈکٹ کی امیج */}
// //                   <Image
// //                     src={item.image.asset.url}
// //                     alt={item.name}
// //                     width={80}
// //                     height={80}
// //                     className="w-20 h-20 rounded-lg object-cover"
// //                   />
// //                   <div>
// //                     <p className="font-semibold text-[#1D3178]">{item.name}</p>
// //                     <p className="text-sm text-gray-500">
// //                       Color: {item.color}, Size: {item.size}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-6">
// //                   {/* قیمت */}
// //                   <p className="text-[#1D3178]">${(item.price && !isNaN(item.price) ? item.price : 0).toFixed(2)}</p>
// //                   {/* مقدار اپ ڈیٹ کرنے کا انپٹ */}
// //                   <input
// //                     type="number"
// //                     value={item.quantity}
// //                     onChange={(e) =>
// //                       updateQuantity(item._id, Number(e.target.value)) // مقدار کو اپ ڈیٹ کرنا
// //                     }
// //                     className="w-12 px-2 py-1 border rounded-md text-center"
// //                     min="1"
// //                   />
// //                   {/* اس آئٹم کی کل قیمت */}
// //                   <p className="font-bold text-[#1D3178]">
// //                     ${(item.price * item.quantity).toFixed(2)}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="text-[#1D3178] text-center mt-6">Your cart is empty. Add some products!</p>
// //         )}

// //         {/* ایکشن بٹنز */}
// //         <div className="flex justify-between mt-6">
// //           <button
// //             onClick={resetCart}
// //             className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
// //           >
// //             Update Cart
// //           </button>
// //           <button
// //             onClick={clearCart}
// //             className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
// //           >
// //             Clear Cart
// //           </button>
// //         </div>
// //       </div>

// //       {/* Cart Totals Section */}
// //       <div className="bg-white p-6 rounded-lg shadow-md">
// //         <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
// //         <p className="flex justify-between text-[#1D3178]">
// //           <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
// //         </p>
// //         <p className="flex justify-between mb-4 text-[#1D3178]">
// //           <span>Shipping:</span> <span>$15.00</span>
// //         </p>
// //         <p className="flex justify-between font-bold text-lg text-[#1D3178]">
// //           <span>Total:</span> <span>${(calculateTotal() + 15).toFixed(2)}</span>
// //         </p>
// //         <li>
// //           <Link href="/checkout">
// //             <button
// //               type="submit"
// //               className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
// //             >
// //               Proceed To Checkout
// //             </button>
// //           </Link>
// //         </li>
// //       </div>
// //     </div>
// //   );
// };








"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client کو import کریں
import Image from "next/image"; // next/image سے Image component کو import کریں
import Link from "next/link"; // Link کو import کریں تاکہ نیویگیشن ہو سکے

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Sanity سے ڈیٹا حاصل کرنے کا عمل
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"] {
        _id,
        name,
        price,
        quantity,
        color,
        size,
        image {
          asset->{
            _id,
            url
          }
        }
      }`;

      const data = await client.fetch(query); // Sanity سے ڈیٹا حاصل کریں
      setCartItems(data); // حاصل شدہ ڈیٹا کو state میں سیٹ کریں
    };

    fetchData();
  }, []);

  // کارٹ میں مقدار اپ ڈیٹ کرنے کا فنکشن
  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } // یہ یقینی بناتا ہے کہ مقدار کم از کم 1 ہو
          : item
      )
    );
  };

  // کارٹ کی کل قیمت نکالنے کا فنکشن
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity, // ہر آئٹم کی قیمت اور مقدار کا مجموعہ نکالیں
      0
    );
  };

  // قیمت کو کرنسی فارمیٹ میں تبدیل کرنے کا فنکشن
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  // کارٹ کو صاف کرنے کا فنکشن
  const clearCart = () => {
    setCartItems([]); // cartItems کو ایک خالی array میں تبدیل کر دیتا ہے
  };

  // کارٹ کو دوبارہ سیٹ کرنے کا فنکشن (آپ اپنی ایپ کی منطق کے مطابق اسے دوبارہ ترتیب دے سکتے ہیں)
  const resetCart = () => {
    // آپ اس کو ابتدائی mock ڈیٹا سے دوبارہ سیٹ کر سکتے ہیں
    // setCartItems(initialCartProducts);
  };

  // کارٹ میں پروڈکٹ ایڈ کرنے کا فنکشن
  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === newItem._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === newItem._id
            ? { ...item, quantity: item.quantity + 1 } // پروڈکٹ کی مقدار بڑھائیں
            : item
        );
      } else {
        return [...prevItems, newItem]; // نیا پروڈکٹ کارٹ میں شامل کریں
      }
    });
  };

  return (
    <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items Section */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  {/* پروڈکٹ کی امیج */}
                  <Image
                    src={item.image.asset.url}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1D3178]">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Color: {item.color}, Size: {item.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  {/* قیمت */}
                  <p className="text-[#1D3178]">
                    {formatPrice(item.price)} {/* قیمت فارمیٹ کریں */}
                  </p>
                  {/* مقدار اپ ڈیٹ کرنے کا انپٹ */}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item._id, Number(e.target.value)) // مقدار کو اپ ڈیٹ کرنا
                    }
                    className="w-12 px-2 py-1 border rounded-md text-center"
                    min="1"
                  />
                  {/* اس آئٹم کی کل قیمت */}
                  <p className="font-bold text-[#1D3178]">
                    {formatPrice(item.price * item.quantity)} {/* کل قیمت فارمیٹ کریں */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#1D3178] text-center mt-6">Your cart is empty. Add some products!</p>
        )}

        {/* ایکشن بٹنز */}
        <div className="flex justify-between mt-6">
          <button
            onClick={resetCart}
            className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
          >
            Update Cart
          </button>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Available Products Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Available Products</h2>
        <div className="space-y-6">
          {/* For each product in the available products */}
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image.asset.url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1D3178]">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                </div>
              </div>
              <button
                onClick={() => addToCart(item)} // پروڈکٹ کو کارٹ میں شامل کریں
                className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Totals Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
        <p className="flex justify-between text-[#1D3178]">
          <span>Subtotal:</span> <span>{formatPrice(calculateTotal())}</span> {/* Subtotal کی قیمت فارمیٹ کریں */}
        </p>
        <p className="flex justify-between mb-4 text-[#1D3178]">
          <span>Shipping:</span> <span>{formatPrice(15.00)}</span> {/* Shipping کی قیمت فارمیٹ کریں */}
        </p>
        <p className="flex justify-between font-bold text-lg text-[#1D3178]">
          <span>Total:</span> <span>{formatPrice(calculateTotal() + 15)}</span> {/* Total کی قیمت فارمیٹ کریں */}
        </p>
        <li>
          <Link href="/checkout">
            <button
              type="submit"
              className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
            >
              Proceed To Checkout
            </button>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Cart;


