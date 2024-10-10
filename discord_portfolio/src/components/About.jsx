import React from 'react'
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div className='bg-[#303238] h-screen'>
        <div className='bg-[#303238] h-[47px] shadow-md flex items-center'>
            <div className='flex flex-row ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#81848F" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>
                <h1 className='text-white text-sm font-semibold font-mono ml-2'>About</h1>
            </div>
        </div>
        <div className='ml-14 mt-14'>
              <img className='rounded-full h-[150px]' src={profile} alt="logo"/>
        </div>
        <div className='ml-14 mt-8'>
          <h1 className='text-xl font-mono font-bold text-white'>Hey there! My name is <strong className='text-blue-500'>Ankit Roy</strong></h1>
        </div>

        <div className='ml-14 mt-2'>
          <h1 className='text-white'>I have completed my MCA degree and currently working as a Software Engineer at LTIMindtree.</h1>
        </div>

        <div className='bg-[#2B2C30] w-[530px] h-[250px] rounded-md ml-14 mt-6'>
          <div className='absolute ml-4 mt-6'>
            <h1 className='text-white w-[500px]'>As a full-stack web developer , I bring a unique blend of technical expertise and creativity to my work. I am passionate about crafting engaging and user-friendly web experiences while creating visually stunning designs. With a strong foundation in coding and design principles, I strive to deliver high-quality solutions that meet client's needs and exceed their expectations. I am a proactive and driven individual, always seeking opportunities to expand my knowledge and skill set.</h1>
          </div>
        </div>
    </div>
  )
}

export default About