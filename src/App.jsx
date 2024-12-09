import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FaqSection from './components/FaqSection'
import Blogs from './components/Blogs'
import FreeTrialSection from './components/FreeTrialSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app px-4'>
      <Navbar/>
      <Hero/>
      <Features/>
      <FaqSection/>
      <Blogs/>
      <FreeTrialSection/>
      <Footer/>
    </div>
  )
}

export default App