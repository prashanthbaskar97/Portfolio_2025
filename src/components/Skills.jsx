import React from 'react'
import swiftLogo from '../assets/Skills/SwiftLogo.png'
import javaLogo from '../assets/Skills/JavaLogo.png'
import springLogo from '../assets/Skills/SpringLogo.png'
import pythonLogo from '../assets/Skills/PythonLogo.png'
import gcpLogo from '../assets/Skills/GCPLogo.png'
import mySQLLogo from '../assets/Skills/MySQLLogo.png'
import reactLogo from '../assets/Skills/ReactLogo.png'
import mongoDBLogo from '../assets/Skills/MongoDBLogo.png'
import gitLogo from '../assets/Skills/GithubLogo.png'

function Skills() {
    return (
        <div id='skills' className='text-[#232a41] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Skills</p>
                <p className='py-4'>I have practical knowledge in using the following technologies and platforms</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-0 text-center py-8 justify-items-center'>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <div>
                        <img className='w-20 mx-auto pb-2' src={swiftLogo} alt="Swift logo" />
                        <p>Swift</p>
                    </div>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={javaLogo} alt="Java logo" />
                    <p>Java</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={springLogo} alt="Spring logo" />
                    <p>Spring</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={pythonLogo} alt="Python logo" />
                    <p>Python</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={gcpLogo} alt="GCP logo" />
                    <p>Google Cloud</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={mySQLLogo} alt="MySQL logo" />
                    <p>MySQL</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={reactLogo} alt="React logo" />
                    <p>React JS</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-40 mx-auto pb-2' src={mongoDBLogo} alt="Mongo DB logo" />
                    <p>MongoDB</p>
                </div>
                <div className='shadow-lg shadow-gray-300 hover:scale-110 duration-500 rounded-md py-3 px-6 border-1 w-40'>
                    <img className='w-20 mx-auto pb-2' src={gitLogo} alt="Github logo" />
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}

export default Skills