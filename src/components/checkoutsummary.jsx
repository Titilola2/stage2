import React from 'react';

const CheckoutSummary = ({ subtotal = 0 }) => {
  return (
    <div className="bg-white flex flex-col border-gray-400 p-[24px] border-[1px] rounded-[6px]">
      <h3 className="text-[20px]  font-semibold mb-2">Order Summary</h3>
      <div className="w-full mt-2 bg-white text-black border-[1px]  justify-between flex flex-row py-2 rounded-md focus:outline-none">
        <div className='text-left p-[4px]'>Free Shipping</div>
        <div className='mr-[2px]'>$0.00</div> 
      </div>
      <div className="w-full mt-2 bg-white text-black border-[1px]  justify-between flex flex-row py-2 rounded-md focus:outline-none">
        <div className='text-left p-[4px]'> ExpressShipping</div>
        <div className='mr-[2px]'>$15.00</div> 
      </div>
      <div className="w-full mt-2 bg-white text-black border-[1px]  justify-between flex flex-row py-2 rounded-md focus:outline-none">
        <div className='text-left p-[4px]'>Pick Up</div>
        <div className='mr-[2px]'>21%</div> 
      </div>
      <ul className="list-circle space-y-2 ">
        <div className='justify-between flex flex-row'>
        <div >Subtotal: </div>
        <div> ${subtotal.toFixed(2)}</div>
        </div>

        
      </ul>
      <div className="flex justify-between mt-4">
        <span className="font-[600] text-[20px]">Total:</span>
        <span className="font-semibold">${(subtotal + 5.99).toFixed(2)}</span>  {/* Assuming express shipping by default */}
      </div>
      <button className="w-full mt-4 bg-black text-[18px] font-[500] text-white py-2 rounded-md focus:outline-none">
        Checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;
