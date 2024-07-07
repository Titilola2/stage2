
import React, { useState, useEffect } from 'react';


const Tab = () => {
 
  
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeTaab, setActiveTaab] = useState('taab1');

  
  const tabs = [
    { label: 'Shopping Cart', number: '1', content: <div></div> },
    { label: 'Checkout details', number: '2', content: <div></div> },
    { label: 'Order complete', number: '3', content: <div></div> },

  ];
  const taabs = [
    { label: 'Shopping Cart', number: '1', number2: '2', content: <div></div> },

    


  ];

  
  const handleClick = (label) => {
    setActiveTaab(label);
  };


  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-col   px-[160px] justify-center items-center   text-[#141718]">
    <div className='w-[832px] h-[166px] gap-[40px]'>
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


 
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col  py-[16px] flex justify-between text-[#141718]">
   <div className='w-[376px] h-[256px] -mb-20'>
        <div className='px-2 w-full'>
        <div className="top flex flex-col  justify-center items-center  mx-2">
        <div className="flex items-center text-center border-b border-gray-200 font-inter text-[14px] font-[600] justify-around">
          {taabs.map((taab) => (
            <button
              key={taab.label}
              className={`px-3  py-4 text-[#B1B5C3] hover:text-gray-900  mt-2 ${
                activeTaab === taab.label ? 'border-b-2 border-black  text-[#23262F]' : ''
              }`}
              onClick={() => handleClick(taab.label)}
            ><span className={  "bg-[#23262F] text-white rounded-full px-2 py-1 text-xs font-bold"}>{taab.number}</span>
              {taab.label}<span className={  "bg-[#23262F] text-white rounded-full px-2 py-1 text-xs font-bold mx-2"}>{taab.number2}</span>
            </button> 
          ))}
        </div>
        <div className="p-4 ">
          {taabs.find((taab) => taab.label === activeTaab)?.content}
        </div>
      </div>
               
        </div>
    </div>

    </div>
    

   
   </>
  );
};

export default Tab;