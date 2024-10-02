import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate,setRotate]=useState(0);

    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseX= e.clientX
            let mouseY= e.clientY

            let deltaX= mouseX-window.innerWidth/2;
            let deltaY= mouseY-window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
            setRotate(angle-180)
        })
    })

  return (
    <div className='w-full h-screen overflow-hidden -mt-5 '>
        <div data-scroll data-scroll-speed="-.7" className='relative  w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        
            <div className=' flex gap-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>

            <div className=' flex justify-center items-center w-[15vw] h-[15vw] bg-white rounded-full'>
                    <div className='relative w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                    <h1 className='text-white text-xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</h1>
                        <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                            <div className='w-5 h-5  bg-white rounded-full'></div>
                        </div>
                        
                    </div>
                </div>

                <div className=' flex justify-center items-center w-[15vw] h-[15vw] bg-white rounded-full'>
                    <div className='relative w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                    <h1 className='text-white text-xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</h1>
                        <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                            <div className='w-5 h-5  bg-white rounded-full'></div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Eyes