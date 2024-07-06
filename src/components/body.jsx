
import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import ProductGrid from '../components/productGrid';
import Mobileproduct from './mobileproduct';



const Body = () => {
   const [rating, setRating] = useState(0);

   const handleRatingChange = (newRating) => {
     setRating(newRating);
   };


  return (
   <div className="flex flex-col ">


{   /* large screen */          }
<div className="hidden md:flex ">
   
</div>  

{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white">
 
</div>    




  {/*  Product page*/}
{   /* large screen */          }
<div className="hidden md:flex px-[160px] pt-[60px] pb-[100px] bg-white flex flex-col">
  <div className='flex flex-row w-[125px] h-[24px] justify-between'>
  <div className=' font-inter font-[500] text-[14px] w-[40px]'>
      Home
   </div>
   <div className=' font-inter font-[500] text-[14px] w-[40px]'>
      Products
   </div>
  </div>

  
  
  <div className="flex flex-row gap-4 mt-2">
  <div className="w-1/4 bg-white flex flex-col m ">
 <div className='filter flex flex-row mb-8'>
 <FiFilter className="text-gray-600 h-6 p-[4px] w-6" />
 <div className=' font-inter text-[20px] px-[4px] font-[600]'>Filter</div>
    </div>

 <div className='Category '>
 <div className='my-2 text-left font-inter font-[600] text-[16px] pl-2'>Categories</div>
 <div class="max-h-20 overflow-y-auto  pr-4 pl-2 text-left">
 
  <ul>
   <li>All sound systems</li>
   <li>Accesories</li>
   <li>Earbuds</li>
   <li>Headsets</li>
   <li>Speakers</li>
   <li>Sound Bars</li>
  </ul>
</div>
 </div>
 <div className='price my-2 mx-1'>
   <div className='my-2 text-left font-inter font-[600] text-[16px]'>Price</div>
   <div className=''>   
   <ul className="w-full px-1">
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="react-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">All Price</label>
        <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="vue-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$100.00 - 200.00</label>
        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$200.00 - 300.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$300.00 - 400.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$400.00 - 500.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$500.00 - 600.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[12px] font-[600] font-inter text-[#6C7275]">$600+</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
    </ul>
   </div>
 </div>
</div>


<div className="w-3/4 bg-white  flex flex-col ">
<div className='filter flex flex-row mb-8 justify-between'>
 <div className=' font-inter text-[20px] px-[4px] font-[600]'>Filter</div>
 <div className=' font-inter text-[20px] px-[4px] font-[600] pr-8 w-[296px] justify-between flex flex-row'>
   <div className='font-inter text-[16px] font-[600] w-[56px] h-[20px]'>Sort by</div>
   <div className=''>toggle</div>
 </div>
    </div>

 <div className='products   '>
<ProductGrid />
 </div>

</div>

  </div>

</div>  



{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white pb-[80px] pl-8">
<Mobileproduct />
</div>




{  /* Newsletter*/}
{   /* large screen */          }
<div className="hidden md:flex ">
<div className="  flex flex-col bg-[#ECECEC] h-[360px] py-[95px]  w-screen gap-[32px] justify-center items-center ">
<div className='flex flex-col gap-[8px] text-center'>
 
         <div className='font-poppins font-[500] text-[40px]'>
       Join Our Newsletter
   </div>
   <div className='font-normal text-[18px] font-inter text-[#121212]'>
         Dont miss the fun. Get the latest buzz on products deals and more
   </div>
</div>
<div className='border-[1px] rounded-[8px] border-[#000000] font-inter font-[400] w-[303px] h-[50px]  text-left text-[16px] p-[10px]'>
         Email Adress
   </div>
</div>
  
</div>  

  

{   /*small screen */}
<div className=" md:hidden flex flex-col bg-[#ECECEC] h-[358px] py-[95px] px-[32px] w-screen gap-[32px]">
<div className='flex flex-col gap-[8px]'>
   <div className='font-poppins text-[28px] font-medium w-[312px] h-[34px] text-center'>
   Join Our Newsletter
   </div>
         <div className='font-normal text-[14px] font-inter text-[#121212] text-center'>
         Dont miss the fun. Get the latest buzz on products deals and more
   </div>
</div>
<div className='font-inter font-[400] text-[16px] text-left  w-[263px] h-[50px] p-[10px] border-[1px] rounded-[8px] mx-[20px] border-[#000000]'> Email Adress</div>
</div>



   </div>
  );
};

export default Body;