import React from 'react';
import Orderbody from '../components/orderbody';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductGrid from '../components/productGrid';


const Order = () => {
  return (
    
   <div className="  gap-2 flex flex-col  ">
   <div className="">
   <Header />
  <Orderbody />
 
<Footer />
   </div>



   </div>
  );
};

export default Order;