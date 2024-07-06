import React from 'react';

const Table = () => {
  const tableData = [
    { product: 'Item 1', quantity: 1, price: '$5490.00' },
    { product: 'Item 2', quantity: 2, price: '$520.00' },
    { product: 'Item 3', quantity: 3, price: '$600.00' },
  ];

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
              <div className="w-1/3 py-[24px] text-center">{item.quantity}</div>
              <div className="w-1/3 py-[24px] text-right">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;
