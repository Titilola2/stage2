
import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
   <div>
  {  /* large screen */  }
    <div className="hidden md:flex flex-col px-[160px] pb-[32px] pt-[80px] bg-[#232627] h-[249px] gap-[49px] text-[#6C7275]  fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">

    <div className='h-[32px]   justify-between flex flex-row'>
    <div className="   w-[108px] h-[24px] text-xl font-medium font-poppins text-[#FFFFFF]">
      ECHOMAX
      </div>

      <div className="flex flex-row justify-between w-[417px] h-[24px] gap-[40px] font-inter text-[#FEFEFE]">
      <div className="h-[22px] text-[14px]  font-[400]">
        Home
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      About Us
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Product
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Blog
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Contact Us
      </div>
      </div>
    </div>

    <div className='h-[56px] py-[16px] justify-between flex flex-row border-t-[0.15px] border-#6C7275'>
  
      <div className="flex flex-row justify-between w-[483px] h-[20px] gap-[28px]">
      <div className="h-[22px] text-[12px]  font-[400] font-poppins w-[218px] text-[#E8ECEF]">
      Copyright © 2024 All rights reserved
      </div>
      <div className="h-[20px]  text-[12px]  font-[600] text-[#FEFEFE]">
      OUR POLICIES
      </div>
      <div className="h-[20px]  text-[12px]  font-[600] text-[#FEFEFE]">
      TERMS OF USE
      </div>
      </div>


      <div className="flex flex-row justify-between w-[120px] h-[24px] gap-[4px]  text-[#FEFEFE] ">
      <div className="  text-[14px]   font-[400]">
      <FaInstagram className="w-[24px]" />
      </div>
      <div className=" text-[14px]  font-[400]">
      <FaFacebook className="w-[24px]" />
      </div>
      <div className=" text-[14px]  font-[400]">
      <FaYoutube className="w-[24px]" />
      </div>
      </div>
    </div>
      </div>






  
     
  

      { /* mobile screen */  }
   <div className=" md:hidden flex flex-col  px-[32px] py-[48px] text-[#FEFEFE] bg-[#232627] w-screen h-[609px]">
   
    <div className="  h-[301px] flex flex-col w-auto text-center ">
    <div className=' text-[24px] font-medium font-poppins '>
      ECHOMAX 
    </div>
      <div className='flex flex-col w-auto gap-[32px] h-[238px] font-inter pt-4'>
      <div className="h-[22px] text-[14px]  font-[400]">
        Home
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      About Us
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Product
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Blog
      </div>
      <div className="h-[22px] text-[14px]  font-[400]">
      Contact Us
      </div>
      </div>
   
    </div>

    <div className='w-auto px-[12px] py-[28px] flex flex-col  h-[172px]  border-[#6C7275] border-t-[0.15px] justify-center items-center'>
   <div className='h-[24px] pb-[24px] flex flex-row w-[120px] justify-center items-center'>
  
      <FaInstagram className="px-[4px] w-[24px] h-[24px]" />
      <FaFacebook className="px-[4px] w-[24px] h-[24px]" />
      <FaYoutube className="px-[4px] w-[30px] h-[24px]" />
          
   </div>
   <div className='h-[68px]  py-[4px] justify-center items-center flex flex-col'>
    <div className='pb-[24px] h-[20px] flex flex-row  '>
    <div className="h-[20px] px[2px] text-[11px] w-[81px] font-[600] text-[#FEFEFE]">
      OUR POLICIES
      </div>
      <div className="h-[20px] px-[2px]  text-[11px] w-[83px] font-[600] text-[#FEFEFE]">
      TERMS OF USE
      </div>
    </div>
    <div className="h-[22px] text-[10px]  pt-[24px] font-[400] font-poppins w-[218px] text-[#E8ECEF]">
      Copyright © 2024 All rights reserved
      </div>
   </div>
        </div>
    </div>


    


  

   </div>
  );
};

export default Footer;