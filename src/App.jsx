import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {

  const locomotiveScroll= new LocomotiveScroll();
  
  return (
    <div className='w-full h-screen  text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App