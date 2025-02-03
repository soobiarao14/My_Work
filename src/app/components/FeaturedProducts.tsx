 "use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // Import the Next.js Image component
import Link from "next/link";

// Define TypeScript interface for product data
interface Product {
  _id: string;
  name: string;
  img: string;
  price: number;
  discountPercentage: number;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && isFeaturedProduct == true] [0...4] { 
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
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#151875] mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <div className="relative group">
                <div
                  className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
                  style={{ height: "361px" }} // Optional height for consistent card size
                >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                {/* Use Next.js Image component */}
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200} // Specify width and height
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="mt-7 text-center">
                <h3 className="text-lg font-semibold text-pink-800">
                  {product.name}
                </h3>
                {/* <p className="text-sm text-[#151875]">Code - {product._id}</p> */}
                <p className="text-lg font-bold text-[#151875] mt-2">
                  ${product.price}
                </p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    {product.discountPercentage}% off
                  </p>
                )}
              </div>
              {/* Optional hover overlay effect */}
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;




// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image"; // Import Next.js Image component
// import { client } from "@/sanity/lib/client"; // Import Sanity client

// interface Product {
//   _id: string;
//   name: string;
//   img: string;
//   price: number;
//   discountPercentage: number;
// }

// const FeaturedProducts: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product" && isFeaturedProduct == true] [0...3] {
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
//     <section className="bg-purple-50 py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold text-center text-[#151875] mb-8">
//           Featured Products
//         </h2>
//         {/* Responsive grid layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
//               style={{ height: "361px" }} // Optional height for consistent card size
//             >
//               <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
//                 {/* Use Next.js Image component */}
//                 <Image
//                   src={product.img} // Ensure correct Sanity image field path
//                   alt={product.name}
//                   width={200} // Specify width and height
//                   height={200}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="mt-4 text-center">
//                 <h3 className="text-lg font-semibold text-pink-800">
//                   {product.name}
//                 </h3>
//                 {/* <p className="text-sm text-[#151875]">{product.slug.current}</p> */}
//                 <p className="text-lg font-bold text-[#151875] mt-2">
//                   {product.price}
//                 </p>
//               </div>
//               {/* Optional hover overlay effect */}
//               <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
//                 <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;
