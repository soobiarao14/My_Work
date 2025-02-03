// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';


// function OrderCompleted() {
//   return (
//     <>

//       <div className="min-h-screen bg-gray-100 py-12">
//         <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6 text-center">
//           {/* Heading */}
//           <h1 className="text-3xl font-bold text-[#1D3178]">Order Completed</h1>

//           {/* Tick Mark Image */}
//           <div className="flex justify-center">
//             <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
//               <Image
//                 src="/image/Vector 15.png" // Path to your tick image
//                 alt="Order Completed Icon"
//                 width={76}
//                 height={76}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Order Complete Text */}
//           <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

//           {/* Description */}
//           <p className="text-gray-500 text-sm sm:text-base">
//             Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
//             You will receive an email confirmation when your order is completed.
//           </p>

//           <Link href="/shoplist">
//           <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-lg font-medium">
//             Continue Shopping
//           </button>
//           </Link>

//           {/* Clock Icon */}
//           <div className="flex justify-center items-center mt-4">
//             <Image
//               src="/image/clock.png" // Path to your clock image
//               alt="Clock Icon"
//               width={80}
//               height={80}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default OrderCompleted;




'use client';

import Image from 'next/image';
import Link from 'next/link';

function OrderCompleted() {
  return ( 
    <>
      {/* Main Container for the Page */}
      <div className="min-h-screen bg-gray-100 py-12">
        {/* Card to display order completion message */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6 text-center">
          
          {/* Order Completed Heading */}
          <h1 className="text-3xl font-bold text-[#1D3178]">Order Completed</h1>

          {/* Tick Mark Image Section */} 
          <div className="flex justify-center">
            {/* Circle container for the tick mark */}
            <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
              {/* Tick Image */}
              <Image
                src="/image/Vector 15.png" // Path to your tick image
                alt="Order Completed Icon"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </div>

          {/* Order Complete Heading */}
          <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

          {/* Description of the order status */}
          <p className="text-gray-500 text-sm sm:text-base">
            {/* A brief description of the order status and next steps */}
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          {/* Continue Shopping Button */}
          <Link href="/shop">
            {/* Button to continue shopping */}
            <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-lg font-medium">
              Continue Shopping
            </button>
          </Link>

          {/* Clock Icon Section */}
          <div className="flex justify-center items-center mt-4">
            {/* Image of a clock icon, potentially to indicate the order processing time */}
            <Image
              src="/image/clock.png" // Path to your clock image
              alt="Clock Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    
    </>
  );
}

export default OrderCompleted;
