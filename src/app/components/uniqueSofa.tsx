import Image from "next/image";
import pinkBackground from '/public/image/pink.png'; // Importing pink background imag
import Link from 'next/link';
export default function uniqueSofa  () {
  return (
    <section className="text-gray-600   bg-gray-100 w-full h-[579px] body-font">
      <div className="container mx-auto  flex px-5 py-70 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full  mb-150 md:w-1/2 w-5/6  md:mb-0">


        <div className="relative flex justify-center items-center">
          {/* Pink Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src={pinkBackground}
              alt="Background"
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Sofa Image */}
          <Image
            src="/image/homeso.png"
            alt="Sofa"
            width={400}
            height={400}
            className="relative z-10 object-contain"
          />
          
        </div>

          
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#151875]">
          Unique Features Of leatest &
        
            <br className="hidden lg:inline-block" /> 
Trending Poducts
          </h1>
          

          {/* Points */}
          <ul className="space-y-4 mb-8">
            {/* Point 1 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-3"></div>
              <p className="text-gray-600">
                All frames constructed with hardwood solids and laminates.
              </p>
            </li>

            {/* Point 2 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-3"></div>
              <p className="text-gray-600">
                Reinforced with double wood dowels, glue, screw-nails, corner
                blocks, and machine nails.
              </p>
            </li>

            {/* Point 3 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-3"></div>
              <p className="text-gray-600">
                Arms, backs, and seats are structurally reinforced.
              </p>
            </li>
          </ul>
  
       
          <div className="flex items-center gap-4">
      {/* Add to Cart Button */}
      <Link href="/cart">
        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors">
          Add To Cart
        </button>
      </Link>
      <div>   
            {/* Additional Text */}
              <p className="text-[#3F509E] font-semibold text-sm">B&B Italian Sofa</p>
              <p className="text-[#3F509E] font-bold text-sm">$52.00</p></div>
      
          </div>
        </div>
      </div>
    </section>
  );
}
