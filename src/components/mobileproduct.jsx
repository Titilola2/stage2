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
import StarRating from './starRating';
import { useNavigate } from 'react-router-dom';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


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
    

      const [anchor, setAnchor] = React.useState(null);

      const navigate = useNavigate();
    
      const handlePopupClick = () => {
        navigate('/cart');
      };
    
    
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
      
  
      <div className='flex flex-col '>
       
      <div className={gridClassName}>
         
        {headsets.map((headset, index) => ( // Render 12 product items
          <div key={index} className="w-[152px] h-[281px] flex flex-col ">
            <div className="h-4/5">
            <BasePopup className=" " id={id} open={open} anchor={anchor}>
                  <PopupBody className='text-white w-full ' onClick={handlePopupClick}>Add to Cart</PopupBody>
                </BasePopup>
        
              <img className='w-full h-full'src={headset.img} onClick={handleClick} onMouseEnter={handleClick} alt={headset.name} />
            </div>
            <div className="h-1/5 bg-white flex flex-col">
              <div className="">
                {/* Your StarRating component here */}
                <StarRating rating={rating} onRatingChange={handleRatingChange} />
              </div>
            </div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">{headset.name}</div>
            <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">{headset.price}</div>
          </div>
        ))}
        
      </div>
      <div className='justify-center items-center my-8 mx-24'>
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
