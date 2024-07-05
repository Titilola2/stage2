import React, { useState } from 'react';
import StarRating from './starRating'; // Import StarRating component here


const ProductGrid = () => {
  const [isThreeByThree, setIsThreeByThree] = useState(true);

  const toggleGridLayout = () => {
    setIsThreeByThree(!isThreeByThree);
  };

  const products = [
    { id: 1, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 4 },
    { id: 2, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 3 },
    { id: 3, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 5 },
    { id: 4, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 4 },
    { id: 5, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 3 },
    { id: 6, name: 'Echo hx', price: '$549', image: '../assets/1st-headset.svg', rating: 5 },
  ];

  return (
    <div className="p-4">
      <button
        onClick={toggleGridLayout}
        className="flex items-center justify-center w-10 h-10 text-white bg-blue-500  hover:bg-blue-700 focus:outline-none mb-4"
      >
        {isThreeByThree ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      <div className={`products grid gap-2 ${isThreeByThree ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {products.map((product) => (
          <div key={product.id} className="w-[228px] h-[433px] flex flex-col bg-white  shadow-md overflow-hidden">
            <div className="h-4/5">
              <img src={product.image} alt={product.name} className="object-cover  w-full" />
            </div>
            <div className="h-1/5 bg-white"></div>
            <div className="h-1/3 bg-white flex ">
              <StarRating rating={product.rating} onRatingChange={(newRating) => console.log(newRating)} />
            </div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] font-semibold px-4">{product.name}</div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] font-semibold px-4">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
