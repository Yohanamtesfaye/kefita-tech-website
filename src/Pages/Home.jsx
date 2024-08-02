import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import intro from '../assets/Vision.png';
import aboutus from '../assets/Aboutus.png';
import { Link } from 'react-router-dom';
import div from "../assets/div.jpg";
import it from "../assets/consult.webp";
import data from "../assets/data.jpg";
import electronic from "../assets/electronic.jpg";
import gps from "../assets/gps.jpg";
import hw from "../assets/hw.jpg";
import dal from "../assets/dal.png";
import str from "../assets/str.png";
import mt from "../assets/mt.png";
import kz from "../assets/kz.png";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-in-enter');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const profiles = [
    {
      name: 'OLIVIA COLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper sollicitudin mi in malesuada felis malesuada vel.',
      imgSrc: it
    },
    {
      name: 'OLIVIA COLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper sollicitudin mi in malesuada felis malesuada vel.',
      imgSrc: it
    },
    {
      name: 'OLIVIA COLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper sollicitudin mi in malesuada felis malesuada vel.',
      imgSrc: it
    }
  ];

  const ProfileCard = ({ name, description, imgSrc }) => (
    <div className="bg-[#313675] text-center rounded-lg p-6 m-4 max-md:mt-20 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
        <img src={imgSrc} alt={name} className="rounded-full w-36 h-36 border-4 border-blue-700" />
      </div>
      <div className="mt-8 pt-12">
        <h3 className="text-white text-lg font-semibold font-outfit">{name}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      {/* intro */}
      <div ref={el => fadeRefs.current[0] = el} className="lg:px-32 max-md:px-10 text-white lg:flex fade-in-enter">
        <div>
          <p className='lg:text-8xl font-extrabold  lg:mt-32 max-md:text-3xl max-md:mt-7 font-outfit'>Grow With Tech</p>
          <p className='lg:mt-5 max-md:mt-5 text-lg max-md:text-md'>The perfect spot to expand and advance your business</p>
          <div className='flex mt-3'>
            <div className='hover:border bg-[#ED2A32] text-white py-2 lg:px-10 max-md:px-3 font-bold rounded-xl hover:border-[#ED2A32] hover:bg-[#2358A8] hover:text-[#ED2A32]'>
              <Link to='/aboutus'>LEARN MORE</Link>
            </div>
            <div className='border ml-5 hover:bg-[#ED2A32] hover:text-white py-2 lg:px-10 max-md:px-3 font-bold rounded-xl border-[#ED2A32] bg-[#2358A8] text-white'>
              <Link to='/contactus'>CONTACT US</Link>
            </div>
          </div>
        </div>
        <div className='lg:mr-20 lg:mt-16 max-md:mt-10 lg:w-[500px] '>
          <img src={intro} alt="" />
        </div>
      </div>
      {/* what we do section */}
      <div ref={el => fadeRefs.current[1] = el} className="lg:flex mb-12 lg:px-32 fade-in-enter">
        <div className='lg:w-[5700px] lg:mt-10'>
          <img src={aboutus} alt="" />
        </div>
        <div className='text-white mx-4'>
          <p className='lg:mt-32 mb-3 text-4xl font-bold max-md:mt-5 font-outfit'>Who We Are</p>
          <p className='mb-5'>
            Kefita Technology PLC in Addis Ababa, Ethiopia, is your go-to partner for software development, website services, mobile applications, 
            and IT consultancy. We specialize in making businesses more efficient and competitive through the rapid deployment of emerging technologies.
            Our clients range from small startups to large enterprises, ensuring tailored solutions for every need. Whether you require custom software,
            IT support, or advanced tech integration, we can help. Serving the local community and beyond, our team of highly skilled professionals is
            dedicated to delivering top-notch technology solutions.
          </p>
          <Link className='hover:border bg-[#ED2A32] text-white py-2 lg:px-10 max-md:px-7 font-bold rounded-xl hover:border-[#ED2A32] hover:bg-[#2358A8] hover:text-[#ED2A32] my-10' to='/aboutus'>LEARN MORE</Link>
        </div>
      </div>
      {/* our services */}
      <div ref={el => fadeRefs.current[2] = el} className="bg-[#5873C1] rounded-lg px-4 pt-5 fade-in-enter">
        <p className='text-[#329BC4] font-bold text-center text-xl font-outfit'>OUR SEVICES</p>
        <p className='text-white text-center mt-2 text-2xl font-bold font-outfit'>Unlock The Full Potential of Your Business</p>
        <div className='mx-4 lg:mx-32 lg:mt-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white rounded-lg mx-4 sm:mx-0'>
              <div className='py-4 px-4 mb-1'>
                <img src={div} className="w-full h-auto" alt="Software Development" />
              </div>
              <div className='px-4'>
                <h1 className='text-red-600 font-bold pb-1 text-lg'>Software Development</h1>
                <p className='text-customBlue5 font-medium mb-3'>Custom software development services tailored to meet specific business needs.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg mx-4 sm:mx-0'>
              <div className='py-4 px-4 mb-1'>
                <img src={it} className="w-full h-auto" alt="IT Consultancy" />
              </div>
              <div className='px-4'>
                <h1 className='text-red-600 font-bold pb-1 text-lg'>IT Consultancy</h1>
                <p className='text-customBlue5 font-medium mb-3'>Expert IT consultancy services to optimize business processes and technology use.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg mx-4 sm:mx-0'>
              <div className='py-4 px-4 mb-1'>
                <img src={gps} className="w-full h-auto" alt="GPS and Tracking Solutions" />
              </div>
              <div className='px-4'>
                <h1 className='text-red-600 font-bold pb-1 text-lg'>GPS and Tracking Solutions</h1>
                <p className='text-customBlue5 font-medium mb-3'>Providing GPS and tracking solutions for efficient fleet and asset management.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            {!showMore && (<button className='bg-red-600 text-white px-4 py-2 rounded-lg my-8' onClick={() => setShowMore(!showMore)}> Show More</button>)}
          </div>
          {showMore && (
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-32 mt-12'>
                <div className='bg-white rounded-lg mx-4 sm:mx-0'>
                  <div className='py-4 px-4 mb-1'>
                    <img src={data} className="w-full h-auto" alt="Data Research and Analysis" />
                  </div>
                  <div className='px-4'>
                    <h1 className='text-red-600 font-bold pb-1 text-lg'>Data Research and Analysis</h1>
                    <p className='text-customBlue5 font-medium mb-3'>Conducting data research, analysis, and consultancy for organizations.</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg mx-4 sm:mx-0'>
                  <div className='py-4 px-4 mb-1'>
                    <img src={electronic} className="w-full h-auto" alt="Electronics Trade & Network Cabling" />
                  </div>
                  <div className='px-4'>
                    <h1 className='text-red-600 font-bold pb-1 text-lg'>Electronics Trade & Network Cabling</h1>
                    <p className='text-customBlue5 font-medium mb-3'>The company engages in the trade of electronics and electrical goods, focusing on network cabling contract work to ensure reliable and efficient connectivity.</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg mx-4 sm:mx-0'>
                  <div className='py-4 px-4 mb-1'>
                    <img src={hw} className="w-full h-auto" alt="Computer Hardware Maintenance and Upgrades" />
                  </div>
                  <div className='px-4'>
                    <h1 className='text-red-600 font-bold pb-1 text-lg'>Computer Hardware Maintenance and Upgrades</h1>
                    <p className='text-customBlue5 font-medium mb-3'>Services for maintaining and upgrading computer hardware.</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='bg-red-600 text-white px-4 py-2 rounded-lg my-8'onClick={() => setShowMore(!showMore)}>Show Less </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* testimonials */}
      <div ref={el => fadeRefs.current[3] = el} className="fade-in-enter">
        <p className='text-[#32C48F] my-8 text-center '>TESTIMONIALS</p>
        <h1 className='text-3xl font-outfit text-center mt-5 text-white'>Read What Others <br /> Have to Say</h1>
        <div className="lg:flex hidden sm:block max-md:mt-20 justify-center lg:mt-16 lg:px-32">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
        <div className="block lg:hidden">
          <Slider {...settings}>
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </Slider>
        </div>
      </div>
      {/* Partnerships */}
      <div ref={el => fadeRefs.current[4] = el} className='lg:mx-36 lg:my-10 max-md:my-5 lg:p-2 fade-in-enter'>
        <p className='text-white font-outfit font-bold mb-8'>PARTNERSHIP</p>
        <div className='lg:bg-[#C4C4C4] lg:flex p-2'>
          <div className='ml-5'>
            <img src={dal} className='w-20 h-20 inline-block' alt="" />
            <p className='text-white text-2xl font-bold mt-5 mx-1 inline-block'>~Dalex~</p>
          </div>
          <div className='ml-5'>
            <img src={str} className='w-20 h-20 inline-block' alt="" />
            <p className='text-white text-2xl font-bold mt-5 mx-1 inline-block'>Star Technology</p>
          </div>
          <div className='mx-5'>
            <img src={mt} className='w-20 h-20 inline-block' alt="" />
            <p className='text-white text-2xl font-bold mt-5 mx-1 inline-block'>Melfan Tech</p>
          </div>
          <a href='https://www.kuraztech.com/' className='mx-5'>
            <img src={kz} className='w-20 h-20 inline-block' alt="" />
            <p className='text-white text-2xl font-bold mt-5 mx-1 inline-block'>Kuraz Tech</p>
          </a >
        </div>
      </div>
    </div>
  )
}

export default Home;
