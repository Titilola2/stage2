import React, { useState } from 'react';
import headset from '../assets/1st-headset.svg';
import StarRating from './starRating';

const Mobileproduct = () => {
    const [gridSize, setGridSize] = useState(3); // Initial grid size (3x3)

    const toggleGrid = () => {
      setGridSize(gridSize === 3 ? 2 : 3); // Toggle between 3x3 and 2x2 grids
    };
  
    const gridClassName = `products grid grid-cols-2  `;
    const [rating, setRating] = useState(0);
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
  
  
    return (
      
  
      <div className='flex flex-col '>
       
      <div className={gridClassName}>
         
        {[...Array(12)].map((_, index) => ( // Render 12 product items
          <div key={index} className="w-[152px] h-[281px] flex flex-col ">
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

export default Mobileproduct;
