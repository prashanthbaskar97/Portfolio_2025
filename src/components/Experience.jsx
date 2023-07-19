import React from 'react'
import deloitteLogo from '../assets/DeloitteLogo.png'
import regameLabLogo from '../assets/RegameXRLabLogo.png'

function Experience() {
    return (
        <section id='experience'>
            <div className='text-[#232a41] max-w-[1000px] mx-auto p-4 justify-center w-full h-full grid grid-cols-1 pb-24'>
                <div><p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Work Experience</p></div>
                <div className='pt-8'>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 - Present</time>
                            <div className='flex flex-row pt-3'>
                                <div className='w-28 h-28 flex-none'>
                                    <img className='w-full h-full pr-1' src={regameLabLogo} alt="Swift logo" />
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold text-[#070912]'>ReGame-XR Lab, Bouve College of Health Sciences</p>
                                    <p className='text-[#070912] italic pb-2'>Research Assistant</p>
                                    <ul className='list-disc list-inside '>
                                        <li className='text-[#070912]'>Engineered an end-to-end pipeline for data upload, real-time data analytics processing, and a visualization dashboard</li>
                                        <li className='text-[#070912]'>Deployed the web application on Google Cloud (SaaS) using Google App Engine, Google Cloud Run and Firebase Authentication</li>
                                        <li className='text-[#070912]'>Built an eye tracking experiment using PsychoPy to prove hypothesis on formation of rhythm in human brain</li>
                                    </ul>
                                </div>
                            </div>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </li>

                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2018 - August 2022</time>
                            <div className='flex flex-row pt-3'>
                                <div className='w-28 h-16 flex-none'>
                                    <img className='w-full h-full pr-1' src={deloitteLogo} alt="Swift logo" />
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold text-[#070912]'>Deloitte USI</p>
                                    <p className='text-[#070912] italic pb-2'>Consultant - Software Development Engineer iOS</p>
                                    <ul className='list-disc list-inside '>
                                        <li className='text-[#070912]'>Developed Lilly Together [<a class='underline text-blue-600' href='https://apps.apple.com/us/app/lilly-together/id1596797862'>AppStore</a>] and Vega iOS mobile apps for Eli Lilly and Company, coordinating with a team of 15+ developers, based on client requirements and feedback.</li>
                                        <li className='text-[#070912]'>Emphasized SOLID principles and Swift Protocol Oriented Programming, achieving over 90% unit test coverage for critical modules.</li>
                                        <li className='text-[#070912]'>Led the development of a custom graph UI framework for handling large data sets efficiently, reducing bugs by 50%. </li>
                                        <li className='text-[#070912]'>Collaborated with cross-functional teams to build new features following an Agile methodology, conducting code reviews, testing, bug fixing, and incorporating client feedback.</li>
                                    </ul>
                                </div>
                            </div>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Experience