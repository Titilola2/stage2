
import React, { useState, useEffect } from 'react';
import Tab from './tab';
import Table from './table';

const Checkoutbody = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
      });
                        
        const [isActive, setIsActive] = useState(false);
      
        const handleClick = () => {
          setIsActive(!isActive);
        };
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Replace with your logic for handling submitted data
      };
  
      const tableData = [
        { product: 'Item 1', quantity: 1, price: '$5490.00' },
        { product: 'Item 2', quantity: 2, price: '$520.00' },
        { product: 'Item 3', quantity: 3, price: '$600.00' },
      ];

  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-col  py-[40px] px-[160px]  text-[#141718]">

    <div className='font poppins text-[54px] text-center font-[500] text-[#000000] text-center'>Check out</div>

  <div className='justify-center items-center ' > <Tab />
  </div> 
  
<div className="flex flex-row gap-4 mt-2">
<div className="w-3/5  flex flex-col">
  <div className='px-4 py-4 mb-6   border-[1px] border-[#6C7275] rounded-[2px]'>
    <div className='font-inter font-[600] text-poppins my-4'> Contact Information</div>
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-inter font-[700] text-[#6C7275]">
    <div className='flex flex-row gap-4 w-full '>
    <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="firstName" className=" text-left text-[12px] ">FIRST NAME</label>
        <input
          type="text"
          id="firstName"
          placeholder='First name'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className=" text-left text-[12px] ">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          placeholder='Last name'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>
      
      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="phoneNumber" className=" text-left text-[12px]">PHONE NUMBER</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder='Phone number'
          name="Phonenumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px]">EMAIL ADDRESS</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Your Email'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

     
    </form>
    </div>
    <div className='px-4 py-4 mb-6 border-[1px] border-[#6C7275] rounded-[2px]'>
    <div className='font-inter font-[600] text-poppins my-4'> Shipping Address</div>
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-inter font-[700] text-[#6C7275]">
    
      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="phoneNumber" className=" text-left text-[12px]">STREET ADDRESS</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder='Street Address'
          name="Phonenumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px]">COUNTRY</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Country'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px]">TOWN/CITY</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Town/City'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className='flex flex-row gap-4 w-full '>
    <div className="flex flex-col w-1/2 items-left text-[14px]" >
        <label htmlFor="firstName" className=" text-left text-[12px]">STATE</label>
        <input
          type="text"
          id="firstName"
          placeholder='State'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className="text-left text-[12px]">ZIP CODE</label>
        <input
          type="text"
          id="lastName"
          placeholder='Zip code'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>

     
    </form>
    </div>
    <div className='px-4 py-4 flex flex-col  border-[1px] border-[#6C7275] rounded-[2px]'>
    <div className='font-inter font-[600] text-poppins my-4'> Payment Method</div>
    <button className="w-full my-2 bg-white border-[1px] text-[12px] font-[500] text-[#141718] text-left px-4 py-2 rounded-md focus:outline-none">
        Pay by credit card
      </button>
      <button className="w-full my-2 mb-8 bg-white border-[1px] text-[12px] font-[500] text-[#141718] text-left px-4 py-2 rounded-md focus:outline-none">
        Pay by transfer
      </button>

  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-inter font-[700] text-[#6C7275]">
    
   <div className='py-4 border-t-[1px] border-[#6C7275]'>
      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px]">CARD NUMBER</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='1234 1234 1234'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className='flex pt-4 flex-row gap-4 w-full '>
    <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="firstName" className=" text-left text-[12px] ">EXPIRATION DATE</label>
        <input
          type="text"
          id="firstName"
          placeholder='MM/YY'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className="text-left text-[12px] ">CVC</label>
        <input
          type="text"
          id="lastName"
          placeholder='CVC code'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>
    </div>
     
    </form>
    </div>
    <a href="/order">
    <button className="w-full mt-4 bg-[#141718] text-[18px] font-[500] text-white py-2 rounded-md focus:outline-none">
        Place Order
      </button>
      </a>
</div>


<div className="w-2/5 bg-white  flex flex-col border-[1px] border-[#6C7275] rounded-[2px] h-[700px] px-[24px] py-[16px]">
<div className='font-poppins font-[500] text-[28px]'>Order Summary</div>
<div className=''> 
<div className="flex flex-col">
      <div className="w-full overflow-hidden rounded-md shadow-sm">
       
        <ul role="list" className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <li key={index} className="flex px-4 py-4">
              <div className="w-1/3 py-[24px]">{item.product}</div>
              <div className="w-1/3 py-[24px] text-left">{item.quantity}</div>
              <div className="w-1/3 py-[24px] text-right">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
</div>
<div className='flex flex-col'> 
  <div className='flex flex-row gap-2'>
    < div className='w-3/4'>
    <div className="flex  h-full flex-col  items-left text-[16px]" >
        <label htmlFor="firstName" className=" text-left text-[12px]"></label>
        <input
          type="text"
          id="Input"
          placeholder='Input'
          name="Input"
          value={formData.Input}
          onChange={handleChange}
          required
          className=" px-[8px] py-[16px] rounded border border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
   </div>
    <button className="w-1/4  bg-[#141718] text-[16px] font-[500] text-white py-[16px] font-inter rounded-md focus:outline-none">
        Apply
      </button>

  </div>
     <div className='mx-[px] w-full flex flex-col  text-[#141718]'>
       <div className='font-[500] font-poppins text-[16px] py-[8px]'>Have a coupon?</div>
       <div className='font-[400] font-inter text-[14px] text-[#6C7275] my-[4px]'>Add your code for instant cart distribution</div>
       </div>
       <div className=''>
         <ul className="list-circle space-y-2 ">
        <div className='justify-between flex flex-row border-t-[1px] border-[E8ECEF] py-[12px]'>
        <div className='text-[16px] font-inter font-medium'>Shipping</div>
        <div className='text-[16px] font-inter font-semibold'> Express Shipping</div>
        </div>        
      </ul> 
      <ul className="list-circle space-y-2 border-t-[1px] border-[E8ECEF] py-[12px]">
        <div className='justify-between flex flex-row'>
        <div className='text-[16px] font-inter font-medium'>Subtotal</div>
        <div className='text-[16px] font-inter font-semibold'> $100</div>
        </div> 
      </ul>
      <div className="flex flex-row justify-between border-t-[1px] border-[E8ECEF] text-[#141718] py-[10px]">
        <span className="font-poppins  font-medium text-[20px] text-left ">Total</span>
        <span className="font-semibold text-[20] font-poppins font-medium">$100</span> 
      </div>
      </div>

</div>
</div>


  </div>
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col px-[32px] py-[16px] flex justify-between text-[#141718]">
   <div className='font poppins text-[40px] text-center font-[500] text-[#000000]'>Checkout</div>
   <Tab />

   <div className='px-[24px] py-[16px] mb-[24px] -my-16  border-[1px] h-[328px] border-[#6C7275] rounded-[4px]'>
    <div className='font-inter font-[600] text-poppins my-[24px]'> Contact Information</div>
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-inter font-[700] text-[#6C7275]">
    <div className='flex flex-row gap-[8px] -m-[8px] w-full h-[64px]  '>
    <div className="flex flex-col w-1/2  items-left text-[14px]">
        <label htmlFor="firstName" className=" text-left text-[12px] mb-[12px]  ">FIRST NAME</label>
        <input
          type="text"
          id="firstName"
          placeholder='First name'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className=" text-left text-[12px] mb-[12px]  ">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          placeholder='Last name'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>
      
      <div className="flex flex-col items-left text-[14px] h-[64px] ">
        <label htmlFor="phoneNumber" className=" text-left text-[12px] mb-[12px]">PHONE NUMBER</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder='Phone number'
          name="Phonenumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px] h-[64px] ">
        <label htmlFor="emailAddress" className=" text-left text-[12px] mb-[12px]">EMAIL ADDRESS</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Your Email'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

     
    </form>
    </div>
    <div className='px-[24px] py-[24px] mb-[24px] border-[1px]  border-[#6C7275] rounded-[4px] h-[470px]'>
    <div className='font-inter font-[600] text-poppins mb-[24px]'> Shipping Address</div>
  <form onSubmit={handleSubmit} className="flex flex-col space-y-[24px] text-inter font-[700] text-[#6C7275]">
    
      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="phoneNumber" className=" text-left text-[12px] mb-[12px]">STREET ADDRESS*</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder='Street Address'
          name="Phonenumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px] mb-[12px]">COUNTRY*</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Country'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px] mb-[12px]">TOWN/CITY*</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='Town/City'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className='flex flex-row gap-[8px] px-[8px]  w-full '>
    <div className="flex flex-col w-1/2 items-left text-[14px]" >
        <label htmlFor="firstName" className=" text-left text-[12px] mb-[12px]">STATE</label>
        <input
          type="text"
          id="firstName"
          placeholder='State'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className="text-left text-[12px] mb-[12px]">ZIP CODE</label>
        <input
          type="text"
          id="lastName"
          placeholder='Zip code'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>
    <div className='mx-[12px]'>
    <li className="flex flex-row space-x-[10px]  w-full  h-[24px]">
        <input id="react-checkbox" type="checkbox" value="" className="w-[16px] h-[16px] text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
        <label htmlFor="react-checkbox" className="w-full text-left text-[12px] font-normal font-inter text-[#6C7275]">Use a different billing adress (optional)</label>
      </li>

    </div>

     
    </form>
    </div>
    <div className='px-[24px] py-[24px] mb-[24px] flex flex-col h-[436px]  border-[1px]  border-[#6C7275] rounded-[4px]'>
    <div className='font-inter font-[600] text-poppins mb-[24px] '> Payment Method</div>
   
      <button className={`w-full mb-[24px]  bg-white border-[1px] border-[#6C7275] text-[14px] font-[500] text-[#141718] text-left px-4 py-[20px] rounded-md focus:outline-none" ${
        isActive ? 'bg-gray-200 list-disc' : 'list-style-none'
      }`}
      onClick={handleClick}>
        Pay by Credit Card
      </button>
      <button className={`w-full mb-[24px]  bg-white border-[1px] border-[#6C7275] text-[14px] font-[500] text-[#141718] text-left px-4 py-[20px] rounded-md focus:outline-none" ${
        isActive ? 'bg-gray-200 list-disc' : 'list-style-none'
      }`}
      onClick={handleClick}>
        Pay by Transfer
      </button>
 
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-inter font-[700] text-[#6C7275]">
    
   <div className='py-[24px] border-t-[1px] border-[#6C7275]'>
      <div className="flex flex-col items-left text-[14px]">
        <label htmlFor="emailAddress" className=" text-left text-[12px] mb-[12px]">CARD NUMBER</label>
        <input
          type="email"
          id="emailAddress"
          placeholder='1234 1234 1234'
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className='flex pt-4 flex-row gap-4 w-full '>
    <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="firstName" className=" text-left text-[12px] mb-[12px]">EXPIRATION DATE</label>
        <input
          type="text"
          id="firstName"
          placeholder='MM/YY'
          name="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col w-1/2 items-left text-[14px]">
        <label htmlFor="lastName" className="text-left text-[12px] mb-[12px]">CVC</label>
        <input
          type="text"
          id="lastName"
          placeholder='CVC code'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

    </div>
    </div>
     
    </form>
    </div>
    <div className='px-4 py-4 flex flex-col  border-[1px]  border-[#6C7275] rounded-[4px]'>
    <div className='font-poppins font-[500] text-[28px]'>Order Summary</div>
<div className=''> 
<div className="flex flex-col">
      <div className="w-full overflow-hidden rounded-md shadow-sm">
       
        <ul role="list" className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <li key={index} className="flex px-4 py-4">
              <div className="w-1/3 py-[24px]">{item.product}</div>
              <div className="w-1/3 py-[24px] text-left">{item.quantity}</div>
              <div className="w-1/3 py-[24px] text-right">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
</div>
<div className='flex flex-col'> 
  <div className='flex flex-row gap-2'>
    < div className='w-3/4'>
    <div className="flex  h-full flex-col  items-left text-[16px]" >
        <label htmlFor="firstName" className=" text-left text-[12px]"></label>
        <input
          type="text"
          id="Input"
          placeholder='Input'
          name="Input"
          value={formData.Input}
          onChange={handleChange}
          required
          className=" px-[8px] py-[16px] rounded border border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
   </div>
    <button className="w-1/4  bg-[#141718] text-[16px] font-[500] text-white py-[16px] font-inter rounded-md focus:outline-none">
        Apply
      </button>

  </div>
     <div className='mx-[px] w-full flex flex-col  text-[#141718]'>
       <div className='font-[500] font-poppins text-[16px] py-[8px]'>Have a coupon?</div>
       <div className='font-[400] font-inter text-[14px] text-[#6C7275] my-[4px]'>Add your code for instant cart distribution</div>
       </div>
       <div className=''>
         <ul className="list-circle space-y-2 ">
        <div className='justify-between flex flex-row border-t-[1px] border-[E8ECEF] py-[12px]'>
        <div className='text-[16px] font-inter font-medium'>Shipping</div>
        <div className='text-[16px] font-inter font-semibold'> Express Shipping</div>
        </div>        
      </ul> 
      <ul className="list-circle space-y-2 border-t-[1px] border-[E8ECEF] py-[12px]">
        <div className='justify-between flex flex-row'>
        <div className='text-[16px] font-inter font-medium'>Subtotal</div>
        <div className='text-[16px] font-inter font-semibold'> $100</div>
        </div> 
      </ul>
      <div className="flex flex-row justify-between border-t-[1px] border-[E8ECEF] text-[#141718] py-[10px]">
        <span className="font-poppins  font-medium text-[20px] text-left ">Total</span>
        <span className="font-semibold text-[20] font-poppins font-medium">$100</span> 
      </div>
      </div>

</div>
    </div>
    <a href="/order">
    <button className="w-full mt-4 bg-[#141718] text-[18px] font-[500] text-white py-2 rounded-md focus:outline-none">
        Place Order
      </button>
      </a>
    </div>
    



   
   </>
  );
};

export default Checkoutbody;