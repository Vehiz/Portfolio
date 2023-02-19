import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/**container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Victor Akhigbemidu</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full stack Developer</h2> 
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              with capabilities in handling all aspects of a project, from the design and user interface 
              to the server-side logic and database management. Also, ensure the maintainance, efficiency
              and scalability of web applications. In addition to my technical skills, i also possess
              non-technical skills which includes, problem solving, excellent communication and staying
              up-to-date in latests trends in web development.
               
            </p>
            <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600'>View Work 
            <span className='hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Home