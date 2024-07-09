
import React, { useState, useEffect } from 'react';
import Table from './table';
import Cartsummary from './cartsummary';
import { RiCouponLine } from "react-icons/ri";
import headset from '../assets/1st-headset.svg';
import headset4 from '../assets/4th-headset.svg';
import headset7 from '../assets/7th-headset.svg';
const Cartbody = () => {
 
  
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeTaab, setActiveTaab] = useState('taab1');


    const [tableData, setTableData] = useState([
      { product: 'Echo hx', quantity: 1, color: 'Colour: Black', price: '$5490.00', img: headset, },
      { product: 'Echo 78', quantity: 1, color: 'Colour: Green', price: '$520.00', img: headset4, },
      { product: 'Echo Ex', quantity: 1, color: 'Color: Yellow', price: '$600.00', img: headset7,},
    ]);
    const handleQuantityChange = (index, newQuantity) => {
      setTableData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].quantity = Math.max(1, newQuantity); // Ensure quantity is 1 or more
        return updatedData;
      });
    };
  


  const tabs = [
    { label: 'Shopping Cart', number: '1', content: <div></div> },
    { label: 'Checkout details', number: '2', content: <div></div> },
    { label: 'Order complete', number: '3', content: <div></div> },

  ];
  const taabs = [
    { label: 'Shopping Cart', number: '1',number2:'2', content: <div></div> },

  ];

  const [formData, setFormData] = useState({
   
    coupon: '',
  });
        
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };



  
  const handleClick = (label) => {
    setActiveTaab(label);
  };


  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-col  py-[80px] px-[160px] -mt-8 justify-center items-center   text-[#141718]">
    <div className='w-4/5 h-[166px] gap-[40px]'>
    <div className='font poppins text-[54px] text-center font-[500] text-[#000000]'>Cart</div>
        <div className='w-full '>
        <div className="top flex flex-col justify-center items-center  ">
        <div className="flex items-center text-center border-b border-gray-200 font-inter text-[16px] font-[600] justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-3  py-4 text-[#B1B5C3] hover:text-gray-900  ml-6 mt-2 ${
                activeTab === tab.label ? 'border-b-2 border m black  text-[#23262F]' : ''
              }`}
              onClick={() => handleClick(tab.label)}
            ><span className={  "bg-[#23262F] text-white ml-6 rounded-full px-2 py-1 text-xs font-bold"}>{tab.number}</span>
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
            <div className="flex flex-col">
      <div className="w-full overflow-hidden rounded-md shadow-sm">
        <div className="w-full border-b-[1px] border-[#6C7275]">
          <div className="flex px-4 py-2 text-left text-[16px] font-[600] font-inter capitalize">
            <div className="w-1/3">Products</div>
            <div className="w-1/3 text-center">Quantity</div>
            <div className="w-1/3 text-right">Price</div>
          </div>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <li key={index} className="flex px-4 py-4">
              <div className="w-1/3 py-[24px] justify-between flex flex-row  px-[10px]">
              <div className='w-2/5 -mt-4 '>
              <img className='w-full h-full ' src={item.img}  alt={item.procuct} />
              </div>
              <div className='text-black font-inter font-[500] flex flex-col'>
                <div className='text-[14px]'> {item.product}</div>
                <div className='text-[8px] text-[#6C7275] flex flex-row'>{item.color}</div>
             
              </div>
              </div>
              
                <button className='flex flex-row px-[8px] py-[4px] space-x-[16px] mt-[20px] border-[1px] border #6C7275 w-[74px] h-[30px]' >
                <div
                  className="mb-[]    "
                  onClick={() => handleQuantityChange(index, item.quantity - 1)}
                >
                  -
                </div>
                <span className="mb-[] mx-2">{item.quantity}</span>
                <div
                  className="mb-[]   "
                  onClick={() => handleQuantityChange(index, item.quantity + 1)}
                >
                  +
                </div>

                </button>
             
              <div className="w-1/3 py-[24px] text-right">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
            </div>
            <div className='w-2/5'>
                <Cartsummary />
                </div>
        </div>

        <div className='h-[129px] w-2/5 flex flex-col '>
       <div className='font-[500] font-poppins text-[20px]'>Have a coupon?</div>
       <div className='font-[400] font-inter text-[16px] text-[#6C7275] mb-[8px]'>Add your code for instant cart distribution</div>
       <div className='justify-between flex flex-row border-[1px] border-[#6C7275] py-[16px] px-[16px]'>
        <div className='flex flex-row gap-[4px]'>
        <div className='text-[#6C7275] mt-[3px] h-[24px] w-[24px]'><RiCouponLine /></div>
        <div className='font-[500] font-inter text-[16px] text-[#6C7275]'>
      Coupon code
        </div>
        </div>
        <div className='text-[##121212] font-[500] font-inter text-[16px]'>
            Apply
        </div>
        <label htmlFor="input" className=" text-left text-[12px]"></label>
      
        </div>
       </div>
     </div>
      
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col px-[32px] py-[16px] flex justify-between text-[#141718]">
   <div className='w-[376px] h-[256px] -mb-20'>
        <div className='font poppins text-[40px] text-center font-[500] text-[#000000]'>Cart</div>
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
    <div className='w-full mx-[16px]' >
    <div className="flex flex-col">
      <div className="w-full overflow-hidden rounded-md shadow-sm">
        <div className="w-full border-b-[1px] border-[#6C7275]">
          <div className="flex px-4 py-2 text-left text-[16px] font-[600] font-inter capitalize">
            <div className="w-1/3">Products</div>
            <div className="w-1/3 text-center">{}</div>
            <div className="w-1/3 text-right">{}</div>
          </div>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <li key={index} className="flex px-4 py-4">
              <div className="w-1/3 py-[24px] justify-between flex flex-row  px-[10px]">
              <div className='w-2/5 -mt-4 '>
              <img className='w-full h-full ' src={item.img}  alt={item.procuct} />
              </div>
            
              </div>
          
          <div className='flex flex-col'>
          <div className='text-black font-inter font-[500] flex flex-col'>
                <div className='text-[14px]'> {item.product}</div>
                <div className='text-[8px] text-[#6C7275] flex flex-row'>{item.color}</div>
             
              </div>
                          <button className='flex flex-row px-[8px] py-[4px] space-x-[16px] mt-[20px] border-[1px] border #6C7275 w-[74px] h-[30px]' >
                <div
                  className="mb-[]    "
                  onClick={() => handleQuantityChange(index, item.quantity - 1)}
                >
                  -
                </div>
                <span className="mb-[] mx-2">{item.quantity}</span>
                <div
                  className="mb-[]   "
                  onClick={() => handleQuantityChange(index, item.quantity + 1)}
                >
                  +
                </div>

                </button>
                </div>
                
              <div className="w-1/3 py-[24px] text-right">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
            </div>
     <div className='mx-[16px] w-full flex flex-col my-4'>
       <div className='font-[500] font-poppins text-[16px]'>Have a coupon?</div>
       <div className='font-[400] font-inter text-[14px] text-[#6C7275] my-2'>Add your code for instant cart distribution</div>
       <div className='justify-between flex flex-row border-[1px] border-[#6C7275] py-[16px] px-[4px]'>
       <div className='flex flex-row gap-[4px]'>
        <div className='text-[#6C7275] mt-[3px] h-[24px] w-[24px] ml-[4px]'><RiCouponLine /></div>
        <div className='font-[500] font-inter text-[16px] text-[#6C7275]'>
      Coupon code
        </div>
        </div>
        <div className='text-[#141718] font-[500] font-inter text-[16px]'>
            Apply
        </div>
        </div>
       </div>
       <div className='w-full mx-[16px] my-4'>
                <Cartsummary />
        </div>

    </div>
    

   
   </>
  );
};

export default Cartbody;