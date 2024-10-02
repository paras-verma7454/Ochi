import React from 'react'

const Features = () => {
  return (
    <div className='w-full py-28   rounded-3xl'>
        <div className='w-full '>
            <h1 className='text-6xl px-16 -mb-6'>Featured projects</h1>
        </div>

        <div className='w-full border-t border-zinc-500 mt-20 px-16 py-8 '> 

          <div className='cards w-full flex gap-10 '>

            <div className='card w-1/2 h-[80vh]  rounded-xl'>

                <div className='flex gap-3 mb-8'>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>Cardboard Spaceship</h1>
                </div>

                <img className='rounded-xl w-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />

                <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>BRANDED TEMPLATE</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>SALES DECK</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>SOCIAL MEDIA TEMPLATES</button>
                </div>
                
            </div>

            <div className='card w-1/2 h-[80vh] '>

            <div className='flex gap-3 mb-8'>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>AH2 & Matt Horn</h1>
                </div>
              <img className='rounded-xl w-full' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />

              <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>PITCH DECK</button>
              </div>

            </div>
          </div>


          <div className='cards w-full flex gap-10 mt-52 '>
            
            <div className='card w-1/2 h-[80vh] rounded-xl'>

                <div className='flex gap-3 mb-8'>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>FYDE</h1>
                </div>

                <img className='rounded-xl w-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

                <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900 '>AUDIT</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900 '>COPY WRITING</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900 '>SALES DECK</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900 '>SLIDES DESIGN</button>
                </div>
                
            </div>

            <div className='card w-1/2 h-[80vh] '>

            <div className='flex gap-3 mb-8 '>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>VISE</h1>
                </div>
              <img className='rounded-xl w-full border-2  border-black' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />

              <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>AGENCY</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>COMPANY PRESENTATION</button>
              </div>

            </div>
          </div>
          
        
          <div className='cards w-full  gap-10 flex mt-52 '>
            
            <div className='card w-1/2 h-[80vh] rounded-xl'>

                <div className='flex gap-3 mb-8'>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>Trawa</h1>
                </div>

                <img className='rounded-xl w-full ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />

                <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>BRAND IDENTITY</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>DESIGN RESEARCH</button>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>INVESTOR DECK</button>
                </div>
                
            </div>

            <div className='card w-1/2 h-[80vh] '>

            <div className='flex gap-3 mb-8 '>
                  <div className='w-2 h-2 mt-2 bg-white rounded-full'></div>
                  <h1 className='uppercase  '>Premium Blend</h1>
                </div>
              <img className='rounded-xl w-full' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />

              <div className=' flex gap-2'>
                  <button className='bg-white text-black rounded-full px-3 py-1 mt-5 hover:border-2  hover:text-white hover:bg-zinc-900'>BRANDED TEMPLATE</button>
              </div>

            </div>
          </div>




        </div>

        <div className='flex justify-center items-center mt-48'>
          <button className=' flex justify-center items-center  tracking-tighter bg-white text-black text-md rounded-full px-6 py-3 gap-8'>VIEW ALL CASE STUDIES <div className='w-3 h-3 bg-black rounded-full'></div></button>
        </div>
    </div>
  )
}

export default Features