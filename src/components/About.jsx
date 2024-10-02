import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.18" className='w-full  py-24 -mt-5 pb-12 bg-[#CDEA68] rounded-3xl text-black'>
        <h1 className='text-6xl  font-["Roboto"] px-16'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline '>raise funds</span>, <span className='underline '>sell products</span> , <span className='underline '>explain complex ideas</span> , and <span className='underline '>hire great people</span> .</h1>

      <div className='w-full border-t border-zinc-500 mt-20 px-16 py-8 flex space-between'>
        <div className='w-1/2 '>
        <h1 className='text-6xl mb-8 '>Our approach:</h1>
        <button className=' flex px-6 py-4 bg-zinc-900 text-white  rounded-full gap-8'>READ MORE
          <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
        </button>
        </div>

        <div className='w-1/2  '>
          <img className=' rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About