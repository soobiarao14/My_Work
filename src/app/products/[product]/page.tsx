// // import Image from "next/image";
// // import { FiHeart } from "react-icons/fi"; // Wishlist icon
// // import { FaStar, FaEye } from "react-icons/fa"; // Star and Eye icons

// // function sulgpage() {
// //   return (
// //     <div className="w-full flex justify-center items-center mt-10 mb-10">
// //       <div className="w-full sm:w-[90%] lg:w-[80%]">
// //         {/* Top Section */}
// //         <div className="flex justify-between items-center mb-7">
// //           <div>
          
// //           </div>
// //         </div>

// //         {/* Products  */}
// //         <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {[ 
// //             {
// //               id: 1,
// //               img: "/images/jacket.png",
// //               name: "The North Coat",
// //               discountedPrice: "$200",
// //               originalPrice: "$260",
// //               rating: 4.7,
// //               reviews: 78,
// //             },

            
// //           ].map((product) => (
// //             <div key={product.id} className="relative group">
// //               {/* Product Image */}
// //               <div className="w-full sm:w-[180px] lg:w-[200px] h-[170px] bg-gray-200 flex justify-center items-center relative">
// //                 <Image src={product.img} width={300} height={3000} alt={product.name} />
                
// //                 {/* Wishlist and Eye Icons */}
// //                 <div className="absolute top-2 right-2 space-y-1">
// //                   <FiHeart className="text-black bg-white p-1 w-6 h-6 rounded-full" />
// //                   <FaEye className="text-black bg-white p-1 w-6 h-6 rounded-full" />
// //                 </div>

// //                 {/* Add to Cart Button on Hover */}
// //                 <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100">
// //                   <button className="w-full">Add to Cart</button>
// //                 </div>
// //               </div>

// //               {/* Product Info */}
// //               <div className="flex flex-col mt-2">
// //                 <span className="font-bold text-sm sm:text-base">{product.name}</span>
// //                 {/* Price */}
// //                 <div className="flex items-center space-x-2">
// //                   <span className="text-red-500 font-bold">{product.discountedPrice}</span>
// //                   <span className="line-through text-gray-500">{product.originalPrice}</span>
// //                 </div>
// //                 {/* Rating */}
// //                 <div className="flex items-center mt-1">
// //                   {[...Array(5)].map((_, index) => (
// //                     <FaStar
// //                       key={index}
// //                       className={`w-4 h-4 ${
// //                         index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
// //                       }`}
// //                     />
// //                   ))}
                
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default sulgpage


// import React from 'react';

// const sulgpage = () => {
//   return (
//     <div>
//       <h2 className='text-4xl text-center flex font-bold justify-center items-center text-emerald-700'>kIYA YAD KARO GI</h2>
//       <h2 className='text-4xl text-center flex font-bold justify-center items-center text-emerald-700'>ab me ker sakta hun apna kaam ?</h2>
      
    
//     <h2 className='text-4xl text-center flex font-bold justify-center items-center text-emerald-700'>nahi </h2>
   
//       {/* Header Section */}
//       <div className="py-16 ml-8 lg:ml-36 space-y-2">
//         <h1 className="text-4xl font-bold text-[#001F54]">Blog</h1> {/* Dark blue */}
//         <div className="flex items-center gap-2">
//           {/* <Link href={"/"}>Home</Link> */}
//           <span className="text-black mx-2">.</span>
//           <span className="text-[#FB2E86]">Latest Blogs</span>
//         </div>
//       </div>
   
   
   
//     </div>
//   );
// }



// export default sulgpage;




// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";
// // import TopBar from "../components/navbar";
// // import Header from "../components/header";

