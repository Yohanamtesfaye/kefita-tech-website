import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/kefita_logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
      <div className=''>
        <AiOutlineMenu size={24} onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
        <div className='pl-4 sm:hidden'>
          <img src={logo} className='w-20 pt-3' alt="Kefita Logo" />
        </div>
        {
          nav ?
          <div className='max-md:mb-[300px]'>
            <div onClick={handleNav} className="fixed w-full flex flex-col justify-center items-center">
              <div className='shadow-xl p-4 bg-white rounded-2xl w-56 m-2 text-center'>
                <Link to='/' onClick={handleNav}><span className="hover:underline text-[#ED2A32] font-bold">Home</span></Link>
              </div>
              <div className='shadow-xl p-4 bg-white rounded-2xl w-56 m-2 text-center'>
                <Link to='/aboutus' onClick={handleNav}><span className="hover:underline text-[#ED2A32] font-bold">About Us</span></Link>
              </div>
              <div className='shadow-xl p-4 bg-white rounded-2xl w-56 m-2 text-center'>
                <Link to='/blog' onClick={handleNav}><span className="hover:underline text-[#ED2A32] font-bold">Blog</span></Link>
              </div>
              <div className='shadow-xl p-4 bg-white rounded-2xl w-56 m-2 text-center'>
                <Link to='/contactus' onClick={handleNav}><span className="hover:underline text-[#ED2A32] font-bold">Contact Us</span></Link>
              </div>
            </div>
          </div> : ''
        }
        <div className='hidden md:flex items-center justify-between w-full px-8 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-transparent'>
          <div>
            <img src={logo} className='w-20' alt="Kefita Logo" />
          </div>
          <div className='flex justify-center items-center space-x-8 text-white'>
            <div className='hover:underline hover:text-[#ED2A32] font-bold'><Link to='/'>Home</Link></div>
            <div className='hover:underline hover:text-[#ED2A32] font-bold'><Link to='/aboutus'>About Us</Link></div>
            <div className='hover:underline hover:text-[#ED2A32] font-bold'><Link to='/blog'>Blog</Link></div>
            <div className='bg-[#ED2A32] text-white py-2 px-4 font-bold rounded-md hover:bg-white hover:text-[#ED2A32] hover:border hover:border-[#ED2A32]'>
              <Link to='/contactus'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
