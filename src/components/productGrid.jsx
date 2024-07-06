import React, { useState } from 'react';
import headset from '../assets/1st-headset.svg';
import StarRating from './starRating';

const ProductGrid = () => {
  const [gridSize, setGridSize] = useState(3); // Initial grid size (3x3)

  const toggleGrid = () => {
    // Ensure gridSize remains 2 or 3
    setGridSize((prevGridSize) => (prevGridSize === 3 ? 2 : 3));
  };

  const gridClassName = `products grid grid-cols-${gridSize} gap-2 `;
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };


  return (
    

    <div className='flex flex-col'>
      <button onClick={toggleGrid}>
        {gridSize === 3 ? 'Show 2x2 Grid' : 'Show 3x3 Grid'}
      </button>
    <div className={gridClassName}>
       
      {[...Array(9)].map((_, index) => ( // Render 12 product items
        <div key={index} className="w-[222px] h-[433px] flex flex-col">
          <div className="h-4/5">
            <img src={headset} alt="Headset" />
          </div>
          <div className="h-1/5 bg-white flex flex-col">
            <div className="">
              {/* Your StarRating component here */}
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
            </div>
          </div>
          <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">Echo hx</div>
          <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">$549</div>
        </div>
      ))}
      
    </div>
    <div className='justify-center items-center my-8'>
    <button
      className=" w-[163px] h-[40px] border-[#141718] border-[1px] rounded-[8px] text-[#141718] text-center "
    >
      Show more
    </button>
    </div>
    </div>
  );
};

export default ProductGrid;
