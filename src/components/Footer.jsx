import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='sm:px-[5vw] md:px-[7vw] flex flex-col '>
            <div className='grid grid-cols-2 md:grid-cols-6 my-16 gap-4 '>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Product</h1>
                    <div className='flex flex-col gap-2'>
                        <p>Overview</p>
                        <p>Features</p>
                        <div className='flex items-center gap-4'>
                            <p>Solutions </p>
                            <p className='px-4 text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] rounded-full text-[12px] font-semibold'>New</p>
                        </div>
                        <p>Tutorials</p>
                        <p>Pricing</p>
                        <p>Releases</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Company</h1>
                    <div className='flex flex-col gap-2'>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>News</p>
                        <p>Media kit</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Resources</h1>
                    <div className='flex flex-col gap-2'>
                        <p>Blog</p>
                        <p>Newsletter</p>
                        <p>Events</p>
                        <p>Help centre</p>
                        <p>Tutorials</p>
                        <p>Support</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Use cases</h1>
                    <div className='flex flex-col gap-2'>
                        <p>Startups</p>
                        <p>Enterprise</p>
                        <p>Government</p>
                        <p>SaaS centre</p>
                        <p>Marketplaces</p>
                        <p>Ecommerce</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Social</h1>
                    <div className='flex flex-col gap-2'>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Github</p>
                        <p>AngelList</p>
                        <p>Dribble</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#667085] font-semibold my-2'>Legal</h1>
                    <div className='flex flex-col gap-2'>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                        <p>Licenses</p>
                        <p>Settings</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between border-t py-4 gap-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.logo} className='w-10 h-10' alt="" />
                    <h1 className='text-2xl font-bold me-6'>Untitled UI</h1>
                </div>
                <div>
                    <p className='text-[#475467] text-[16px]'>&copy; 2024 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer