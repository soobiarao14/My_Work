"use client"
// import { ChevronDown, MailIcon, PhoneCall,  ShoppingCartIcon } from 'lucide-react';
// import React from 'react';

// const Topber = () => {
//   return (
//     <div className='w-full  p-3 hidden md:flex bg-violet-800 items-center justify-between'>
//       <div className='max-w-7xl mx-auto  items-center justify-center'>
        
//     <p className='text-white gap-1 flex '>  <MailIcon/>mhhasanul@gmail.com <PhoneCall className=''/>
//     <span className='font-bold underline ml-2'> (12345)67890 </span>
//     </p>
//       </div>
//       <p className='text-white flex items-center gap-2 mr-6'> English 
//         <ChevronDown/>
        

//       </p>
//       <p className='text-white flex items-center gap-2 mr-6'> USD
//         <ChevronDown/>
        

//       </p>
//       <p className='text-white flex items-center gap-2 mr-6'> Login
//         <ChevronDown/>

  
//    {/* Login */}
// <li className="flex items-center gap-2 hover:text-gray-200">
//   <Link href="/account">
//     <FaUser />
//   </Link>
// </li>

        

//       </p>
//       <p className='text-white flex items-center gap-2 mr-6'> Wishlist
//         <ChevronDown/>
        
// <ShoppingCartIcon/>
//       </p>
      
//     </div>
//   ); 
// } 

// export default Topber;
import { ChevronDown, MailIcon, PhoneCall} from 'lucide-react';

import Link from 'next/link'; // Importing Link from Next.js
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Topber = () => {
const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to update cart count from localStorage
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cartItems.length);
    };

    // Initial count on component mount
    updateCartCount();

    // Listen for changes to localStorage (when items are added)
    const handleStorageChange = () => {
      updateCartCount();
    };

    // Add event listener to update cart count immediately
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Clean up event listener
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <div className='w-full p-3 hidden md:flex bg-violet-800 items-center justify-between'>
      <div className='max-w-7xl mx-auto flex items-center justify-center'>
        <p className='text-white gap-1 flex'>
          <MailIcon /> sobiarao@gmail.com 
          <PhoneCall />
          <span className='font-bold underline ml-2'> (12345)67890 </span>
        </p>
      </div>
      
      <div className='flex items-center gap-6'>
        <p className='text-white flex items-center gap-2'>
          English
          <ChevronDown />
        </p>
      
          USD
          <ChevronDown />
    
        
        <p className='text-white flex items-center gap-2'>
          Wishlist
          <ChevronDown />
          <Link href={"/cart"}>
              <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl" />
              <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                 {cartCount} 
                </span>
              </Link>
        </p>
        
      </div>
    </div>
  ); 
};

export default Topber;

