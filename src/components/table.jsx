import React from 'react';
import { useState } from 'react';

const Table = () => {
  const [tableData, setTableData] = useState([
    { product: 'Item 1', quantity: 1, price: '$5490.00' },
    { product: 'Item 2', quantity: 1, price: '$520.00' },
    { product: 'Item 3', quantity: 1, price: '$600.00' },
  ]);
  const handleQuantityChange = (index, newQuantity) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].quantity = Math.max(1, newQuantity); // Ensure quantity is 1 or more
      return updatedData;
    });
  };

  return (
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
              <div className="w-1/3 py-[24px]">{item.product}</div>
              
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
  );
};

export default Table;
