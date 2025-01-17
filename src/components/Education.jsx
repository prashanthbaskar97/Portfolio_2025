import React from 'react'
import amritaLogo from '../assets/Amrita_Logo.png'
import northeasternLogo from '../assets/NortheasternLogo.png'

function Education() {
    return (

        <div className='text-[#232a41] max-w-[1000px] mx-auto p-4 justify-center w-full h-full grid grid-cols-1 pb-24'>
            <div><p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Education</p></div>
            <div className='pt-8'>
                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-6 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023 - May 2025</time>
                        <div className='flex flex-row'>
                            <div className='flex flex-row pt-3'>
                                <div className='w-24 pr-4 flex-none'>
                                    <img className='aspect-auto' src={northeasternLogo} alt="Swift logo" />
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold text-[#070912]'>Northeastern University</p>
                                    <p className='font-italics text-[#070912]'>Master of Science in Information Systems</p>
                                </div>
                            </div>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </div>
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2014 - July 2018</time>
                        <div className='flex flex-row'>
                            <div className='flex flex-row pt-3'>
                                <div className='w-24 pr-4 flex-none'>
                                    <img className='aspect-auto' src={amritaLogo} alt="Swift logo" />
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold text-[#070912]'>Amrita Vishwa Vidyapeetham</p>
                                    <p className='font-italics text-[#070912]'>Bachelor of Technology in Computer Science Engineering</p>
                                </div>
                            </div>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </div>
                    </li>
                </ol>
            </div>
        </div>
   
    )
}

export default Education