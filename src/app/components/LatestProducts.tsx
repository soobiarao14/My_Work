// "use client"
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// // Define TypeScript interface for product data
// interface Product {
//   _id: string;
//   name: string;
//   img: string;
//   price: number;
//   discountPercentage: number;
// }

// const LatestProducts: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"] [0...6] {
//         _id,
//         name,
//         "img": image.asset->url,
//         price,
//         discountPercentage,
//       }`;
      
      
//       try {
//         const data: Product[] = await client.fetch(query);
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);
 
//   return (
//     <div className="w-full bg-white py-20">
//       {/* Heading */}
//       <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">Latest Products</h2>

//       {/* Tabs */}
// <div className="flex justify-center space-x-8 mb-16">
//   {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
//     <button
//       key={tab}
//       className="text-[#3F509E] text-lg font-medium relative group hover:text-[#FB2E86]"
//     >
//       {tab} 
//       {/* Underline */}
//       <span
//         className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FB2E86] transition-all duration-300 group-hover:w-full"
//       ></span>
//     </button>
//   ))}
// </div>


//       {/* Product Grid */}
//       <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <Link href={`/slug/${product._id}`}><div key={product._id} className="relative group">
//             {/* Product Image */}
//             <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
//               {/* Sale Tag */}
//               {/* {product.sale && ( */}
//                 <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
//                   Sale
//                 </span>
//               {/* )} */}
//               <img src={product.img} alt={product.name} className="object-" />
//           <div>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="text-center mt-4">
//               <h3 className="text-lg font-semibold text-[#3F509E]">{product.name}</h3>
//               <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
//                 <span className="text-red-600 font-medium line-through">${product.price}</span>
//                 <span className="text-gray-800">${product.price - (product.price * product.discountPercentage / 100)}</span>
//               </div>
//             </div>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// ;
// export default LatestProducts



// // // // fetch


// // // import { client } from '@/sanity/lib/client'
// // // import Image from 'next/image'
// // // import React from 'react'

// // // interface Idata {
// // //     name: string,
// // //     title: string;
// // //     discription: string;
// // //     tags: string[];
// // //     imageurl:string;


// // }


// // // const page  = async () => {
// // //     const query =await client.fetch(`*[_type == 'product'] {
// // //   name,
// // //   title,
// // //   discription,
// // //     tags, 
// // //     "imageurl":productImage.asset->url
// // // }
// // // `
// // // )
// // // const data =await query
// // // console.log(data);

// // //   return (
// // //     <div className='grid grid-cols-4 gap-4'>
      
// // //       {
// // //         data.map((item:Idata)=>{
// // //             return(
// // //               <div>
// // //                 {item.name}
// // //                 {item.title}
// // //                 {item.discription}
// // //                <Image src= {item.imageurl} alt={item.name} width={200} height={200}/>
// // //               </div>     

            
// // //             )
// // //         })
// // //       }
// // //     </div>
// // //   )
// // // }

// // // export default page
 




// "use client"
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// // Define TypeScript interface for product data
// interface Product {
//   _id: string;
//   name: string;
//   img: string;
//   price: number;
//   discountPercentage: number;
// }

// const LatestProducts: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"] [0...6] {
//         _id,
//         name,
//         "img": image.asset->url,
//         price,
//         discountPercentage,
//       }`;
      
      
//       try {
//         const data: Product[] = await client.fetch(query);
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);
 
//   return (
//     <div className="w-full bg-white py-20">
//       {/* Heading */}
//       <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">Latest Products</h2>

//       {/* Tabs */}
// <div className="flex justify-center space-x-8 mb-16">
//   {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
//     <button
//       key={tab}
//       className="text-[#3F509E] text-lg font-medium relative group hover:text-[#FB2E86]"
//     >
//       {tab} 
//       {/* Underline */}
//       <span
//         className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FB2E86] transition-all duration-300 group-hover:w-full"
//       ></span>
//     </button>
//   ))}
// </div>


//       {/* Product Grid */}
//       <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <Link href={`/slug/${product._id}`}><div key={product._id} className="relative group">
//             {/* Product Image */}
//             <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
//               {/* Sale Tag */}
//               {/* {product.sale && ( */}
//                 <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
//                   Sale
//                 </span>
//               {/* )} */}
//               <img src={product.img} alt={product.name} className="object-" />
//           <div>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="text-center mt-4">
//               <h3 className="text-lg font-semibold text-[#3F509E]">{product.name}</h3>
//               <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
//                 <span className="text-red-600 font-medium line-through">${product.price}</span>
//                 <span className="text-gray-800">${product.price - (product.price * product.discountPercentage / 100)}</span>
//               </div>
//             </div>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// ;
// export default LatestProducts


"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define TypeScript interface for product data
interface Product {
  _id: string;
  name: string;
  img: string;
  price: number;
  discountPercentage: number;
}  

const LatestProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] [0...6] {
        _id,
        name,
        "img": image.asset->url,
        price,
        discountPercentage,
      }`;
      
      
      try {
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
 
  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">Latest Products</h2>

      {/* Tabs */}
<div className="flex justify-center space-x-8 mb-16">
  {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
    <button
      key={tab}
      className="text-[#3F509E] text-lg font-medium relative group hover:text-[#FB2E86]"
    >
      {tab} 
      {/* Underline */}
      <span
        className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FB2E86] transition-all duration-300 group-hover:w-full"
      ></span>
    </button>
  ))}
</div>


      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id} ><div  className="relative group">
            {/* Product Image */}
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
              {/* Sale Tag */}
              {/* {product.sale && ( */}
                <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
                  Sale
                </span>
              {/* )} */}
              <Image src={product.img} alt={product.name} height={200} width={200} className="object-" />
          <div>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-[#3F509E]">{product.name}</h3>
              <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
                <span className="text-red-600 font-medium line-through">${product.price}</span>
                <span className="text-gray-800">${product.price - (product.price * product.discountPercentage / 100)} </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;