
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductGrid from '../components/productGrid';
import Cartbody from '../components/cartbody.jsx';


const Cart = () => {
  return (
    
   <div className="  gap-2 flex flex-col  ">
   <div className="">
   <Header />
<Cartbody />
<Footer />
   </div>



 



   </div>
  );
};

export default Cart;