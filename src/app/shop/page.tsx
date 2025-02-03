import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { client } from "@/sanity/lib/client";

// Fetch product data from Sanity


const ShopList = async () => {

  const query = `*[_type == "product"]{
    _id,
    name,
    image {
      asset -> {
        url
      }
    },
    price,
    oldPrice,
    description,
    rating,
    colors
  }`;

  const products = await client.fetch(query);



  return (
    <>
      <div className="py-28 px-8">
        <h1 className="text-4xl text-[#151875] font-bold">Shop List</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Shopping List</p>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl text-[#151875] font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex text-[#151875] flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex text-[#151875] items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium text-[#151875]">
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border text-[#151875]  rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>

          {/* Sort By */}
          <div className="flex  items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium text-[#151875]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm  text-[#151875] focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex text-[#151875]  items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FB2E86]">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-[#151875] text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="p-8">
        <div className="space-y-6">
          {products.map((product:any) => (
            <Link href={`/products/${product._id}`} key={product._id}>
            <div
              className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="lg:w-1/1 flex-shrink-0">
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl text-[#151875] font-semibold">{product.name}</h3>
                  {/* Color Options */}
                  {/* <div className="mt-2 flex gap-1">
                    {product.colors.map((color:any, i:number) => (
                      <span key={i} className={`w-3 h-3 ${color} rounded-full`}></span>
                    ))}
                  </div> */}
                </div>

                {/* Price and Old Price */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-lg  text-[#151875] font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-pink-500 line-through">{product.oldPrice}</span>
                  )}
                </div>
                <p className="mt-2 text-gray-600 w-96">{product.description}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating ? "text-yellow-400" : "text-gray-300"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 text-[#151875] rounded-full hover:bg-gray-300">
                    <AiOutlineHeart size={24} />
                  </button>
                  <Link href="/cart">
                    <button className="flex items-center justify-center w-10 h-10 text-[#151875] rounded-full hover:bg-gray-300">
                      <AiOutlineShoppingCart size={24} />
                    </button>
                  </Link>
                  <button className="flex items-center justify-center w-10 h-10  text-[#151875] rounded-full hover:bg-gray-300">
                    <AiOutlineEye size={24} />
                  </button>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Logos Section */}
        <div className="w-full py-12">
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <Image
              src="/image/image 1174.png"
              alt="Logos"
              width={800}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
