import React from 'react'
import infosyslogo from '../assets/InfosysLogo.jpg'
//import regameLabLogo from '../assets/RegameXRLabLogo.png'

function Experience() {
    return (
        <section id='experience'>
            <div className='text-[#232a41] max-w-[1000px] mx-auto p-4 justify-center w-full h-full grid grid-cols-1 pb-24'>
                <div><p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Work Experience</p></div>
                <div className='pt-8'>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                        {/* <li class="mb-10 ml-4">
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
                        </li> */}
                     <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2018 - July 2023</time>
                            <div className='flex flex-row pt-3'>
                                <div className='w-28 h-16 flex-none'>
                                    <img className='w-full h-full pr-1' src={infosyslogo} alt="Swift logo" />
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold text-[#070912]'>Infosys Ltd.</p>
                                    <p className='text-[#070912] italic pb-2'>Consultant - Software Development Engineer </p>
                                    <ul className='list-disc list-inside '>
                                        <li className='text-[#070912]'>Engineered high-performance SOAP APIs using Spring Boot and Hibernate for major telecom companies, reducing response time by 70% (400ms to 120ms) and enhancing system performance for millions of users</li>
                                        <li className='text-[#070912]'>Led a team of 3 in migrating monolithic architecture to microservices, implementing Apache Kafka for event-driven communication. Designed a scalable system that improved inter-service data flow by 55%, reduced overall system latency by 40%, and enabled processing of 100,000+ events per second. This architecture enhanced fault tolerance and allowed independent scaling of services, resulting in a 30% increase in system uptime</li>
                                        <li className='text-[#070912]'>Developed responsive user interfaces using ReactJS and Angular, integrating with RESTful APIs to support 100,000 additional daily active users and improve overall user experience </li>
                                        <li className='text-[#070912]'>Designed and implemented RESTful APIs using Java, SQL, and data-driven methodologies, reducing API latency by 35% and increasing throughput by 50%, supporting 100,000 additional daily active users</li>
                                        <li className='text-[#070912]'>Managed end-to-end development of multiple client projects using Agile (Kanban) methodologies, leveraging J2EE frameworks, Hibernate, and AJAX to reduce time-to-market by 25% compared to previous projects</li>
                                        <li className='text-[#070912]'>Implemented T est-Driven Development (TDD) practices in API development, achieving 95% code coverage with JUnit testsuites, significantly improving overall code quality and reliability while reducing API latency by 35% and increasing throughput by 50%</li>
                                        <li className='text-[#070912]'>Optimized data management for 100,000+ daily API calls in Oracle using PL/SQL scripts within a CI/CD pipeline, improving data processing time by 40% and enhancing analytic dashboard accuracy</li>
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