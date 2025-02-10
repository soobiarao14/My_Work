import React from 'react';


import DiscountProduct from '@/app/components/DiscountProduct';
import LatestProducts from '@/app/components/LatestProducts';
import LatestBlog from '@/app/components/LatestBlog';
import Hero from '@/app/components/Hero';
import Trending from '@/app/components/Trending';
import NewsLater from '@/app/components/NewsLater';
import ShopexOffer from '@/app/components/ShopexOffer';
import UniqueSofa from '@/app/components/uniqueSofa';
import TopCategories from '@/app/components/TopCategories';
import FeaturedProducts from './components/FeaturedProducts';
// import SearchBar from './components/searchBar';

const Home = () => {
  return (
    <div>
    <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueSofa/>
      <Trending/>
      <DiscountProduct />
      <TopCategories/>  
      <NewsLater/> 
      <LatestBlog />
      {/* <SearchBar /> */}
      
         
    </div>
  );
};

export default Home;
