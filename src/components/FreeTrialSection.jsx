import React from 'react'

const FreeTrialSection = () => {
    return (
        <div className='bg-[#F9FAFB] py-20 mx-[-16px]'>
            <h1 className='text-4xl font-semibold text-center'>Start your free trial</h1>
            <p className='text-center my-4 text-[20px]'>Join over 4,000+ startups already growing with Untitled.</p>
            <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center gap-4 my-6 mx-4'>
                <button className='border bg-white border-[#D0D5DD] text-[#344054] px-6 py-4 font-semibold  rounded-md'>Learn more</button>
                <button className='bg-[#7F56D9] text-white px-6 py-4 font-semibold rounded-md'>Get started</button>
            </div>
        </div>
    )
}

export default FreeTrialSection