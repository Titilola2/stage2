
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
<div className="  flex flex-col bg-[#ECECEC] h-[360px] py-[95px]  w-screen gap-[32px] justify-center items-center ">
<div className='flex flex-col gap-[8px] text-center'>
 
         <div className='font-poppins font-[500] text-[40px]'>
       Join Our Newsletter
   </div>
   <div className='font-normal text-[18px] font-inter text-[#121212]'>
         Dont miss the fun. Get the latest buzz on products deals and more
   </div>
</div>
<div className='border-[1px] rounded-[8px] border-[#000000] font-inter font-[400] w-[303px] h-[50px]  text-left text-[16px] p-[10px]'>
         Email Adress
   </div>
</div>
  
</div>  

  


{   /*small screen */}
<div className=" md:hidden flex flex-col bg-[#ECECEC] h-[358px] py-[95px] px-[32px] w-screen gap-[32px]">
<div className='flex flex-col gap-[8px]'>
   <div className='font-poppins text-[28px] font-medium w-[312px] h-[34px] text-center'>
   Join Our Newsletter
   </div>
         <div className='font-normal text-[14px] font-inter text-[#121212] text-center'>
         Dont miss the fun. Get the latest buzz on products deals and more
   </div>
</div>
<div className='font-inter font-[400] text-[16px] text-left  w-[263px] h-[50px] p-[10px] border-[1px] rounded-[8px] mx-[20px] border-[#000000]'> Email Adress</div>
</div>



   </div>
  );
};

export default Body;