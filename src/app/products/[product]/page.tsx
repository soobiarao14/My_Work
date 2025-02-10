            



'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { client } from "@/sanity/lib/client";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




interface ProductDet {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  price: number;
  discountPercentage: number;
  description: string;
}



export default function ProductDetail({
  params,
}: {
  params: { product: string };
}) {

  const prodID = params.product;
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState<ProductDet | null>(null);

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0] {
        _id,
        name,
        image{ asset->{ url } },
        price,
        description,
        discountPercentage,
        
      }`;

      try {
        const data: ProductDet = await client.fetch(query, { id: prodID });
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [prodID]);
  console.log(product)

  const renderTabContent = () => {
    switch (activeTab) {
      case "additionalInfo":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">More Details</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>{product?.description}</li>
            </ul>
          </div>
        );
      case "reviews":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case "video":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Product Video</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Description</h2>
            <p className="text-gray-600 mt-2">{product?.description}</p>
          </div>
        );
    } 
  };

  if (!product) {
    return (
      <p className="text-center text-xl font-bold mt-10">Loading Product...</p>
    );
  }

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const exist = existingCart.some((item: { id: string }) => item.id === prodID);
    if (!exist) {
      const newCart = [
        ...existingCart,
        {
          id: prodID,
          name: product?.name,
          price:
            product?.price && product?.discountPercentage
              ? product.price -
                product.price * (product.discountPercentage / 100)
              : 0, // Set default to 0 or any fallback value you prefer
          quantity: 1,
          total: product?.price && product?.discountPercentage
              ? product.price -
                product.price * (product.discountPercentage / 100)
              : 0, // Set default to 0 or any fallback value you prefer
          pic: product?.image.asset.url,
        },
      ];
      // Save to localStorage and trigger storage event for Navbar
      localStorage.setItem("cart", JSON.stringify(newCart));

      // Trigger the cart update event in the Navbar
      window.dispatchEvent(new Event("storage"));
    } else {
      alert("Item already added to cart!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header className="bg-gray-100 py-6 mb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-pink-500">Product Details</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Product Details</span>
            </p>
          </div>
        </header>

        <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
          <div className="flex flex-col w-full md:w-1/3 space-y-4 mb-6 md:mb-0">
            <Image
              src={product?.image?.asset?.url}
              alt={product?.name}
              width={150}
              height={150}
              className="rounded-md mx-auto"
            />
          </div>

          <div className="flex justify-center items-center w-full md:w-1/3 p-4">
            <Image
              src={product?.image?.asset?.url}
              alt="Main Image"
              width={400}
              height={200}
              className="rounded-md mx-auto"
            />
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{product?.name}</h2>
            <div className="flex items-center text-yellow-500 mt-2">
              <span className="text-md">★★★★★</span>
              <span className="text-gray-500 text-xs ml-1">(22)</span>
            </div>
            <p className="text-gray-600 mt-2">{product?.description}</p>
            <p className="font-bold text-gray-800 mt-2">
            ${(product?.price * (1 - product?.discountPercentage / 100)).toFixed(2)} <span className="text-pink-600 line-through">${product?.price}</span>
            </p>
            <div className="flex gap-5 items-center">

              
            <button onClick={addToCart} className="flex space-x-3 items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded mt-4">
              <span className="text-sm">Add to Cart</span>
              <FontAwesomeIcon icon={faShoppingCart} className="text-white-600 text-xl" />
            </button>
            
            <Link href={'/wishlist'}><span><FaHeart size={30} className="ml-3 mt-4 text-red-600" /></span></Link>
            </div>
            <div className="mt-6">
              {/* <h2 className="text-lg font-bold text-gray-800 mt-4">Categories</h2> */}

<Link href="topCategories"
   className="text-lg font-bold text-gray-800 mt-4">Categories
</Link>
              <h2 className="text-lg font-bold text-gray-800">Share</h2>
              <span className="inline-flex mt-2">
                <Link href={"https://github.com/soobiarao14/My_Work"} className="text-black">
                  <FaGithub className="text-3xl mx-2" />
                </Link>
                <Link href={"https://vercel.com/soobia-raos-projects"} className="text-black">
                  <IoLogoVercel className="text-3xl mx-2" />
                </Link>
                <Link href={" https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=sobia-rao-31567a300"} className="text-black">
                  <FaLinkedin className="text-3xl mx-2" />
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ul className="flex space-x-4">
            {["description", "additionalInfo", "reviews", "video"].map((tab) => (
              <li key={tab}>
                <button
                  className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "text-black font-bold border-b-2 border-pink-600" : "text-black font-bold"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
      <Trending/>
      
    </div>
  );
};

const Trending = () => {
  const [products, setProducts] = useState<ProductDet[]>([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      const query = `*[_type == "product" && isFeaturedProduct == true]{
        name,
        price,
        image
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };
    fetchTrendingProducts();
  }, []);

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <Image
                src={product?.image?.asset?.url}
                alt={product?.name}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={500}
                height={100}
              />
              <h2 className="text-black font-medium text-lg mb-2 text-center">{product.name}</h2>
              <div className="flex items-center text-yellow-500 mt-2">
                <span className="text-md">★★★★★</span>
              </div>
              <div className="text-black text-sm flex justify-center gap-2">
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};