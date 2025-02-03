

import Image from "next/image";

const ShopexOffer = () => {
  return (
    <section className="text-gray-600 body-font">
      <h2 className="scroll-m-10 ml-7 pb-2 text-[40px] text-[#151875] text-center font-bold first:mt-0">
        What Shopex Offer!
      </h2>

      <div className="container flex px-5 m-3 text-center py-15 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/6 w-full text-center mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/image/logo2.png"
                alt="testimonial"
                width={70} // Adjust as per your design
                height={70} // Adjust as per your design
                className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <h1 className="font-bold text-[#151875] mb-3 text-[20px]">24/7 Support</h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>

          <div className="lg:w-1/6 w-full text-center mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/image/loge4.png"
                alt="testimonial"
                width={70} // Adjust as per your design
                height={70} // Adjust as per your design
                className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <h1 className="font-bold text-blue-900 mb-3 text-[20px]">24/7 Support</h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>

          <div className="lg:w-1/6 w-full text-center mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/image/logo1.png"
                alt="testimonial"
                width={70} // Adjust as per your design
                height={70} // Adjust as per your design
                className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <h1 className="font-bold text-blue-900 mb-3 text-[20px]">24/7 Support</h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>

          <div className="lg:w-1/6 w-full text-center mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/image/loge3.png"
                alt="testimonial"
                width={70} // Adjust as per your design
                height={70} // Adjust as per your design
                className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <h1 className="font-bold text-blue-900 mb-3 text-[20px]">24/7 Support</h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;
