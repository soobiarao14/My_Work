import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/Image/chair.png", // Ensure this path is correct and inside the public directory
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/Image/chair2.png",
    },
    { 
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",     
      image: "/Image/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/Image/chair4.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#151875] mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                {/* Use Next.js Image component */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200} // Specify width and height
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-pink-800">
                  {product.name}
                </h3>
                <p className="text-sm text-[#151875]">{product.code}</p>
                <p className="text-lg font-bold text-[#151875] mt-2">
                  {product.price}
                </p>
              </div>
              {/* Optional hover overlay effect */}
              {/* 
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div> 
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
