
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';


const Header = () => {
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-row  py-[16px] justify-between   px-[160px] text-[#141718]">
      <div className="  text-[#000000]  w-[108px] h-[24px] text-xl font-medium font-poppins">
      ECHOMAX
      </div>


      <div className="flex flex-row justify-between w-[349px] h-[24px] gap-[40px] font-inter">
      <div className="h-[24px] text-[14px] text-[#141718] font-500">
        Home
      </div>
      <div className="h-[24px] text-[14px] text-[#141718] font-500">
      About Us
      </div>
      <div className="h-[24px] text-[14px] text-[#141718] font-500">
      Product
      </div>
      <div className="h-[24px] text-[14px] text-[#141718] font-500">
      Contact Us
      </div>
      </div>


      <div className="flex flex-row justify-between w-[130px] h-[28px] gap-[16px]">
        <MagnifyingGlassIcon className="h-[24px] w-[24px] text-gray-600" />
        <UserCircleIcon className="h-[20px] w-[20px] text-gray-600" />
        <div className='w-[50px] h-[28px]'>
        <ShoppingCartIcon className="h-[24px] w-[24px] text-[#092C4C]" />
        </div>
      </div>
      
      </div>



    


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-row px-[32px] py-[16px] flex justify-between text-[#141718]">
   
    <div className=" w-[102px] h-[24px] flex flex-row">
      <div className='w-[24px] h-[24px]'>
        <Bars3Icon className="h-[20px] w-[20px] p-[1.5px]  text-[#141718]" />
      </div>
    <div className='w-[81px] text-[16px] font-medium font-poppins'>
      ECHOMAX 
    </div>
    </div>

    <div className='w-[50px] h-[28px]'>
        <ShoppingCartIcon className="h-[24px] w-[24px] text-[#092C4C]" />
        </div>
    </div>

   
   </>
  );
};

export default Header;