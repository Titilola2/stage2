import React, { useState } from 'react';

const Cartsummary = ({ subtotal = 0 }) => {
  const [selectedShipping, setSelectedShipping] = useState('free'); // Initial selected shipping

  const handleShippingChange = (shippingOption) => {
    setSelectedShipping(shippingOption);
  };

  // Ensure `subtotal` is a number
  const numericSubtotal = parseFloat(subtotal) || 0; // Convert subtotal to a number, fallback to 0 if NaN

  const shippingCost = {
    free: 0,
    express: 15,
    pickup: (numericSubtotal * 0.21).toFixed(2), // Calculate pickup cost with converted subtotal
  };

  // Calculate total using the numeric subtotal and shipping cost
  const total = numericSubtotal + parseFloat(shippingCost[selectedShipping]);

  return (
    <div className="bg-white flex flex-col border-gray-400 p-[24px] border-[1px] rounded-[6px]">
      <h3 className="text-[20px]  font-semibold mb-2">Order Summary</h3>

      {['free', 'express', 'pickup'].map((shippingOption) => (
        <div
          key={shippingOption}
          className={`w-full mt-2 bg-white text-black border-[1px] justify-between flex flex-row px-2 py-2 rounded-md focus:outline-none hover:bg-gray-200 cursor-pointer ${
            selectedShipping === shippingOption ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleShippingChange(shippingOption)}
        >
          <div className="flex items-center">
            <input
              type="radio"
              id={shippingOption}
              name="shipping"
              checked={selectedShipping === shippingOption}
              onChange={() => handleShippingChange(shippingOption)}
              style={{ accentColor: 'black' }} // Set accent color to black
            />
            <label className="ml-2 text-left p-[4px]" htmlFor={shippingOption}>
              {shippingOption.charAt(0).toUpperCase() + shippingOption.slice(1)}
            </label>
          </div>
          <div className="mr-[2px]">{shippingOption === 'pickup' ? `${shippingCost[shippingOption]}%` : `$${shippingCost[shippingOption]}`}</div>
        </div>
      ))}

      <ul className="list-circle space-y-2">
        <div className="justify-between flex flex-row">
          <div>Subtotal: </div>
          <div> ${numericSubtotal.toFixed(2)}</div> 
        </div>
      </ul>

      <div className="flex justify-between mt-4">
        <span className="font-[600] text-[20px]">Total:</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      <a href="/checkout">
        <button className="w-full mt-4 bg-black text-[18px] font-[500] text-white py-2 rounded-md focus:outline-none">
          Checkout
        </button>
      </a>
    </div>
  );
};

export default Cartsummary;
