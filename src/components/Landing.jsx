import { motion } from 'framer-motion'
import React from 'react'

const Landing = () => {


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-40 px-16'>
            {["We Create","eye-opening","presentations"].map((item,index)=>{
                return <div className='masker  font-["Roboto"] '>
                    <div className='w-fit flex items-end overflow-hidden '>
                        {index ===1 &&(
                            <motion.div  initial={{ width:0 }} animate={{ width: "9vw" }} transition={{ease:[0.76,0,0.24,1],duration:1.2}} className='mr-5 w-[9vw]  pt-2 relative '>
                             <img className='rounded-md h-[6vw]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>
                    )}
                    <h1 key={index} className='text-[7vw] uppercase leading-[6vw] tracking-tighter font-semibold'>{item}</h1>
                    </div>
                
            </div>
            })}
            
        </div>

        <div className='border-t-2 border-zinc-600 mt-32 flex justify-between items-center py-4 px-14'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p  key={index} className='text-md font-light tracking-tight leading-none '>
                    {item}
                </p>
            })}

            <div className='start flex items-center gap-2   hover:cursor-pointer'>
                <div className='px-4 py-2 border-2 border-zinc-400  rounded-full  uppercase text-sm hover:bg-white hover:text-zinc-900'>
                    start the project
                </div>
                <div className=' h-10 w-10 p-1 border-2 flex justify-center  items-center  border-zinc-400  rounded-full hover:bg-white hover:text-zinc-900 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </div>
             </div>
        </div>

       
    </div>
  )
}

export default Landing