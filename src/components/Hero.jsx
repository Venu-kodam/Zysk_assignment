import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='pt-12 sm:px-[5vw] md:px-[7vw]'>
            <div className='flex flex-col items-center'>
                <div className='mt-10 mb-4'>
                    <div className='bg-[#F9F5FF] text-[#6941C6] inline-flex justify-center rounded-full px-2 py-1 border border-[#D6BBFB]'>
                        <p className='rounded-full me-4 bg-white px-2 border border-[#D6BBFB] text-[12px] sm:text-[16px] font-medium'>New feature</p>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[12px] sm:text-[16px] font-medium'>Checkout the team dashboard</p>
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl sm:text-6xl font-semibold my-4 text-center'>Beautiful analytics to grow smarter</h1>
                    <p className='text-[#475467] text-[20px] text-center max-w-[700px]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    <div className='flex flex-col-reverse w-full sm:flex-row sm:items-center sm:justify-center gap-4 my-10 '>
                        <div className='my-1 flex items-center justify-center gap-2 rounded-md border border-[#D0D5DD] px-6 py-4 font-semibold text-xl'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 8.96533C10 8.48805 10 8.24941 10.0997 8.11618C10.1867 8.00007 10.3197 7.92744 10.4644 7.9171C10.6304 7.90525 10.8311 8.03429 11.2326 8.29239L15.9532 11.3271C16.3016 11.551 16.4758 11.663 16.5359 11.8054C16.5885 11.9298 16.5885 12.0702 16.5359 12.1946C16.4758 12.337 16.3016 12.449 15.9532 12.6729L11.2326 15.7076C10.8311 15.9657 10.6304 16.0948 10.4644 16.0829C10.3197 16.0726 10.1867 15.9999 10.0997 15.8838C10 15.7506 10 15.512 10 15.0347V8.96533Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Demo</p>
                        </div>
                        <button className='bg-[#7F56D9] text-white px-6 py-4 rounded-md text-xl font-semibold'>Sign up</button>
                    </div>
                </div>
                <div className='border-8 border-[#101828] rounded-xl w-full md:h-[320px] lg:h-[480px] xl:h-[610px] overflow-hidden'>
                    <img src={assets.dashboard} className='w-full ' alt="" />
                </div>
                <div className='mt-10 sm:mt-20 mb-10'>
                    <p className='text-[#475467] text-center font-semibold my-4'>Join 4,000+ companies already growing</p>
                    <div className='grid grid-cols-2 sm:grid-cols-6 gap-4  items-center '>
                        <img src={assets.company1} alt="" />
                        <img src={assets.company2} alt="" />
                        <img src={assets.company3} alt="" />
                        <img src={assets.company4} alt="" />
                        <img src={assets.company5} alt="" />
                        <img src={assets.company6} alt="" />
                    </div>
                    <hr className='mt-12'/>
                </div>
            </div>

        </div>
    )
}

export default Hero