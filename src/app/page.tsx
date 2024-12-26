import React from 'react';
import Hero from '@/Components/Hero';
import FeaturedProducts from '@/Components/FeaturedProducts';
import DiscountProduct from '@/Components/DiscountProduct';
import LatestProducts from '@/Components/LatestProducts';
import LatestBlog from '@/Components/LatestBlog'; // Fixed import
 import ShopexOffer from '@/Components/ShopexOffer';
 import UniqueSofa from'@/Components/uniqueSofa';
import Trending from '@/Components/Trending';
import TopCategories from'@/Components/TopCategories';
import  NewsLater from'@/Components/NewsLater';



const Home = () => {
  return (
    <div>
      <Hero /> 
      <FeaturedProducts />
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueSofa/>
      <Trending/>
      <DiscountProduct />
  <TopCategories/>  
  < NewsLater/> 
  <LatestBlog /> 
  
  

  
  
  

    </div>



    
  );
};

export default Home ;
