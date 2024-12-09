import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [active, setActive] = useState(false)
    const [activee, setActivee] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    return (
        <div className='sm:px-[5vw] md:px-[7vw] flex items-center justify-between py-4 border-b px-0 gap-8'>
            <div className='flex items-center gap-4 relative'>
                <div className='flex items-center gap-2 cursor-pointer '>
                    <img src={assets.logo} className='w-10 h-10' alt="" />
                    <h1 className='text-2xl font-bold me-6'>Untitled UI</h1>
                </div>
                <div className='hidden sm:flex sm:items-center sm:justify-between sm:gap-4 md:gap-4 lg:gap-12 text-[#475467] font-semibold sm:block'>
                    <h1 className='cursor-pointer'>Home</h1>
                    <div className='flex gap-2 items-center cursor-pointer ' onClick={() => setIsProductsOpen(!isProductsOpen)}>
                        <h1>Products </h1>
                        <svg className={`${isProductsOpen?'rotate-180':'rotate-0'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div  className={`${isProductsOpen? "block" : "hidden"} absolute top-12 left-0 bg-white shadow-lg rounded-xl min-w-[640px]`}>
                            <div className='flex gap-4 '>
                                <div className='flex flex-col items-center gap-6 px-6 py-6'>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.book_img} className='w-10' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Blog</h1>
                                            <p className='text-[#475467] font-normal'>The latest industry news, updates and info.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.star_img} className='w-12' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Customer stories</h1>
                                            <p className='text-[#475467] font-normal'>Learn how our customers are making big changes.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.video_img} className='w-12' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Video tutorials</h1>
                                            <p className='text-[#475467] font-normal'>Get up and running on new features and techniques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#F9FAFB] px-6 py-6'>
                                    <img src={assets.girl_img} alt="" />
                                    <h1 className='text-lg font-semibold text-black my-2'>We've just released an update!</h1>
                                    <p className='text-[#475467] font-normal text-[16px]'>Checkout the all new dashboard view. Pages now load faster.</p>
                                    <div className='flex gap-4 my-2'>
                                        <p className='text-[#667085] font-bold'>Dismiss</p>
                                        <p className='text-[#6941C6] font-bold'>Changelog</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'  onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
                        <h1>Resources </h1>
                        <svg className={`${isResourcesOpen?'rotate-180':'rotate-0'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className={`${isResourcesOpen ? "block" : "hidden"} absolute top-12 left-[150px] bg-white shadow-lg rounded-xl min-w-[640px]`}>
                            <div className='flex gap-4 '>
                                <div className='flex flex-col items-center gap-6 px-6 py-6'>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.book_img} className='w-10' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Blog</h1>
                                            <p className='text-[#475467] font-normal'>The latest industry news, updates and info.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.star_img} className='w-12' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Customer stories</h1>
                                            <p className='text-[#475467] font-normal'>Learn how our customers are making big changes.</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img src={assets.video_img} className='w-12' alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold text-black'>Video tutorials</h1>
                                            <p className='text-[#475467] font-normal'>Get up and running on new features and techniques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#F9FAFB] px-6 py-6'>
                                    <img src={assets.girl_img} alt="" />
                                    <h1 className='text-lg font-semibold text-black my-2'>We've just released an update!</h1>
                                    <p className='text-[#475467] font-normal text-[16px]'>Checkout the all new dashboard view. Pages now load faster.</p>
                                    <div className='flex gap-4 my-2'>
                                        <p className='text-[#667085] font-bold'>Dismiss</p>
                                        <p className='text-[#6941C6] font-bold'>Changelog</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className='cursor-pointer'>Pricing</h1>
                </div>
            </div>
            <div>
                <img src="./src/assets/profile.png" alt="" className='w-10 h-10 rounded-full cursor-pointer sm:block hidden' />
            </div>
            <svg onClick={() => setMenu(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='block sm:hidden'>
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            {/* navigation menu for small screen */}
            <div className={`absolute top-0 right-0  overflow-hidden min-h-[550px] bg-white shadow-lg transition-all ${menu ? 'w-full ' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div className='flex justify-between py-2 pl-6'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src={assets.logo} className='w-10 h-10' alt="" />
                            <h1 className='text-2xl font-bold me-6'>Untitled UI</h1>
                        </div>
                        <p onClick={() => setMenu(false)} className='text-4xl py-2 pl-6 me-4'>&times;</p>
                    </div>
                    <h1 className="py-2 pl-6 font-semibold ">Home</h1>
                    <div onClick={() => setActive(!active)} className='py-2 pl-6 flex gap-2 items-center justify-between cursor-pointer font-semibold'>
                        <h1>Products </h1>
                        <svg className={`me-4 ${active ? 'rotate-180' : 'rotate-0'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div onClick={() => setActivee(!activee)} className='py-2 pl-6 flex gap-2 items-center justify-between cursor-pointer font-semibold'>
                        <h1>Resources</h1>
                        <svg className={`me-4 ${activee ? 'rotate-180' : 'rotate-0'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h1 className="py-2 pl-6 font-semibold">Pricing</h1>
                </div>
                <hr />
                <div className='flex gap-28 font-semibold py-2 px-6 text-[#667085]'>
                    <div className='flex flex-col gap-2'>
                        <p>About us</p>
                        <p>Press</p>
                        <p>Careers</p>
                        <p>Legal</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Support</p>
                        <p>Contact</p>
                        <p>Sitemap</p>
                        <p>Cokkie settings</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center  gap-4 my-6 mx-4 font-semibold'>
                    <button className='bg-[#7F56D9] text-white px-4 py-2 rounded-md'>Sign up</button>
                    <button className='border border-[#D0D5DD] text-[#344054] px-4 py-2 rounded-md'>Log in</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar