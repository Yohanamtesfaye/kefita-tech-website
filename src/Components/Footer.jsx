import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='bg-cust lg:px-36  bg-[#352D68] text-white flex pb-8 mt-'>
        <div className='pt-14 mx-8 text-2xl font-bold '><p>KEFITA</p></div>
        <div className='flex pt-14'>
          <div className='lg:mx-10 mx-3'>
            <p className='pb-4 font-bold'>Kefita</p>
            <div className='flex flex-col text-sm'>
              <Link to='/' className='py-1'>Home</Link>
              <Link to='/aboutus' className='py-1' >About Us</Link>
              <Link to='/blog' className='py-1' >blog</Link>
              <Link to='/' className='py-1' >Contact Us</Link>
            </div>
          </div>
          <div className='mx-10'>
          <p className='pb-4 font-bold'>Contact</p>
            <div className='flex flex-col text-sm'>
              <a href='' className='py-1' >Email</a>
              <a href='' className='py-1' >LinkedIn</a>
              <a href='' className='py-1' >Telegram</a>
              <a href='' className='py-1' >Twitter</a>
            </div>
          </div>
        </div>
        <div className='pt-14 ml-44 lg:block hidden'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.876507040832!2d38.76361121415543!3d8.877715893977828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b891a4ebc58eb%3A0x6ef12b8e4512349b!2sCabey%20Building%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1690727069155!5m2!1sen!2sus"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer