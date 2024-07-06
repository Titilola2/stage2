
import React, { useState, useEffect } from 'react';
import Table from './table';
import CheckoutSummary from './checkoutsummary';

const Cartbody = () => {
 

  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-col  py-[80px]  justify-center items-center  px-[160px] text-[#141718]">
    <div className='w-[832px] h-[166px] gap-[40px]'>
        <div className='font poppins text-[54px] text-center font-[500] text-[#000000]'>Cart</div>
        <div className=''>
         
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