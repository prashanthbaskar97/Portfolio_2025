import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import hariImage from '../assets/HariAI.jpg'
import scrollGif from '../assets/Gifs/ScrollDown.gif'

const Home = () => {
    const [showScrollGif, setShowScrollGif] = useState(true);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.scrollY > 30 ? setShowScrollGif(false) : setShowScrollGif(true);
        };
        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, []);
    return (
            <div className='w-full h-screen bg-[#ffffff] items-center content-center lg:grid lg:grid-cols-3 gap-x-4 gap-y-1 pt-[80px] sm:pb-24'>
                {/* Hari Photo */}
                <div className='flex flex-auto content-center align-start justify-center'>
                    <img src={hariImage} alt='Profile image' className='w-120 lg:w-250 rounded-lg' />
                </div>
                {/* Container */}
                <div className='min-w-auto max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-1/2 lg:h-full col-span-2'>
                    <div>
                        <p className='text-pink-600'>Hello, my name is</p>
                        <h1 className='text-4xl lg:text-7xl font-bold text-[#232a41]'>Hariharan Sundaram</h1>
                        <TypeAnimation
                            sequence={[
                                "I'm a Backend Engineer.",
                                1000,
                                "I'm a Mobile Engineer.",
                                1000,
                                "I'm a Software Engineer.",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={1}
                            className='text-4xl sm:text-4xl font-bold text-[#232a41]'
                        />
                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                            I'm a Mobile and Backend Engineer who is passionate about tackling challenging problems that have a meaningful impact
                        </p>
                    </div>
                </div>
                {showScrollGif && (
                    <div className='fixed bottom-1 justify-items-center content-center z-50 p-4 w-full hidden lg:block'>
                        <img className='w-[120px] mx-auto' src={scrollGif} alt="" />
                    </div>
                )}
            </div>
    )
}

export default Home