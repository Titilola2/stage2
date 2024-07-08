import React from 'react';
import Body from "../components/body";
import Header from '../components/header';
import Footer from '../components/footer';
import ProductGrid from '../components/productGrid';


const Home = () => {
  return (
    
   <div className="  gap-2 flex flex-col  ">
   <div className="">
    <div className=''>
    <Header />
    </div>
  
  
   <Body />
<Footer />
   </div>



   </div>
  );
};

export default Home;