import React from 'react'
import discord from '../assets/logo.png'
import profile from '../assets/profile.png'

const Sidebar = () => {
  return (
    <div className='flex'>
        <nav className='w-[70px] h-screen bg-[#1E1E23] flex flex-col items-center pt-3'>
            <ul className=''>
                <li className='flex items-center justify-center'>
                    <div className='bg-[#2B2C30] rounded-full hover:cursor-pointer hover:bg-blue-600 flex items-center justify-center w-12 h-12 hover:rounded-2xl transition-all duration-75 ease-in-out'>
                        <img className='h-[23px]' src={discord} alt="logo"/>
                    </div>
                </li>
                <li>
                    <div className='mt-2 flex justify-center items-center'>
                        <hr className='border-[#2B2C30] border-b-2 w-8'/>
                    </div>
                </li>
                <li className='mt-2'>
                    <div className='hover:cursor-pointer flex items-center justify-center w-12 h-12'>
                        <img className='rounded-full h-[47px]' src={profile} alt="logo"/>
                    </div>
                </li>
            </ul>
        </nav>
        <div className='w-[248px] bg-[#2B2C30]'>
            <div className='bg-[#2B2C30] shadow-md h-[47px] flex items-center'>
                <h1 className='text-white font-semibold font-mono ml-5'>Ankit Roy</h1>
            </div>

            {/* Education */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <h1 className='text-white text-md font-semibold font-mono ml-1 hover:text-gray-200'>Education</h1>
                </div>
                {/* PostGraduate */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Post Graduate</h1>
                        </div>
                </div>
                {/* UnderGraduate */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Under Graduate</h1>
                        </div>
                </div>
                {/* Higher Secondary */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Higher Secondary</h1>
                        </div>
                </div>
                {/* Secondary */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Secondary</h1>
                        </div>
                </div>
            </div>

            {/* Achievements */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <h1 className='text-white text-md font-semibold font-mono ml-1 hover:text-gray-200'>Achievements</h1>
                </div>
                {/* PostGraduate */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Post Graduate</h1>
                        </div>
                </div>
                {/* UnderGraduate */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Under Graduate</h1>
                        </div>
                </div>
                {/* Higher Secondary */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Higher Secondary</h1>
                        </div>
                </div>
                {/* Secondary */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Secondary</h1>
                        </div>
                </div>
            </div>

            {/* Experience */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <h1 className='text-white text-md font-semibold font-mono ml-1 hover:text-gray-200'>Achievements</h1>
                </div>
                {/* LTIMindtree */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>LTIMindtree</h1>
                        </div>
                </div>
                {/* Wipro Limited */}
                <div className='w-[230px] hover:bg-gray-400 rounded-md px-1 py-1 mt-2 transition duration-300'>
                    <div className='flex flex-row ml-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-white text-xs font-semibold cursor-pointer'>Wipro Limited</h1>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar