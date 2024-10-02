import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1" className='bg-zinc-900 '>
        <div className='w-full py-32 bg-[#004d43] rounded-t-3xl'>
            <div className='text border-t-2 border-b-2 border-zinc-400  flex whitespace-nowrap font-bold overflow-hidden '>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[18vw] leading-none -mb-4 -mt-12 pr-20 '>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[18vw] leading-none -mb-4 -mt-12 pr-20'>WE ARE OCHI</motion.h1>
                {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[20vw] leading-none -mb-5 -mt-14'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[20vw] leading-none -mb-5 -mt-14'>WE ARE OCHI</motion.h1> */}
            </div>
        </div>
    </div>
  )
}

export default Marquee