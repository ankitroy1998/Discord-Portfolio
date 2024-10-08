import React from 'react'
import { Link } from 'react-router-dom';
import discord from '../assets/logo.png'
import profile from '../assets/profile.png'

const Sidebar = () => {
  return (
    <div className='flex'>
        <nav className='w-[70px] h-screen bg-[#1E1E23] flex flex-col items-center pt-3'>
            <ul className=''>
                <li className='flex items-center justify-center'>
                    <Link to="/" className='bg-[#2B2C30] rounded-full hover:cursor-pointer hover:bg-blue-600 flex items-center justify-center w-12 h-12 hover:rounded-2xl transition-all duration-75 ease-in-out'>
                        <img className='h-[23px]' src={discord} alt="logo"/>
                    </Link>
                </li>
                <li>
                    <div className='mt-2 flex justify-center items-center'>
                        <hr className='border-[#2B2C30] border-b-2 w-8'/>
                    </div>
                </li>
                <li className='mt-2'>
                    <Link to="/about" className='hover:cursor-pointer flex items-center justify-center w-12 h-12 relative group'>
                        <img className='rounded-full h-[47px]' src={profile} alt="logo"/>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='w-[248px] bg-[#2B2C30]'>
            <div className='bg-[#2B2C30] shadow-md h-[47px] flex items-center'>
                <h1 className='text-white font-semibold font-mono ml-5 select-none'>Ankit Roy</h1>
            </div>

            {/* Education */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <h1 className='text-[#81848F] text-md font-semibold font-mono ml-1 hover:text-gray-200 select-none'>Education</h1>
                </div>
                {/* PostGraduate */}
                <Link to="/postgraduate" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Post Graduate</h1>
                        </div>
                </Link>
                {/* UnderGraduate */}
                <Link to="/undergraduate" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Under Graduate</h1>
                        </div>
                </Link>
                {/* Higher Secondary */}
                <Link to="/highersecondary" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Higher Secondary</h1>
                        </div>
                </Link>
                {/* Secondary */}
                <Link to="/secondary" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Secondary</h1>
                        </div>
                </Link>
            </div>

            {/* Experience */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    <h1 className='text-[#81848F] text-md font-semibold font-mono ml-1 hover:text-gray-200 select-none'>Experience</h1>
                </div>
                {/* LTIMindtree */}
                <Link to="/ltim" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>LTIMindtree</h1>
                        </div>
                </Link>
                {/* Wipro Limited */}
                <Link to="/wipro" className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Wipro Limited</h1>
                        </div>
                </Link>
            </div>

            {/* Tech Stack */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <h1 className='text-[#81848F] text-md font-semibold font-mono ml-1 hover:text-gray-200 select-none'>Tech Stack</h1>
                </div>
                {/* FrontEnd */}
                <div className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Frontend</h1>
                        </div>
                </div>
                {/* Backend */}
                <div className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Backend</h1>
                        </div>
                </div>
                {/* Database */}
                <div className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Database</h1>
                        </div>
                </div>
                {/* Languages */}
                <div className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>Languages</h1>
                        </div>
                </div>
            </div>

            {/* Projects */}
            <div className='flex flex-col mt-5 ml-2'>
                <div className='flex flex-row cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <h1 className='text-[#81848F] text-md font-semibold font-mono ml-1 hover:text-gray-200 select-none'>Projects</h1>
                </div>
                {/* My Project */}
                <div className='w-[230px] hover:bg-[#404249] rounded-md py-2 mt-2 transition duration-300 cursor-pointer'>
                    <div className='flex flex-row ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81848F" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>
                        <h1 className='text-[#81848F] text-xs font-semibold select-none'>My Project</h1>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar