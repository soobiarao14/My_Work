







"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false); // For mobile menu toggle
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false); // For dropdown menu

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* Container */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div>
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl mb-3">
              Hekto
            </h2>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 text-white md:text-black">
              <li className="p-4 hover:underline  font-bold  hover:text-pink-600 underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li
                className="p-4 relative  font-bold  hover:underline hover:text-pink-600 underline-offset-2 cursor-pointer"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              >
                Pages
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md text-black font-bold text-sm z-50">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/checkout">Billing Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/ordercompleted">Order Completed</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/account">My Account</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/creatorpage">About </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="creatorfaq">FAQ</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="p-4 hover:underline hover:text-pink-600  font-bold  underline-offset-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600  font-bold  underline-offset-2">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600   font-bold underline-offset-2">
                <Link href="/contact-us">Contact-Us</Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex gap-x-4 items-center">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-gray-200 rounded-md p-2">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
                placeholder="Search..."
              />
              <FontAwesomeIcon icon={faSearch} className="ml-2 text-gray-600" />
            </div>

            {/* Icons */}
            <div className="hidden lg:flex items-center gap-x-4">
              <FontAwesomeIcon icon={faHeart} className="text-gray-600 text-xl" />
              <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 text-xl" />
            </div>

            {/* Toggle Button */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
