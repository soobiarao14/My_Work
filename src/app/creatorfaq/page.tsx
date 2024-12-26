'use client';
import Image from "next/image";

function FAQ() {
  return (
    <div className="w-full bg-gray-100 py-8">
      {/* Breadcrumb Section */}
      <section className="py-8 px-4 md:px-8">
        {/* Page Title */}
        <h1 className="text-[#101750] text-4xl font-bold text-center">FAQ</h1>
        {/* Breadcrumb Navigation */}
        <p className="mt-4 text-black text-center text-sm">
          Home . Pages . <span className="text-[#FB2E86]">FAQ</span>
        </p>
      </section>

      {/* Main Content Section */}
      <section className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-8">
        {/* Left Section: FAQ Items */}
        <div>
          {/* Section Title */}
          <h2 className="text-[#151875] text-2xl font-bold mb-6">
            General Information
          </h2>

          {/* FAQ Items */}
          {[
            {
              question: "Eu dictumst cum at sed euismod condimentum?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            },
            {
              question: "Magna bibendum est fermentum eros?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            },
            {
              question: "Odio muskana hak eris conseekin sceleton?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            },
            {
              question: "Elit id blandit sabara boi velit gua mara?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            },
          ].map((item, index) => (
            // Individual FAQ Item
            <div className="mb-8" key={index}>
              {/* Question */}
              <h3 className="text-[#151875] text-lg font-semibold mb-2">
                {item.question}
              </h3>
              {/* Answer */}
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Right Section: Form */}
        <div className="bg-gray-100 p-6 rounded-md">
          {/* Section Title */}
          <h2 className="text-[#151875] text-2xl font-bold mb-6">
            Ask a Question
          </h2>
          {/* Contact Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name*"
              aria-label="Your Name"
              className="w-full border rounded-md px-4 py-2 text-sm"
            />
            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject*"
              aria-label="Subject"
              className="w-full border rounded-md px-4 py-2 text-sm"
            />
            {/* Message Textarea */}
            <textarea
              placeholder="Type Your Message*"
              aria-label="Type Your Message"
              className="w-full border rounded-md px-4 py-2 text-sm h-32 resize-none"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#FB2E86] text-white px-6 py-2 rounded-md hover:bg-[#f95c9b] transition w-full md:w-auto"
            >
              Send Email
            </button>
          </form>
        </div>
      </section>


              {/* Logos Section */}
              <div className="w-full py-12">
                <div className="max-w-screen-xl mx-auto flex justify-center">
                  <Image
                    src="/image/image 1174.png"
                    alt="Logos"
                    width={1100} // Adjust as per your design
                    height={200} // Adjust as per your design
                    className="object-contain"
                  />
                </div>
              </div>



      
    </div>
  );
}

export default FAQ;
