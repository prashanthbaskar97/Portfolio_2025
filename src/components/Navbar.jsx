import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/PB_Logo.jpg'
import { HiOutlineMail } from 'react-icons/hi'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const handleNavOpen = () => setNavOpen(!navOpen)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] z-10'>
      <img src={logo} alt="Logo Icon" style={{ width: '80px' }} />
      {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link to="/" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" smooth>
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleNavOpen}>
        {!navOpen ? <FaBars color='white' /> : <FaTimes color='white' />}
      </div>

      {/* Mobile menu */}
      <ul className={!navOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to="/" onClick={handleNavOpen} smooth>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="/projects" onClick={handleNavOpen} smooth>
            Projects
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/prashanth-baskar/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/prashanthbaskar97">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto: baskar.pr@northeastern.edu">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1P4Hbifb-pVObvbXTdgCTYPGk_bWKPplc/view">
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar