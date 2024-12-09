import React from 'react'
import { assets } from '../assets/assets'

const Features = () => {
  return (
    <div className=''>
      <div className='flex flex-col items-center'>
        <h1 className='text-[#6941C6] text-center font-semibold'>Features</h1>
        <h1 className='text-center text-3xl sm:text-4xl font-semibold'>Analytics that feels like it’s from the future</h1>
        <p className='text-center text-[#475467] text-[18px] mt-4 max-w-[600px]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 my-10 sm:px-[5vw] md:px-[7vw]'>
        <div className='text-center'>
          <img src={assets.inbox_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Share team inboxes</h1>
          <p className='text-[#475467] text-[16px]'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className='text-center'>
          <img src={assets.lightning_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Deliver instant answers</h1>
          <p className='text-[#475467] text-[16px]'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>
        <div className='text-center'>
          <img src={assets.report_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Manage your team with reports</h1>
          <p className='text-[#475467] text-[16px]'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
        </div>
        <div className='text-center'>
          <img src={assets.smile_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Connect with customers</h1>
          <p className='text-[#475467] text-[16px]'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
        </div>
        <div className='text-center'>
          <img src={assets.tool_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Connect the tools you already use</h1>
          <p className='text-[#475467] text-[16px]'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
        </div>
        <div className='text-center'>
          <img src={assets.heart_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] font-semibold my-3'>Our people make the difference</h1>
          <p className='text-[#475467] text-[16px]'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>
      </div>
      <div className='bg-[#F9FAFB] my-20 py-12 sm:px-[5vw] md:px-[7vw] mx-[-16px]'>
        <p className='flex items-center justify-center gap-4 font-semibold text-2xl my-4'><img src={assets.green_lightning} className='w-8' alt="" />Sisyphus</p>
        <h1 className='text-3xl sm:text-5xl sm:mx-auto font-semibold max-w-[1100px] text-center mx-4'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
        <div className='flex flex-col items-center my-6'>
          <img src={assets.profile_manager} className='w-20' alt="" />
          <h1 className='font-semibold text-xl'>Candice Wu</h1>
          <p className='text-[#475467]'>Product Manager, Sisyphus</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <p className='rounded-full me-4 px-2 border border-[#D6BBFB] bg-[#F9F5FF] text-[#6941C6] font-medium inline-flex justify-center'>Features</p>
        <h1 className='text-4xl font-semibold'>Cutting-edge features for advanced analytics</h1>
        <p className='text-[#475467] text-[20px] max-w-[700px] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <img src={assets.dashboard_mobile} alt="" className='sm:mx-auto hidden sm:block ' />
      <img src={assets.mobile} alt="" className='mx-auto sm:hidden block my-8' />
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:gap-4  my-10 sm:px-[5vw] md:px-[7vw]'>
        <div className=''>
          <img src={assets.inbox_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] text-center font-semibold my-3 '>Share team inboxes</h1>
          <p className='text-[#475467] text-center text-[16px] '>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          <div className='flex items-center justify-center my-4 gap-2'>
            <p className='text-[#6941C6] font-semibold'>Learn more</p>
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <img src={assets.lightning_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] text-center font-semibold my-3'>Deliver instant answers</h1>
          <p className='text-[#475467] text-center text-[16px]'>An all-in-one customer service platform that helps you to balance everything your customers need to be happy.</p>
          <div className='flex items-center justify-center my-4 gap-2'>
            <p className='text-[#6941C6] font-semibold'>Learn more</p>
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <img src={assets.report_img} className='w-12 mx-auto' alt="" />
          <h1 className='text-[20px] text-center font-semibold my-3'>Manage your team with reports</h1>
          <p className='text-[#475467] text-center text-[16px]'>Measure what matters with Untitled’s easy-to-use reports. You can filter and drilldown on the data in a couple clicks.</p>
          <div className='flex items-center justify-center my-4 gap-2'>
            <p className='text-[#6941C6] font-semibold'>Learn more</p>
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <hr className='sm:mx-[5vw] md:mx-[7vw]'/>
    </div>
  )
}

export default Features