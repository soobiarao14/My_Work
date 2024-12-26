import React from "react";
import Image from "next/image";

const Trending = () => {
  const products = [
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image/boc2.png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image/image 1 (1).png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image/box4.png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image/image 1 (1).png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#151875] text-center mb-6">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain h-full"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-[#151875] font-semibold mb-2">{product.name}</h3>
              <div className="text-gray-500">
                <span className="text-[#151875] line-through mr-2">
                  ${product.originalPrice}
                </span>
                <span>${product.price}</span>


            
            </div>
          </div>
        ))}
      </div>

      {/* Vouchers and Product List Section */}
      <div className="w-full max-w-screen-xl mt-7 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Voucher 1 */}
        <div className="bg-pink-100 p-8 flex flex-col justify-between  relative h-[200px]">
          <h3 className="text-[#3F509E] text-1xl font-bold mb-4">23% Off in all products</h3>
          <button className="text-pink-600  mr-[120px] mb-[180px] underline text-sm font-medium">Shop Now</button>
          <Image
            src="/image/boc6.png"
            alt="Voucher Image"
            width={150}
            height={200}
            className="absolute bottom-2 right-0 object-contain"
          />
          
        </div>

        <div className="bg-pink-100 p-5 flex flex-col justify-between relative h-[200px]">
          <h3 className="text-[#3F509E] text-1xl font-bold mb-4">23% Off in all products</h3>
   <button className="text-pink-600  underline  mr-[120px] mb-[200px] text-sm font-medium mt-4">
    View Collection
  </button>
          <Image
            src="/image/box5.png"
            alt="Voucher Image"
            width={200}
            height={200}
             className="absolute bottom-2 right-2 object-contain"
          />
            </div>
             {/* prodect list */}
        <div className=" flex flex-col justify-between relative h-[200px]">
  
          <Image
            src="/image/list1.png"
            alt="Voucher Image"
            width={200}
            height={200} 
             className="absolute bottom-2  right-[140px] object-contain"

          />
           <Image
            src="/image/list2.png"
            alt="Voucher Image"
            width={200}
            height={200}
             className=" bottom-200 right-[150px]    object-contain"
          />
             <Image
            src="/image/list3.png"
            alt="Voucher Image"
            width={200}
            height={200}
             className=" pt-4 right-[150px]  mb-[500px] object-contain"
          />
            </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Trending;
