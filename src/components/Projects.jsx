import React from 'react'
// import tspProject from '../assets/Projects/TravellingSalesman.png'
// import mapReduce from '../assets/Projects/MapReduce.png'
// import wifiSimulator from '../assets/Projects/WifiSimulator.png'
// import netflixClone from '../assets/Projects/NetflixClone.jpg'
// import jobsDatabase from '../assets/Projects/JobsDatabase.png'

const Projects = () => {
    return (
        <div className='w-full items-center content-center pt-[90px]'>
            <div className='text-[#232a41] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Atlas </div>
                                <p class="text-gray-700 text-base">
                                    Built a scalable REST and GraphQL API for assignment management using SpringBoot.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Boot</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Security</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">AWS</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pulumi</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git WorkFlow</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CI/CD</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/prashanthbaskar97">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Passion Hub</div>
                                <p class="text-gray-700 text-base">
                                    Built a responsive UI using React hooks,Redux and Material UI for a social media platform
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MERN</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NodeJS</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/prashanthbaskar97/Passion-Hub">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Eventful Andriod Application</div>
                                <p class="text-gray-700 text-base">
                                Built a cloud-based microservice with SpringBoot, implementing RESTfulk APIs for real-time event data retreiaval.Developed an
                                Android application to display events based on user preferences.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Andriod</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MVC</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/prashanthbaskar97">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                        </div>
                    </div>

                    {/* <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Jobs Bot and Database</div>
                                <p class="text-gray-700 text-base">
                                    A bot to scrape jobs data from Linkedin and Glassdoor, consolidate into a database and also perform analytics to generate insights.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Scrapy</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Beautiful Soup</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pandas</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/aiskunks/Jobs_Database/tree/main/Artificial_Intelligence">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/aiskunks/Jobs_Database/blob/main/Artificial_Intelligence/FinalProjectReport.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div> */}

                    {/* <div class="rounded overflow-hidden shadow-lg p-2">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Travelling Salesman Problem</div>
                                <p class="text-gray-700 text-base">
                                    A solution to Travelling Salesman Problem using Christofides, 2-OPT optimization and Genetic algorithm.
                                </p>
                            </div>

                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Algorithm</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Christofides</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DataStructures</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/Abhinav-Choudhary1106/TravellingSalesman">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/Abhinav-Choudhary1106/TravellingSalesman/blob/main/INFO%206205%20Spring%202023%20Project.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div> */}

                    {/* <div class="rounded overflow-hidden shadow-lg p-2 grid grid-cols-1 content-between">
                        <div>
                            <div class="px-6 pt-4 pb-1">
                                <div class="font-bold text-xl mb-2">Radiation</div>
                                <p class="text-gray-700 text-base">
                                    An application built with Java and Swing to simulate wifi signal strength at different locations, given a floor plan.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-1">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java Swing</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JNI</span>
                            </div>
                        </div>
                        <div className='justify-center flex flex-row'>
                            <a href="https://github.com/NEU-MS-Projects/wifi-simulator-csye6200">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Github</button>
                            </a>
                            <a href="https://github.com/NEU-MS-Projects/wifi-simulator-csye6200/blob/main/RadiationProject.pdf">
                                <button className='text-center rounded-md px-3 py-1 m-2 bg-[#0a192f] text-white text-md hover:scale-[1.07] duration-500'>Project</button>
                            </a>
                        </div>
                    </div>         */}

                </div>
            </div>
        </div>
    )
}

export default Projects