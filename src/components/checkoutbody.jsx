
import React, { useState, useEffect } from 'react';
import Tab from './tab';

const Checkoutbody = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
      });
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Replace with your logic for handling submitted data
      };


  
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
    <div className='font-inter font-[600] text-poppins my-4'> Shipping Address</div>
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
    <button className="w-full mt-4 bg-[#141718] text-[18px] font-[500] text-white py-2 rounded-md focus:outline-none">
        Place Order
      </button>


</div>


<div className="w-2/5 bg-white  flex flex-col bg-red border-[1px] border-[#6C7275] rounded-[2px] h-[400px]">
</div>

  </div>
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col px-[32px] py-[16px] flex justify-between text-[#141718]">
   <div className='font poppins text-[40px] text-center font-[500] text-[#000000]'>Cart</div>
   <Tab />

   <div className='px-4 py-4 mb-6 -my-16  border-[1px]  border-[#6C7275] rounded-[4px]'>
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
    <div className='px-4 py-4 mb-6 border-[1px]  border-[#6C7275] rounded-[4px]'>
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
    <div className='px-4 py-4 flex flex-col  border-[1px]  border-[#6C7275] rounded-[4px]'>
    <div className='font-inter font-[600] text-poppins my-4'> Shipping Address</div>
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
    </div>
    

   
   </>
  );
};

export default Checkoutbody;