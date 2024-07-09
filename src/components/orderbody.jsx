import React, { useState, useEffect } from 'react';
import Tab from './tab';
import order1 from '../assets/order1.svg';
import order2 from '../assets/order2.svg';
import order3 from '../assets/order3.svg';
import { GrPrevious } from "react-icons/gr";
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';



const Orderbody = () => {
 
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [
        { label: 'Checkout details', number: '3', number2: '', content: <div></div> },
      ];
      const handleClick = (label) => {
        setActiveTab(label);
      };
    
        
  
  return (
  <>
  
  {  /* large screen */  }
    <div className="hidden md:flex flex-col mt-12 justify-center items-center  text-[#141718]">

    <div className='font poppins text-[54px] text-center  font-[500] text-[#000000] text-center'>Complete!</div>

  <div className='justify-center items-center #45B26B' > <Tab />
  </div> 
  <div className="px-[95px] py-[80px] rounded-[1px] h-[738px] space-y-[40px] w-[730px] shadow-xl justify-center items-center  mb-[50px]">
<div className='w-full h-[138px]'>
    <div className='text-[28px] font-poppins text-[6C7275] text-center '>Thank You!</div>
    <div className='text-center text-[40px] font-poppins font-[23262F] '>Your order has been received</div>
</div>
<div className='w-full h-[138px] justify-center items-center space-x-[40px] px-[40px] flex flex-row'>
<div className=''>
            <img className='w-full h-full' src={order1} alt="Headset-order" />
    </div>
    <div className=''>  <img className='w-full h-full' src={order2} alt="Headset-order" />
    </div>
    <div className=''>
    <img className='w-full h-full' src={order3} alt="Headset-order" />
    </div>
</div>
<div className='w-full h-1[148px] flex flex-row px-[155px] space-x-[32px]'>
<div className='space-y-[20px] font-inter text-[14px] font-semibold text-[#6C7275] '>
    <div className=''>Order Code:</div>
    <div className=''>Date:</div>
    <div className=''>Total:</div>
    <div className=''>PaymentMethod:</div>
</div>
<div className='space-y-[20px] font-inter text-[14px] font-semibold text-[#141718]'>
    <div className=''>#ACEICYNXRF​</div>
    <div className=''>July 8, 2024</div>
    <div className=''>$1,684.00</div>
    <div className=''>Credit Card</div>
</div>
</div>
<div className='  px-[175px] justify-center items-center'>
    <a href='/'>
<button className="text-[#141718] hover:text-gray-700 focus:outline-none bg-transparent border border-[#141718] px-4 py-2 rounded-md font-medium">
      Back to Homepage
    </button>
    </a>
</div>
  </div>
       </div>
     

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col  flex justify-center items-center text-[#141718]">
   <div className='text-[#605F5F] text-[500] font-inter just-between -ml-[250px] flex flex-row my-8'> 
   <a  href="/" className='flex flex-row justify-left'>
   <GrPrevious className='mt-[3px]' />
   <div className='w'>Back to home</div>
   </a>
   </div>
 
 
   <div className='font poppins text-[40px] text-center font-[500] text-[#000000]'>Complete!</div>

   <div className=" md:hidden flex flex-col  py-[16px] flex justify-between text-[#141718]">
   <div className='px-[32px] h-[256px] -mb-20'>
        <div className='px-2 w-full'>
        <div className="top flex flex-col   mx-2">
        <div className="flex items-center text-center border-b border-gray-200 font-inter text-[14px] font-[600] justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`  py-4 text-[#B1B5C3] hover:text-gray-900 -ml-4 mt-2 ${
                activeTab === tab.label ? 'border-b-2 border-black  text-[#23262F]' : ''
              }`}
              onClick={() => handleClick(tab.label)}
            ><span className={  "bg-[#23262F] text-white rounded-full px-2 py-1 mr-4 text-xs font-bold"}>{tab.number}</span>
              {tab.label}
            </button> 
          ))}
        </div>
        <div className="p-4 ">
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </div>
      </div>
               
        </div>
    </div>

    </div>
    
   <div className='justify-center items-center text-center space-y-[40px] flex flex-col shadow-xl h-auto w-4/5 p-[16px] -mt-[80px] mb-16'>
   <div className='w-full h-[138px]'>
    <div className='text-[28px] font-poppins text-[#6C7275] text-left font-semibold '>Thank You!</div>
    <div className='text-left text-[34px] font-poppins font-[#23262F] font-medium w-3/4 '>Your order has been received</div>
</div>
<div className='w-full h-[114px] justify-center items-center space-x-[40px] px-[40px] mt-8 flex flex-row'>
    <div className=''>
            <img className='w-full h-full' src={order1} alt="Headset-order" />
    </div>
    <div className=''>  <img className='w-full h-full' src={order2} alt="Headset-order" />
    </div>
    <div className=''>
    <img className='w-full h-full' src={order3} alt="Headset-order" />
    </div>
</div>
<div className='space-y-[16px] text-[14px] font-semibold font-inter text-left'>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
 Order code:
    </div>
    <div className='text-[141718]'>
    #ACEICYNXRF ​
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
  Date:
    </div>
    <div className='text-[141718]'>
July 08, 2024
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
Total
    </div>
    <div className='text-[141718]'>
$1684.99
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
Payment Method
    </div>
    <div className='text-[141718]'>
Credit Card
    </div>
</div>
</div>
<div className='  px-[17px]] justify-center items-center'>
    <a href="/">
<button className="text-[#141718] hover:text-gray-700  w-full text-[16px] focus:outline-none bg-transparent border border-[#141718] px-4 py-2 rounded-md font-medium">
      Back to Homepage
    </button>
    </a>
</div>
   </div>
   
    </div>


  </>
  
  );
};

export default Orderbody;