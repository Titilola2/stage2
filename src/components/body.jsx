
import React from 'react';


const Body = () => {
  return (
   <div className="flex flex-col bg-slate-100">


{   /* large screen */          }
<div className="hidden md:flex flex-row gap-12 bg-white">
    <div className="md:w-2/5 w-full flex flex-col mx-24 my-12 items-start">
    <div className="text-xl w-3/5 font-medium text-left">SINC Partners is a service incubation company </div>
    <div className="text-lg font-normal w-4/5 text-left"> Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</div>
    <div className="my-2"> <button className="bg-black text-white font-medium text-[12px] py-1 px-2 mx-4 rounded-full">
      Sinc with us
    </button>
    </div>

    </div>
    <div className="w-1/2 ">
   <img src="" alt="homepage-img" />
    </div>
</div>  

{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white">
<div className=" w-full flex flex-col mx-6 my-6 items-start">
    <div className="text-[18px] w-4/5 font-medium text-left">SINC Partners is a service incubation company </div>
    <div className="text-[16px] font-normal w-full text-left"> Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</div>
    <div className="my-4 "> <button className="bg-black text-white font-medium text-[12px] py-1 px-2  rounded-full">
      Sinc with us
    </button>
    </div>

    </div>
</div>



{   /*large screen */}
<div className=" hidden md:flex flex-col  mx-56 w-3/5 my-8 py-4 items-center justify-center bg-white rounded-xl">
<div className="text-[16px] w-3/5 font-normal text-center">"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks" </div>
<div className="text-[14px] font-semibold text-center mt-4"> Daniel Izeghs Oratokhai</div>
<div className="text-[14px] font-normal text-center mb-4"> Managing Partner at SINC Partners Ltd</div>
</div>

{   /*small screen */}
<div className="md:hidden flex flex-col  mx-4 w-full my-2 py-8 px-4 items-center justify-center bg-white rounded-lg">
<div className="text-[16px]  font-normal text-center">"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks" </div>
<div className="text-[14px] font-semibold text-center mt-4"> Daniel Izeghs Oratokhai</div>
<div className="text-[14px] font-normal text-center mb-4"> Managing Partner at SINC Partners Ltd</div>
</div>



{   /*large screen */}
<div className=" hidden md:flex flex-col  mx-36 w-4/5 my-8 py-4 items-center justify-center ">
<div className="text-3xl w-2/5 font-bold text-center">Network of builders helping startup scale </div>
<div className="flex flex-row gap-2"> 
   <div className=" w-1/2 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold text-left mx-6 text-left mt-8">Work with Service Incubators to expedite your time-to-market</div>
    <div className="text-md font-normal mx-4  my-2 text-left"> Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building. </div>
    <div className="text-md font-medium mx-4  text-left"> For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</div>
    <div className="my-4 mx-4"> <div className=" text-black font-semibold text-[20px] ">
      Learn more 
    </div>
    </div>
    </div>
    <div className=" w-1/2 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-4/5  font-semibold text-left mx-6 text-left mt-8">Access funding after your mvp is validated</div>
    <div className="text-md font-normal mx-4  my-2 text-left"> Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.  </div>
    <div className="text-md font-medium mx-4  text-left">Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months</div>
    <div className="my-4 mx-4"> <div className=" text-black font-semibold text-[20px] ">
      Learn more 
    </div>
    </div>
    </div>
</div>
</div>



{   /*large screen */}
<div className=" hidden md:flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-4xl w-4/5 font-semibold my-8 text-center">Our area of focus</div>
<div className="text-sm w-3/5 font-normal mb-4 text-center">In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</div>
<div className="flex flex-row "> 
   <div className="w-1/5 flex flex-col text-white  px-2 my-6 items-start bg-[#303030] ">
    <div className="text-xl w-full  font-semibold mb-6  text-left mt-4">01</div>
    <div className="text-sm font-normal mx-4  my-2 text-left">Bussiness Support & Incubation </div>
    </div>

    <div className="w-1/5 flex flex-col text-white  px-2 my-6 items-start bg-[#F47733] ">
    <div className="text-xl w-full  font-semibold mb-6  text-left mt-4"> 02 </div>
    <div className="text-sm font-normal mx-4  my-2 text-left">On-Demand & As-A-Service </div>
    </div>

    <div className="w-1/5 flex flex-col text-white  px-2 my-6 items-start bg-[#FF78BF] ">
    <div className="text-xl w-full  font-semibold mb-6  text-left mt-4">03  </div>
    <div className="text-sm font-normal mx-4  my-2 text-left"> Marketing & crowdsourcing </div>
    </div>

    <div className="w-1/5 flex flex-col text-white px-2 my-6 items-start bg-[#20888F] ">
    <div className="text-xl w-full  font-semibold mb-6  text-left mt-4">04</div>
    <div className="text-sm font-normal mx-4  my-2 text-left"> Aggregation & Shared Economy </div> 
    </div>

    <div className="w-1/5 flex flex-col text-white  px-2 my-6 items-start bg-[#FF78BF] ">
    <div className="text-xl w-4/5  font-semibold mb-6  text-left mt-4">05</div>
    <div className="text-sm font-normal mx-4  my-2 text-left"> Decentralized Economy & Digital Assets  </div>
    </div>
</div>
</div>

{   /*large screen */}
<div className=" hidden md:flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Our Concept Innovations</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-6  text-center mt-8"> Service Incubators </div>
    <div className="text-sm font-normal mx-4  my-2 text-center"> A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP </div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-6  text-center mt-8">Virtualting</div>
    <div className="text-sm font-normal mx-4  my-2 text-center"> A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource </div> 
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-4/5  font-semibold mb-6  text-center mt-8">Diiming</div>
    <div className="text-sm font-normal mx-4  my-2 text-center"> A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice  </div>
    </div>
</div>
</div>


{   /*large screen */}
<div className=" hidden md:flex flex-col  mx-36 w-4/5 mb-4   ">
<div className="items-center justify-center ml-12">
<div className="text-5xl w-4/5 font-semibold my-4 text-center ">Our Incubation Service Model</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</div>
</div>
<div className="items-start my-4">
<div className="text-2xl font-medium ml-4 text-left mb-2">Hypothesis</div>
<div className="text-[12px] font-normal ml-4 text-left">Just a few reasons we know its time for this model within the ecosystem</div>
</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-2 ml-2 text-left mt-8"> Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-2 ml-2 text-left mt-8">Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</div> 
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-4/5  font-semibold mb-2 ml-2 text-left mt-8">Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return </div>
    </div>
</div>
<div className="items-start my-4">
<div className="text-2xl font-medium ml-4 text-left mb-2">Case Study</div>
<div className="text-[12px] font-normal ml-4 text-left">See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</div>
</div>
<div className="w-3/4 items-start -ml-28 my-4 ">
  <button className="bg-white border border-black text-black font-medium text-[12px] py-2 px-4 mx-4 rounded-full">
      Service incubator equity
    </button>
    <button className="bg-white text-black border border-black font-medium text-[12px] py-2 px-4 rounded-full">
      SEEQ Maths Equation
    </button>
    <button className="bg-white border border-black text-black font-medium text-[12px] py-2 px-4 mx-4 rounded-full">
      Value of my equity over time
    </button>
  </div>
  <div className="text-sm w-4/5 underline font-normal my-4 text-center">Become a service incubator</div>
</div>


{   /*large screen our student */}
<div className=" hidden md:flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Our Student Portfolio</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center"> Our 2024 service incubator portfolio companies</div>
<div className="grid grid-cols-8 gap-8 my-8">
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  <div>1</div> 
  
</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center underline">View all companies</div>
</div>


{   /*large screen co-found */}
<div className=" hidden md:flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Co-Found with us</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className="text-xl w-1/5  font-semibold mb-6  text-center mt-8 rounded-full text-white bg-[#303030]"> 1 </div>
    <div className="text-xl w-full  font-semibold mb-6  text-start mt-8"> We ideate </div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market. </div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5  font-semibold mb-6  text-center mt-8 rounded-full text-white bg-[#F47733]"> 2 </div>
    <div className="text-xl w-full  font-semibold mb-6  text-start mt-8">You validate</div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions</div> 
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5 font-semibold mb-6  text-center mt-8 rounded-full text-white  bg-[#FF78BF]"> 3  </div>
    <div className="text-xl w-4/5  font-semibold mb-6  text-start mt-8">You Co-own</div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture. </div>
    </div>
</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center underline">Build your dream</div>
</div>


{   /*large screen Join our  */}
<div className=" flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Join Our Entrepreneur In Residence (EIR) Program</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className="text-xl w-1/5  font-semibold text-center mt-8 rounded-full text-white bg-[#303030]"> 1 </div>
    <div className="text-md w-full  font-semibold   text-start mt-2"> Application and Selection </div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
    Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application. </div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5  font-semibold   text-center mt-8 rounded-full text-white bg-[#F47733]"> 2 </div>
    <div className="text-md w-full  font-semibold   text-start mt-2">Alignment Meeting and Proposal Submission</div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
    Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.</div> 
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5 font-semibold text-center mt-8 rounded-full text-white  bg-[#FF78BF]"> 3  </div>
    <div className="text-md w-4/5  font-semibold   text-start mt-2">Negotiation and agreement</div>
    <div className="text-[12px] font-normal mx-2  my-2 text-left"> Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
    Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners. </div>
    </div>

   
</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center underline">support the future</div>
</div>


{   /*large screen Sinc */}
<div className=" hidden md:flex flex-col  mx-36 w-4/5 mb-4   ">
<div className="items-center justify-center ml-12">
<div className="text-5xl w-4/5 font-semibold my-4 text-center ">SINC Investors Network</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. </div>
<span className="text-sm w-4/5 font-semibold mb-4 text-center"> Disclaimer: </span>
<span className="text-sm w-4/5 font-normal mb-4 text-center">  These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest </span>
</div>
<div className="items-start my-4  flex flex-start">
<span className="text-lg font-medium text-left ">Micro Angel Investors and service incubators</span>
<span className="text-sm font-normal mt-1 ml-2 text-left ">(Invest from $500 & above)</span>
</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-2 ml-2 text-left mt-8"> Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-full  font-semibold mb-2 ml-2 text-left mt-8">Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</div> 
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-4/5  font-semibold mb-2 ml-2 text-left mt-8">Img</div>
    <div className="text-sm font-normal mx-2  my-2 text-left"> Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return </div>
    </div>
</div>
</div>


{   /*large screen Equity*/}
<div className="flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Equity Jobs</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center">See companies and startups offering equity or a mix of cash and equity for very important position in their company</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/4 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className="text-xl w-1/5  font-semibold text-center mt-8 rounded-full text-white bg-[#303030]"> 1 </div>
    <div className="text-[12px] w-full  font-normal   text-start mt-2"> This company is a SAAS Startup that builds AI copy generator... </div>
    <div className="text-sm w-full  font-semibold   text-start my-2"> Chief Executive Officer </div>
    <div className="w-full  flex flex-row text-[12px] text-gray-500 "> 
    <div className="w-1/3 "> LOCATION   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> INDUSTRY </div>
       </div>
       <div className="w-full gap-8  flex flex-row text-[10px]  "> 
    <div className=" "> Abuja, Nigeria   </div>
    <div className=" "> On-demand print </div>
       </div>
       <div className="w-full flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3 -ml-2"> EQUITY   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> STIPEND </div>
       </div>
       <div className="w-full gap-16  flex flex-row text-[10px]  "> 
    <div className=" "> 1.2%  </div>
    <div className=" "> NGN 200,000/mth </div>
       </div>
       <div className="w-full  flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3  "> DEADLINE   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> ROLE TYPE </div>
       </div>
       <div className="w-full gap-10  flex flex-row text-[10px]  "> 
    <div className=" "> 24th, January 2024   </div>
    <div className=" "> Full-time </div>
       </div>
    <div className=" my-4"> <button className="bg-black border-black text-white font-medium text-[10px] py-2 px-6 rounded-full">
      View Details
    </button></div>
    </div>

    <div className="w-1/4 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className="text-xl w-1/5  font-semibold text-center mt-8 rounded-full text-white bg-[#303030]"> 1 </div>
   <div className="text-[12px] w-full  font-normal   text-start mt-2"> This company is a SAAS Startup that builds AI copy generator... </div>
   <div className="text-sm w-full  font-semibold   text-start my-2"> UX strategist </div>
   <div className="w-full  flex flex-row text-[12px] text-gray-500 "> 
    <div className="w-1/3 "> LOCATION   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> INDUSTRY </div>
       </div>
       <div className="w-full gap-14  flex flex-row text-[10px]  "> 
    <div className=" "> Abuja, Nigeria   </div>
    <div className=" "> E-commerce </div>
       </div>
       <div className="w-full flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3 -ml-2"> EQUITY   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> STIPEND </div>
       </div>
       <div className="w-full gap-16  flex flex-row text-[10px]  "> 
    <div className=" "> 1.2%  </div>
    <div className=" "> NGN 200,000/mth </div>
       </div>
       <div className="w-full  flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3  "> DEADLINE   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> ROLE TYPE </div>
       </div>
       <div className="w-full gap-10  flex flex-row text-[10px]  "> 
    <div className=" "> 24th, January 2024   </div>
    <div className=" "> Full-time </div>
       </div>
    <div className="my-4"> <button className="bg-black border-black text-white font-medium text-[10px] py-2 px-6 rounded-full">
      View Details
    </button></div>
    </div>

    <div className="w-1/4 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5  font-semibold   text-center mt-8 rounded-full text-white bg-[#F47733]"> 2 </div>
    <div className="text-[12px] w-full  font-normal   text-start mt-2"> This company is a SAAS Startup that builds AI copy generator... </div>
    <div className="text-sm w-full  font-semibold   text-start my-2"> CTO & Head of Innovations </div>
    <div className=""> </div> 
    <div className="w-full  flex flex-row text-[12px] text-gray-500 "> 
    <div className="w-1/3 "> LOCATION   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> INDUSTRY </div>
       </div>
       <div className="w-full gap-16  flex flex-row text-[10px]  "> 
    <div className=" "> Abuja, Nigeria   </div>
    <div className=" "> Fintech </div>
       </div>
       <div className="w-full flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3 -ml-2"> EQUITY   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> STIPEND </div>
       </div>
       <div className="w-full gap-16  flex flex-row text-[10px]  "> 
    <div className=" "> 1.2%  </div>
    <div className=" "> NGN 200,000/mth </div>
       </div>
       <div className="w-full  flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3  "> DEADLINE   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> ROLE TYPE </div>
       </div>
       <div className="w-full gap-10  flex flex-row text-[10px]  "> 
    <div className=" "> 24th, January 2024   </div>
    <div className=" "> Full-time </div>
       </div>
    <div className="my-4"> <button className="bg-black border-black text-white font-medium text-[10px] py-2 px-6 rounded-full">
      View Details
    </button></div>
    </div>

    <div className="w-1/4 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg">
    <div className="text-xl w-1/5 font-semibold text-center mt-8 rounded-full text-white  bg-[#FF78BF]"> 3  </div>
    <div className="text-[12px] w-full  font-normal   text-start mt-2"> This company is a SAAS Startup that builds AI copy generator... </div>
    <div className="text-sm w-full  font-semibold   text-start my-2"> Backend Developer</div>
    <div className="w-full  flex flex-row text-[12px] text-gray-500 "> 
    <div className="w-1/3 "> LOCATION   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> INDUSTRY </div>
       </div>
       <div className="w-full gap-12  flex flex-row text-[10px]  "> 
    <div className=" "> Abuja, Nigeria   </div>
    <div className=" "> Transportation </div>
       </div>
       <div className="w-full flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3 -ml-2"> EQUITY   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> STIPEND </div>
       </div>
       <div className="w-full gap-16  flex flex-row text-[10px]  "> 
    <div className=" "> 1.2%  </div>
    <div className=" "> NGN 200,000/mth </div>
       </div>
       <div className="w-full  flex flex-row text-[12px] text-gray-500 mt-4 "> 
    <div className="w-1/3  "> DEADLINE   </div>
    <div className='w-1/3'> </div>
    <div className="w-1/3 "> ROLE TYPE </div>
       </div>
       <div className="w-full gap-10  flex flex-row text-[10px]  "> 
    <div className=" "> 24th, January 2024   </div>
    <div className=" "> Full-time </div>
       </div>
    <div className="my-4"> <button className="bg-black border-black text-white font-medium text-[10px] py-2 px-6 rounded-full">
      View Details
    </button></div>
    </div>
   
</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center underline">See More Equity Jobs</div>
</div>


{   /*large screen Join our program */}
<div className=" flex flex-col  mx-32 w-4/5 my-2  items-center justify-center ">
<div className="text-5xl w-4/5 font-semibold my-8 text-center">Blogs & Resources</div>
<div className="flex flex-row gap-2"> 
   <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className=" w-full h-36 mb-2">
      <img alt="youtube-video"/>
    </div>
   <div className="flex flex-row gap-2">
    <div className="w-4/5">
    <div className="text-sm w-full  font-semibold   text-start mt-2"> Top 10 most powerful startup </div>
    <div className="text-[12px] font-normal   my-2 text-left"> Top 10 most powerful startup. Top 10 most powerful startup </div>
    </div>
    <div className="">
      <img alt="picture"/>
    </div>
    </div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className=" w-full h-36 mb-2">
      <img alt="youtube-video"/>
    </div>
   <div className="flex flex-row gap-2">
    <div className="w-4/5">
    <div className="text-sm w-full  font-semibold   text-start mt-2"> Top 10 most powerful startup </div>
    <div className="text-[12px] font-normal   my-2 text-left"> Top 10 most powerful startup. Top 10 most powerful startup </div>
    </div>
    <div className="">
      <img alt="picture"/>
    </div>
    </div>
    </div>

    <div className="w-1/3 flex flex-col mx-4 px-4 my-6 items-start bg-white rounded-lg ">
   <div className=" w-full h-36 mb-2">
      <img alt="youtube-video"/>
    </div>
   <div className="flex flex-row gap-2">
    <div className="w-4/5">
    <div className="text-sm w-full  font-semibold   text-start mt-2"> Top 10 most powerful startup </div>
    <div className="text-[12px] font-normal   my-2 text-left"> Top 10 most powerful startup. Top 10 most powerful startup </div>
    </div>
    <div className="">
      <img alt="picture"/>
    </div>
    </div>
    </div>

</div>
<div className="text-sm w-4/5 font-normal mb-4 text-center underline">See More Blogs & Resources</div>
</div>


<div className=" flex flex-col  my-2  items-center justify-center ">
<div className="text-xl w-3/5 font-normal my-8 text-center">As Featured In</div>
<div className=""><img className=" w-full" src="" alt="background-image"/></div>
<div className="text-6xl w-3/5 font-semibold my-8 text-center">Let's build companies that help everyone succeed</div>
<div className=" items-center justify center space-between ">
  <button className="bg-white border border-black text-black font-medium text-[12px] py-2 px-6 mx-4 rounded-full">
      Sinc with us
    </button>
    <button className="bg-black text-white font-medium text-[12px] py-2 px-6 rounded-full">
      Apply to SIP 1.0
    </button>
  </div>
</div>



<div>
</div>



<div>
</div>



<div>
</div>



<div>
</div>



<div>
</div>



<div>
</div>

   </div>
  );
};

export default Body;