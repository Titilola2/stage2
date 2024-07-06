
import React, { useState, useEffect } from 'react';
import Table from './table';
import CheckoutSummary from './checkoutsummary';

const Cartbody = () => {
 
  
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { label: 'Shopping Cart', number: '1', content: <div></div> },
    { label: 'Checkout details', number: '2', content: <div></div> },
    { label: 'Order complete', number: '3', content: <div></div> },

  ];

  const handleClick = (label) => {
    setActiveTab(label);
  };


  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-col  py-[80px]  justify-center items-center  px-[160px] text-[#141718]">
    <div className='w-[832px] h-[166px] gap-[40px]'>
        <div className='font poppins text-[54px] text-center font-[500] text-[#000000]'>Cart</div>
        <div className=''>
        <div className="top flex flex-col w-3/5 justify-center items-center mx-36 ">
        <div className="flex items-center text-center border-b border-gray-200 font-inter text-[16px] font-[600] justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-3  py-4 text-[#B1B5C3] hover:text-gray-900  mt-2 ${
                activeTab === tab.label ? 'border-b-2 border-black  text-[#23262F]' : ''
              }`}
              onClick={() => handleClick(tab.label)}
            ><span className={  "bg-[#23262F] text-white rounded-full px-2 py-1 text-xs font-bold"}>{tab.number}</span>
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




    <div className='w-[771px] h-[1120px] flex flex-col'>
        <div className='h-[543px] py-[80px] gap-[64px] flex flex-row'>
           
            <div className='w-3/5'>
               <Table /> 
            </div>
            <div className='w-2/5'>
                <CheckoutSummary />
                </div>
        </div>

        <div className='h-[129px] w-2/5 flex flex-col '>
       <div className='font-[500] font-poppins text-[20px]'>Have a coupon?</div>
       <div className='font-[400] font-inter text-[16px] text-[#6C7275]'>Add your code for instant cart distribution</div>
       <div className='justify-between flex flex-row border-1px border-[#6C7275] py-[16px]'>
        <div className='font-[500] font-inter text-[16px] text-[#6C7275]'>
      Coupon code
        </div>
        <div className='text-[#141718] font-[500] font-inter text-[16px]'>
            Apply
        </div>
        </div>
       </div>
     </div>
      
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-row px-[32px] py-[16px] flex justify-between text-[#141718]">
   
    </div>

   
   </>
  );
};

export default Cartbody;