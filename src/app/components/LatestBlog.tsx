

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const  LatestBlog = () => {
  // Sample data for blog posts
  const posts = [


    {
      category: 'SaberAli ,21 August,2020',
      title: 'Top essential trends in 2021',
      description: 'More off this less hello samlande lied muchover tightly circa horse taped mightly',
      imageUrl: "/Frame1.png",
      
    },
    {
      category: 'Surfauxion ,21 August,2020',
      title: 'Top essential trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightly.',
      imageUrl: "/Frame3.png",
      
    },
    {
      category: 'SaberAli ,21 August,2020',
      title: 'Top essential trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightly.',
      imageUrl: "/Frame4.png",
  
    },
  ];

  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <h2 className="text-2xl text-[40px] font-bold text-center text-[#151875] mb-8">
      Leatest Blog
        </h2>
        <div className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                 <Image
                  className="lg:h-50 md: w-[500px] object-cover object-"
                  src={post.imageUrl}
                  alt="blog"
                  width={370}
                  height={255}
                  /> 
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-pink-600 mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center flex-wrap">
      
                    <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    <Link href={"blog"}>  Learn More</Link> </div>
                    
                                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default  LatestBlog  ;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'; // Import the Sanity client

// // Define TypeScript interface for blog data
// interface BlogPost {
//   _id: string;
//   category: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   // views: string;
//   // comments: number;
// }

// const LatestBlog = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);

//   // Fetch blog data from Sanity
//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       const query = `*[_type == "blog"] [0..3
//       ] { 
//         // _id, 
//         category, 
//         title, 
//         description, 
//         "imageUrl": image.asset->url, 
       
//       }`;

//       try {
//         const data: BlogPost[] = await client.fetch(query);
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching blog posts:', error);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <h2 className="text-2xl text-[40px] font-bold text-center text-[#151875] mb-8">
//           Latest Blog
//         </h2>
//         <div className="flex flex-wrap -m-4">
//           {posts.map((post) => (
//             <div key={post._id} className="p-4 md:w-1/3">
//               <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                 <Image
//                   className="lg:h-50 md: w-[500px] object-cover object-center"
//                   src={post.imageUrl}
//                   alt="blog"
//                   width={370}
//                   height={255}
//                 />
//                 <div className="p-6">
//                   <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                     {post.category}
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-pink-600 mb-3">
//                     {post.title}
//                   </h1>
//                   <p className="leading-relaxed mb-3">{post.description}</p>
//                   <div className="flex items-center flex-wrap">
//                     <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         className="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                       <svg
//                         className="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       {/* {post.views} */}
//                     </span>
//                     <span className="text-gray-400 inline-flex items-center leading-none text-sm">
//                       <svg
//                         className="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       {/* {post.comments} */}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestBlog;
