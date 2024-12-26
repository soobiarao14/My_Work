'use client';

import Image from 'next/image';



function LatestProducts() {
  const products = [
    { id: 1, img: "/image/product1.png" },
    { id: 2, img: "/image/product2 (2).png" , sale: true },
    { id: 3, img: "/image/product3.png" },
    { id: 4, img: "/image/product4.png"  },
    { id: 5, img: "/image/product5.png" },
    { id: 6, img: "/image/product6.png" },
  ];
 
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
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
              {/* Sale Tag */}
              {product.sale && (
                <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
                  Sale
                </span>
              )}
              <Image
                src={product.img}
                width={200}
                height={200}
                alt="Comfy Handy Craft"
                className="object-contain"
              />

          <div>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-[#3F509E]">Comfy Handy Craft</h3>
              <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
                <span className="text-red-600 font-medium line-through">$65.00</span>
                <span className="text-gray-800">$42.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;