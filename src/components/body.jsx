
import React from 'react';


const Body = () => {
  return (
   <div className="flex flex-col ">


{   /* large screen */          }
<div className="hidden md:flex ">
  
</div>  




{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white">

</div>




{  /* Newsletter*/}
{   /* large screen */          }
<div className="hidden md:flex ">
  
</div>  




{   /*small screen */}
<div className=" md:hidden flex flex-col bg-[#ECECEC] h-[358px] py-[95px] px-[32px] w-screen gap-[32px]">
<div className='flex flex-col gap-[8px]'>
   <div className='font-poppins text-[28px] font-medium w-[312px] h-[34px]'>
   Join Our Newsletter
   </div>
         <div className='font-normal text-[14px] font-inter text-[#121212]'>
         Dont miss the fun. Get the latest buzz on products deals and more
   </div>
</div>
<div className='font-inter font-[400] text-16px text-left  w-[263px] h-[50px] p-[10px] border-[1px] rounded-[8px] mx-[20px] border-[#000000]'> Email Adress</div>
</div>



   </div>
  );
};

export default Body;