// const ProductCard = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "additionalInfo":
//         return (
          
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">More Details</h2>
//             <ul className="list-disc ml-6 mt-2">
//               <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
//               <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
//               <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
//               <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
//             </ul>
//           </div>
//         );
//       case "reviews":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
//             <p className="text-gray-600 mt-2">Coming soon...</p>
//           </div>
//         );
//       case "video":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Product Video</h2>
//             <p className="text-gray-600 mt-2">Coming soon...</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Description</h2>
//             <p className="text-gray-600 mt-2">
//             Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
//             </p>
//           </div>
//         );
//     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* <TopBar/>
// //       <Header/> */}
// //       <div className="container mx-auto px-4 py-6">
// //         <header className="bg-gray-100 py-6 mb-6">
// //           <div className="container mx-auto px-4">
// //             <h1 className="text-2xl font-bold text-pink-500">Product Details</h1>
// //             <p className="text-sm text-gray-500">
// //               Home / Pages / <span className="text-pink-500">Product Details</span>
// //             </p>
// //           </div>
// //         </header>

// //         <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
// //           <div className="flex flex-col w-full md:w-1/3 space-y-4 mb-6 md:mb-0">
// //             <Image src="/us.jpg" alt="Image 1" width={150} height={150} className="rounded-md mx-auto" />
// //             <Image src="/lam.jpg" alt="Image 2" width={150} height={150} className="rounded-md mx-auto" />
// //             <Image src="/nail.jpg" alt="Image 3" width={150} height={150} className="rounded-md mx-auto" />

// //           </div>

// //           <div className="flex justify-center items-center w-full md:w-1/3 p-4">
// //             <Image src="/purse.jpg" alt="Main Image" width={400} height={200} className="rounded-md mx-auto" />
// //           </div>

// //           <div className="w-full md:w-1/3 p-4">
// //             <h2 className="text-2xl font-bold text-gray-800 mt-4">Playwood Arm Chair</h2>
// //             <div className="flex items-center text-yellow-500 mt-2">
// //               <span className="text-md">★★★★★</span>
// //               <span className="text-gray-500 text-xs ml-1">(22)</span>
// //             </div>
// //             <p className="text-gray-600 mt-2">
// //               A stylish and comfortable armchair for modern interiors.
// //             </p>
// //             <p className="font-bold text-gray-800 mt-2">
// //               $32.00 <span className="text-pink-600 line-through">$40.00</span>
// //             </p>
// //             <button className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded mt-4">
// //               <span className="text-sm">Add to Cart</span>
// //               <FaHeart size={17} className="ml-3" />
// //             </button>

// //             <div className="mt-6">
// //             <h2 className="text-lg font-bold text-gray-800 mt-4">Categories</h2>
// //             <h2 className="text-lg font-bold text-gray-800">Tags</h2>
// //               <h2 className="text-lg font-bold text-gray-800 mt-2">Share</h2>
// //               <span className="inline-flex mt-2">
// //                 <Link href="#" className="text-black">
// //                   <FaGithub className="text-3xl mx-2" />
// //                 </Link>
// //                 <Link href="#" className="text-black">
// //                   <IoLogoVercel className="text-3xl mx-2" />
// //                 </Link>
// //                 <Link href="#" className="text-black">
// //                   <FaLinkedin className="text-3xl mx-2" />
// //                 </Link>
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-6">
// //           <ul className="flex space-x-4">
// //             {["description", "additionalInfo", "reviews", "video"].map((tab) => (
// //               <li key={tab}>
// //                 <button
// //                   className={`px-4 py-2 text-sm font-medium ${
// //                     activeTab === tab ? "text-black font-bold border-b-2 border-pink-600" : "text-black font-bold"
// //                   }`}
// //                   onClick={() => setActiveTab(tab)}
// //                 >
// //                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //           <div className="mt-4">{renderTabContent()}</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Trending = () => {
// //   const products = [
// //     { id: 1, name: "Men's Fashion Wear", price: "$43.00", img: "/boy1.jpg" },
// //     { id: 2, name: "Women’s Fashion", price: "$67.00", img: "/girl1.jpg" },
// //     { id: 3, name: "Wall Clock", price: "$51.00", img: "/girl2.jpg" },
// //     { id: 4, name: "Top Wall Digital Clock", price: "$51.00",  img: "/girl3.jpg" },
// //   ];

