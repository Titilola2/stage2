
import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import ProductGrid from '../components/productGrid';
import Mobileproduct from './mobileproduct';
import { MdNavigateNext } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGridSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiSquareSplitVerticalFill, PiSquareSplitHorizontalFill } from "react-icons/pi";
import lady from '../assets/lady.svg';





const Body = () => {
   const [rating, setRating] = useState(0);

   const handleRatingChange = (newRating) => {
     setRating(newRating);
   };

   
   const [clickedItem, setClickedItem] = useState(null);

   const handleItemClick = (item) => {
     setClickedItem(item);
   };
 

  return (
   <div className="flex flex-col ">




  {/*  Product page*/}
{   /* large screen */          }
<div className="hidden md:flex px-[160px]   pb-[100px] bg-white flex flex-col">
  <div className='flex flex-row w-[125px] h-[60px] pt-[40px] justify-between'>
  <div className=' font-inter font-[500] text-[14px] w-[40px] text-[#6C7275]'>
      Home
   </div>
   <MdNavigateNext className='mt-[3px] mr-[20px] text-[#6C7275]'/>
   <div className=' font-inter font-[600] text-[14px] w-[40px]'>
      Product
   </div>
  </div>

  
  <div className="flex flex-row gap-4 mt-2">
  <div className="w-1/4 bg-white flex flex-col m ">
 <div className='filter flex flex-row mb-8'>
 <TbAdjustmentsHorizontal className="text-[#121212] h-8 p-[4px] w-8 " />
 <div className=' font-inter text-[20px] text-[#121212] px-[4px] font-[600]'>Filter</div>
    </div>

 <div className='Category '>
 <div className='my-2 text-left font-inter font-[600] text-[16px] pl-2'>CATEGORIES</div>
 <div class="max-h-20 overflow-y-auto font-inter text-[14px] font-semibold text-[#807E7E] pr-4 pl-2 text-left">
 
 <ul>
      {['All sound systems', 'Accessories', 'Earbuds', 'Headsets', 'Speakers', 'Sound Bars'].map((item, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(item)}
          style={{
            color: clickedItem === item ? '#000' : '#807E7E',
            textDecoration: clickedItem === item ? 'underline' : 'none',
            cursor: 'pointer'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
</div>
 </div>
 <div className='price my-2 mx-1'>
   <div className='my-2 text-left font-inter font-[600] text-[16px]'>PRICE</div>
   <div className=''>   
   <ul className="w-full px-1">
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="react-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">All Price</label>
        <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="vue-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$100.00 - 200.00</label>
        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$200.00 - 300.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$300.00 - 400.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$400.00 - 500.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$500.00 - 600.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$600+</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
    </ul>
   </div>
 </div>
</div>


<div className="w-3/4 bg-white  flex flex-col ">

 <div className='products   '>
<ProductGrid />
 </div>

</div>

  </div>

</div>  



{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white pb-[80px] pl-8">
  <div className='flex flex-col pr-[40px]'>
 <div className='py-[1px] h-[56px] border-b-t-[1px] border-[#EAEAEA] justify-between flex flex-row'>
   <div className='flex flex-row'>
   <TbAdjustmentsHorizontal className="text-[#121212] h-8 p-[4px] w-8 " />
   <span className='text-[16px] font-inter font-semibold ml-[2px]'>Filter</span>
   </div>
    <div className='flex flex-row w-[72px] h-[32px]'>
    <div className='w-1/2 py-[4px] px-[8px] border-[#EAEAEA] text-[#6C7275] border-[1px]'><PiSquareSplitHorizontalFill /></div>
    <div className='w-1/2 py-[4px] px-[8px] border-[#EAEAEA] text-[#6C7275] border-[1px]'><PiSquareSplitVerticalFill /></div>
    </div>
 </div>
 <div className='py-[1px] flex flex-row justify-between mb-12'>
   <div className='text-[16px] font-inter font-semibold ml-[2px]'> Headset</div>
    <div className='text-[16px] font-inter font-semibold ml-[2px] flex flex-row'>
    <span className=''> Sort by</span>
    <span className=' h-[10px] mt-1  '><RiArrowDropDownLine /></span>
    </div>
 </div>
  </div>
  <div className=''>
  <Mobileproduct />
  </div>

</div>




{  /* Newsletter*/}
{   /* large screen */          }
<div className="hidden md:flex  flex flex-row bg-[#ECECEC]">
  <div className='w-1/3'></div>
<div className="  flex flex-col bg-[#ECECEC] h-[360px] py-[95px]  gap-[32px] justify-center items-center ">
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
<div className='w-1/4 mb-24]'><img src={lady} alt="lady" /></div>

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