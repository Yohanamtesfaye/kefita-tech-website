import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/kefita_logo.jpg'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
      <div>
        <AiOutlineMenu size={24} onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
        <div className='pl-4 sm:hidden'>
          <img src={logo} className='w-20 pt-3' alt="" />
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
        <div className='hidden md:flex shadow-inner text-white justify-between rounded-2xl  py-5  px-36'>
          <div>
            <img src={logo} className='w-20 pt-3' alt="" />
          </div>
          <div className='flex justify-center items-center text-black  space-x-8'>
            <div className='hover:underline hover:text-[#ED2A32] font-bold p-0'><Link to='/'>Home</Link></div>
            <div className='hover:underline hover:text-[#ED2A32] font-bold p-0'><Link to='/aboutus'>About Us</Link></div>
            <div className='hover:underline hover:text-[rgb(237,42,50)] font-bold'><Link to='/blog'>Blog</Link></div>
            <div className='hover:border bg-[#ED2A32] text-white py-4 px-8 font-bold rounded-md hover:border-[#ED2A32] hover:bg-white hover:text-[#ED2A32]'>
              <Link to='/contactus'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