// //   return (
// //     <section className="text-gray-600 body-font py-12">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col text-center w-full mb-12">
// //           <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
// //             >
// //               <Image
// //                 src={product.img}
// //                 alt={product.name}
// //                 className="rounded-lg w-full h-60 object-cover mb-4"
// //                 width={500}
// //                 height={100}
// //               />
// //               <h2 className="text-black font-medium text-lg mb-2 text-center">{product.name}</h2>
// //               <div className="flex items-center text-yellow-500 mt-2">
// //               <span className="text-md">★★★★★</span>
// //               </div>
// //               <div className="text-black text-sm flex justify-center gap-2">
// //                 <span>{product.price}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default function Page() {
// //   return (
// //     <>
// //       <ProductCard />
// //       <Trending />
// //     </>
// //   );

// // }





// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";
// import { Any } from "next-sanity";

// // Dummy fetch functions to simulate data fetching
// const fetchProductDetails = async (productId:any) => {
//   // Replace this with a real API request
//   return {
//     name: "Playwood Arm Chair",
//     price: 32.00,
//     oldPrice: 40.00,
//     description: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet...",
//     images: [
//       "/us.jpg", "/lam.jpg", "/nail.jpg", "/purse.jpg"
//     ],
//     reviews: [
//       "Great quality!", "Comfortable and stylish.", "Worth the price!"
//     ],
//     categories: ["Furniture", "Home Decor"],
//     tags: ["Arm Chair", "Wooden", "Modern"],
//   };
// };

// const fetchRelatedProducts = async () => {
//   // Replace this with a real API request
//   return [
//     { id: 1, name: "Men's Fashion Wear", price: "$43.00", img: "/boy1.jpg" },
//     { id: 2, name: "Women’s Fashion", price: "$67.00", img: "/girl1.jpg" },
//     { id: 3, name: "Wall Clock", price: "$51.00", img: "/girl2.jpg" },
//     { id: 4, name: "Top Wall Digital Clock", price: "$51.00",  img: "/girl3.jpg" },
//   ];
// };

// const ProductCard = ({ productId }:Any) => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     // Fetch product details dynamically based on productId
//     const loadProductDetails = async () => {
//       const details = await fetchProductDetails(productId);
//       setProductDetails(details);
//     };
//     loadProductDetails();
//   }, [productId]);

//   if (!productDetails) return <div>Loading...</div>;

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "additionalInfo":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">More Details</h2>
//             <ul className="list-disc ml-6 mt-2">
//               <li>{productDetails.description}</li>
//             </ul>
//           </div>
//         );
//       case "reviews":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
//             {productDetails.reviews.length ? (
//               <ul className="list-disc ml-6 mt-2">
//                 {productDetails.reviews.map((review, index) => (
//                   <li key={index}>{review}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-600 mt-2">Coming soon...</p>
//             )}
//           </div>
//         );
//       case "video":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Product Video</h2>
//             <p className="text-gray-600 mt-2">Coming soon...</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Description</h2>
//             <p className="text-gray-600 mt-2">{productDetails.description}</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto px-4 py-6">
//         <header className="bg-gray-100 py-6 mb-6">
//           <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold text-pink-500">Product Details</h1>
//             <p className="text-sm text-gray-500">
//               Home / Pages / <span className="text-pink-500">Product Details</span>
//             </p>
//           </div>
//         </header>

//         <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
//           <div className="flex flex-col w-full md:w-1/3 space-y-4 mb-6 md:mb-0">
//             {productDetails.images.map((image, index) => (
//               <Image key={index} src={image} alt={`Image ${index}`} width={150} height={150} className="rounded-md mx-auto" />
//             ))}
//           </div>

//           <div className="flex justify-center items-center w-full md:w-1/3 p-4">
//             <Image src={productDetails.images[3]} alt="Main Image" width={400} height={200} className="rounded-md mx-auto" />
//           </div>

