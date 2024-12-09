import React, {useState } from 'react'
import { assets } from '../assets/assets'

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const faqData = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "Can i change my plan later?",
            answer: "Yes, you can change your plan when ever you want to."
        },
        {
            question: "What is your cancellation policy?",
            answer: "You can not cancel your plan after registered with the plan."
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "Yes,other info can be added like tax numbers or company addresses can be included in the billing invoice."
        },
        {
            question: "How does billing work?",
            answer: "Billing is processed monthly or annually based on your plan."
        },
        {
            question: "How do i change my account email?",
            answer: "You can change your account email in the profile section."
        },
    ]

    const toggleAccordian = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div className='my-20'>
            <h1 className='font-semibold  text-3xl sm:text-4xl text-center my-4'>Frequently asked questions</h1>
            <p className='text-[#475467] text-[18px] text-center'>Everything you need to know about the product and billing.</p>
            <div className='sm:mx-[20%] my-12'>
                {
                    faqData.map((item, index) => (
                        <div key={index} className='border-b py-4'>
                            <div className='flex justify-between cursor-pointer' onClick={() => toggleAccordian(index)}>
                                <h1 className='font-semibold text-[18px]' >{item.question}</h1>
                                <button onClick={() => toggleAccordian(index)}>
                                    {
                                        activeIndex === index ? (
                                            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                            <div className={`text-[#475467] overflow-hidden text-[16px] transition-all duration-300 ${activeIndex === index ? "max-h-screen" : "max-h-0"}`}>
                                <p >{item.answer}</p>
                            </div>    
                        </div>
                    ))
                }
            </div>
            <div className='bg-[#F9FAFB] flex flex-col items-center py-8 sm:mx-[5vw] md:mx-[7vw] rounded-2xl'>
                <img src={assets.group_img} className='w-28 my-4' alt="" />
                <h1 className='text-2xl font-semibold'>Still have questions?</h1>
                <p className='text-[#475467] text-[18px] mt-4 mx-4 text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team. </p>
                <button className='bg-[#7F56D9] text-white rounded-lg px-6 py-4 my-6 font-semibold text-lg'>Get in touch</button>
            </div>
        </div>
    )
}

export default FaqSection