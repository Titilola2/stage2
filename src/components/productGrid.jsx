import React, { useState } from 'react';
import headset from '../assets/1st-headset.svg';
import headset2 from '../assets/2nd-headset.svg';
import headset3 from '../assets/3rd-headset.svg';
import headset4 from '../assets/4th-headset.svg';
import headset5 from '../assets/5th-headset.svg';
import headset6 from '../assets/6th-headset.svg';
import headset7 from '../assets/7th-headset.svg';
import headset8 from '../assets/8th-headset.svg';
import headset9 from '../assets/9th-headset.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGridSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiSquareSplitVerticalFill, PiSquareSplitHorizontalFill } from "react-icons/pi";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';

import StarRating from './starRating';

const ProductGrid = () => {
  const [gridSize, setGridSize] = useState(3); // Initial grid size (3x3)

  const toggleGrid = () => {
    // Ensure gridSize remains 2 or 3
    setGridSize((prevGridSize) => (prevGridSize === 3 ? 2 : 3));
  };

  const gridClassName = `products grid grid-cols-${gridSize}-gap-2 `;
  const [rating, setRating] = useState(0);

console.log( gridSize);
console.log (gridClassName);

const headsetImages = [headset, headset2, headset3, headset4, headset5, headset6, headset7, headset8, headset9, // Include all image paths here
  // ..., more image paths
  ];
  const headsets = [
    { img: headset, name: 'Echo hx', price: '$549.00' },
    { img: headset2, name: 'Echo 89', price: '$560.00' },
    { img: headset3, name: 'Echo 95', price: '$540.00' },
    { img: headset4, name: 'Echo 78', price: '$520.99' },
    { img: headset5, name: 'Echo 90', price: '$500.99' },
    { img: headset6, name: 'Echo 75', price: '$525.00' },
    { img: headset7, name: 'Echo EX', price: '$600.00' },
    { img: headset8, name: 'Echo BX', price: '$575.99' },
    { img: headset9, name: 'Echo TX', price: '$550.99' },
  ];

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  const PopupBody = styled('div')(
    ({ theme }) => `
    
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid black;
    background-color: black ;
    box-shadow:
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 0;
  `,
  );
  


  return (
    

    <div className='flex flex-col'>
      <div className='filter flex flex-row mb-4 justify-between'>
 <div className=' font-inter text-[20px] px-[4px] font-[600]'>Headset</div>
 <div className=' font-inter text-[20px] px-[4px] font-[600] pr-8 gap-4 w-[296px] justify-between flex flex-row'>
   <div className='font-inter  flex flex-row text-[16px] font-[600] text-[#121212] w-1/3 gap-1'>
    <div className=''> Sort by</div>
    <div className=' h-full mt-[4px] '><RiArrowDropDownLine /></div>
   </div>
   <div className='w-2/3  flex flex-row'>
   <div className='w-1/4 py-[4px] px-[8px] border-[#EAEAEA] bg-[#E8ECEF] border-[1px]'onClick={toggleGrid}><BsFillGrid3X3GapFill /></div>
   <div className='w-1/4 py-[4px] px-[8px] border-[#EAEAEA] text-[#6C7275] border-[1px]'onClick={toggleGrid}><IoGridSharp /></div>
   <div className='w-1/4 py-[4px] px-[8px] border-[#EAEAEA] text-[#6C7275] border-[1px]'><PiSquareSplitHorizontalFill /></div>
   <div className='w-1/4 py-[4px] px-[8px] border-[#EAEAEA] text-[#6C7275] border-[1px]'><PiSquareSplitVerticalFill /></div>
   </div>
 
 </div>
    </div>

    <button onClick={toggleGrid}>
        {gridSize === 3 ? '' : ''}
      </button>

      <div className={`products grid grid-cols-${gridSize}`}>
        {headsets.map((headset, index) => (
          <div key={index} className="w-[222px] h-[433px] flex flex-col">
            <div className="h-4/5">
            <a href="/cart">
                <BasePopup className=" " id={id} open={open} anchor={anchor}>
                  <PopupBody className='text-white w-full ' onClick={handleClick}>Add to Cart</PopupBody>
                </BasePopup>
              </a>
              <img className='w-full h-full' src={headset.img} onClick={handleClick} alt={headset.name} />
            </div>
            <div className="h-1/5 bg-white flex flex-col">
              <div className="">
                <StarRating rating={rating} onRatingChange={handleRatingChange} />
              </div>
            </div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] -mt-4 font-[600]">{headset.name}</div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] -mt-12 font-[600]">{headset.price}</div>
          </div>
        ))}
      </div>

      <div className='justify-center items-center my-8 px-[250px]'>
        <button className="w-[163px] h-[40px] border-[#141718] border-[1px] font-[500] text-inter text-[16px] rounded-[8px] text-[#141718] text-center">
          Show more
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