//           <div className="w-full md:w-1/3 p-4">
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">{productDetails.name}</h2>
//             <div className="flex items-center text-yellow-500 mt-2">
//               <span className="text-md">★★★★★</span>
//               <span className="text-gray-500 text-xs ml-1">(22)</span>
//             </div>
//             <p className="text-gray-600 mt-2">A stylish and comfortable armchair for modern interiors.</p>
//             <p className="font-bold text-gray-800 mt-2">
//               ${productDetails.price} <span className="text-pink-600 line-through">${productDetails.oldPrice}</span>
//             </p>
//             <button className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded mt-4">
//               <span className="text-sm">Add to Cart</span>
//               <FaHeart size={17} className="ml-3" />
//             </button>

//             <div className="mt-6">
//               <h2 className="text-lg font-bold text-gray-800 mt-4">Categories</h2>
//               <p>{productDetails.categories.join(", ")}</p>
//               <h2 className="text-lg font-bold text-gray-800 mt-2">Tags</h2>
//               <p>{productDetails.tags.join(", ")}</p>
//               <h2 className="text-lg font-bold text-gray-800 mt-2">Share</h2>
//               <span className="inline-flex mt-2">
//                 <Link href="#" className="text-black">
//                   <FaGithub className="text-3xl mx-2" />
//                 </Link>
//                 <Link href="#" className="text-black">
//                   <IoLogoVercel className="text-3xl mx-2" />
//                 </Link>
//                 <Link href="#" className="text-black">
//                   <FaLinkedin className="text-3xl mx-2" />
//                 </Link>
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <ul className="flex space-x-4">
//             {["description", "additionalInfo", "reviews", "video"].map((tab) => (
//               <li key={tab}>
//                 <button
//                   className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "text-black font-bold border-b-2 border-pink-600" : "text-black font-bold"}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">{renderTabContent()}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Trending = () => {
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const loadRelatedProducts = async () => {
//       const products = await fetchRelatedProducts();
//       setRelatedProducts(products);
//     };
//     loadRelatedProducts();
//   }, []);

//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {relatedProducts.map((product) => (
//             <div
//               key={product.id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
//             >
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 className="rounded-lg w-full h-60 object-cover mb-4"
//                 width={500}
//                 height={100}
//               />
//               <h2 className="text-black font-medium text-lg mb-2 text-center">{product.name}</h2>
//               <div className="flex items-center text-yellow-500 mt-2">
//                 <span className="text-md">★★★★★</span>
//               </div>
//               <div className="text-black text-sm flex justify-center gap-2">
//                 <span>{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// // };

// // export default function Page() {
// //   return (
//     <>
//       <ProductCard productId={1} />
//       <Trending />
//     </>
//   );
// }




// api



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";
// // import { client } from "./lib/sanity";  // Import the sanity cliimport { client } from "@/sanity/lib/client";ent
// import { client } from "@/sanity/lib/client";



// interface ProductDet {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   price: number;
//   discountPercentage: number;
//   description: string;
// }



// export default function ProductDetail({
//   params,
// }: {
//   params: { product: string };
// }) {

//   const prodID = params.product;
//   const [activeTab, setActiveTab] = useState("description");
//   const [product, setProduct] = useState<ProductDet | null>(null);

//   // Fetch product data from Sanity
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && _id == $id][0] {
//         _id,
//         name,
//         image{ asset->{ url } },
//         price,
//         description,
//         discountPercentage,
        
//       }`;

//       try {
//         const data: ProductDet = await client.fetch(query, { id: prodID });
//         if (data) {
//           setProduct(data);
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [prodID]);
//   console.log(product)

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "additionalInfo":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">More Details</h2>
//             <ul className="list-disc ml-6 mt-2">
//               <li>{product?.description}</li>
//             </ul>
//           </div>
//         );
//       case "reviews":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
//             <p className="text-gray-600 mt-2">Coming soon...</p>
//           </div>
//         );
//       case "video":
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Product Video</h2>
//             <p className="text-gray-600 mt-2">Coming soon...</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-4">
//             <h2 className="text-lg font-bold text-gray-800">Description</h2>
//             <p className="text-gray-600 mt-2">{product?.description}</p>
//           </div>
//         );
//     }
//   };

