import React from 'react'
import { assets } from '../assets/assets'

const Blogs = () => {
    return (
        <div className='sm:px-[5vw] md:px-[7vw]'>
            <div className='flex items-start gap-4 justify-between'>
                <div>
                    <p className='text-[#6941C6] font-semibold'>Our blog</p>
                    <h1 className='font-semibold text-4xl'>Latest blog posts</h1>
                    <p className='text-[#475467] text-[18px] mt-4'>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div className='hidden lg:block'>
                    <button className='bg-[#7F56D9] text-white rounded-lg py-4 px-6 font-semibold text-lg my-4 '>View all posts</button>
                </div>
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-3 gap-8 my-12'>
                <div>
                    <img src={assets.blog1} className='w-full' alt="" />
                    <p className='text-[#6941C6] font-semibold my-2'>Design</p>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-2xl '>UX review presentations</h1>
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className='text-[#475467] text-[16px] my-2 md:min-h-[120px] lg:min-h-fit'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <div className='flex gap-4 my-4'>
                        <img src={assets.profile} className='w-12 rounded-full' alt="" />
                        <div>
                            <h1 className='font-semibold'>Olivia Rhye</h1>
                            <p className='text-[#475467]'>20 Jan 2024</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={assets.blog2} className='w-full' alt="" />
                    <p className='text-[#6941C6] font-semibold my-2'>Product</p>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-2xl'>Migrating to Linear 101</h1>
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className='text-[#475467] text-[16px] my-2 md:min-h-[120px] lg:min-h-fit'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                    <div className='flex gap-4  my-4'>
                        <img src={assets.profile_2} className='w-12 rounded-full' alt="" />
                        <div>
                            <h1 className='font-semibold'>Phoenix baker</h1>
                            <p className='text-[#475467]'>19 Jan 2024</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={assets.blog3} className='w-full' alt="" />
                    <p className='text-[#6941C6] font-semibold my-2'>Software Engineering</p>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-2xl'>Building your API stack</h1>
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className='text-[#475467] text-[16px] my-2 md:min-h-[120px] lg:min-h-fit'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                    <div className='flex gap-4  my-4'>
                        <img src={assets.profile_3} className='w-12 rounded-full' alt="" />
                        <div>
                            <h1 className='font-semibold'>Lana Steiner</h1>
                            <p className='text-[#475467]'>18 Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blogs