//   if (!product) {
//     return (
//       <p className="text-center text-xl font-bold mt-10">Loading Product...</p>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto px-4 py-6">
//         <header className="bg-gray-100 py-6 mb-6">
//           <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold text-pink-500">Product Details</h1>
//             <p className="text-sm text-gray-500">
//               Home / Pages / <span className="text-pink-500">Product Details</span>
//             </p>
//           </div>
//         </header>

//         <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
//           <div className="flex flex-col w-full md:w-1/3 space-y-4 mb-6 md:mb-0">
//             <Image
//               src={product?.image?.asset?.url}
//               alt={product?.name}
//               width={150}
//               height={150}
//               className="rounded-md mx-auto"
//             />
//           </div>

//           <div className="flex justify-center items-center w-full md:w-1/3 p-4">
//             <Image
//               src={product?.image?.asset?.url}
//               alt="Main Image"
//               width={400}
//               height={200}
//               className="rounded-md mx-auto"
//             />
//           </div>

//           <div className="w-full md:w-1/3 p-4">
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">{product?.name}</h2>
//             <div className="flex items-center text-yellow-500 mt-2">
//               <span className="text-md">★★★★★</span>
//               <span className="text-gray-500 text-xs ml-1">(22)</span>
//             </div>
//             <p className="text-gray-600 mt-2">{product?.description}</p>
//             <p className="font-bold text-gray-800 mt-2">
//               ${product?.price} <span className="text-pink-600 line-through">${(product?.price * (1 - product?.discountPercentage / 100)).toFixed(2)}</span>
//             </p>
//             <button className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded mt-4">
//               <span className="text-sm">Add to Cart</span>
//               <FaHeart size={17} className="ml-3" />
//             </button>

//             <div className="mt-6">
//               <h2 className="text-lg font-bold text-gray-800 mt-4">Categories</h2>
//               <p>{product?.category}</p>
//               <h2 className="text-lg font-bold text-gray-800">Share</h2>
//               <span className="inline-flex mt-2">
//                 <Link href="#" className="text-black">
//                   <FaGithub className="text-3xl mx-2" />
//                 </Link>
//                 <Link href="#" className="text-black">
//                   <IoLogoVercel className="text-3xl mx-2" />
//                 </Link>
//                 <Link href="#" className="text-black">
//                   <FaLinkedin className="text-3xl mx-2" />
//                 </Link>
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <ul className="flex space-x-4">
//             {["description", "additionalInfo", "reviews", "video"].map((tab) => (
//               <li key={tab}>
//                 <button
//                   className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "text-black font-bold border-b-2 border-pink-600" : "text-black font-bold"}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">{renderTabContent()}</div>
//         </div>
//       </div>
//       <Trending/>
//     </div>
//   );
// };

// const Trending = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchTrendingProducts = async () => {
//       const query = `*[_type == "product" && isFeaturedProduct == true]{
//         name,
//         price,
//         image
//       }`;
//       const data = await client.fetch(query);
//       setProducts(data);
//     };
//     fetchTrendingProducts();
//   }, []);

//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
//             >
//               <Image
//                 src={product?.image?.asset?.url}
//                 alt={product?.name}
//                 className="rounded-lg w-full h-60 object-cover mb-4"
//                 width={500}
//                 height={100}
//               />
//               <h2 className="text-black font-medium text-lg mb-2 text-center">{product.name}</h2>
//               <div className="flex items-center text-yellow-500 mt-2">
//                 <span className="text-md">★★★★★</span>
//               </div>
//               <div className="text-black text-sm flex justify-center gap-2">
//                 <span>{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default function Page() {
//   return (
//     <>
//       <ProductCard />
//       <Trending />
//     </>
//   );
// }
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