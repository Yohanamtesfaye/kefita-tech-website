import React, { useState, useEffect, useRef } from 'react';
import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import div from "../assets/div.jpg";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import objectives from "../assets/objectives.png";
import it from "../assets/consult.webp";
import data from "../assets/data.jpg";
import electronic from "../assets/electronic.jpg";
import gps from "../assets/gps.jpg";
import hw from "../assets/hw.jpg";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          observer.disconnect(); // Stop observing after fade-in
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-r from-customBlue5 via-blue-500 to-customBlue6 font-outfit ${fadeIn ? 'fade-in' : ''}`}
    >
      {/* About Us image */}
      <div className='max-w-6x max-md:mt-5  lg:mx-auto lg:py-0'>
        <img src={people1} className="w-full h-auto" alt="People" />
      </div>
      <div className='p-6 lg:py-16 lg:pt-32 pt-20'>
        {/* What we are for small screen */}
        <div className='relative lg:flex text-white w-full max-w-6xl mx-auto px-4 mb-10'>
          <div className='w-full lg:w-1/2 mb-6'>
            <img src={people2} className="w-full h-auto object-cover rounded-2xl" alt="People" />
            <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4 lg:hidden overflow-y-auto rounded-xl'>
              <div className='text-xs sm:text-sm md:text-base font-bold py-2'><h2>WHAT WE ARE</h2></div>
              <div className='text-sm sm:text-base md:text-lg font-bold pb-2'><h2>Committed to Excellence</h2></div>
              <div className='text-xs sm:text-sm md:text-base'><p>Kefita Technology PLC in Addis Ababa, Ethiopia, offers cost-efficient IT support for organizations, focusing on software development, website services, mobile applications, and IT consultancy services. We aim to evolve from a startup to a leading tech product manufacturer by delivering advanced solutions and fostering long-term client relationships. We provide efficient, high-quality services tailored to complex organizational demands, boosting productivity and maximizing value. Our unique service level agreements and fixed costs cater to diverse needs and budgets, ensuring a real business advantage.</p></div>
            </div>
          </div>
          {/* What we are for large screen */}
          <div className='hidden lg:block lg:w-1/2 mt-8 lg:mt-0 mx-12'>
            <div className='font-bold text-lg py-4 mt-14'><h2>WHAT WE ARE</h2></div>
            <div className='font-bold text-2xl pb-4'><h2>Committed to Excellence</h2></div>
            <div><p>Kefita Technology PLC in Addis Ababa, Ethiopia, offers cost-efficient IT support for organizations, focusing on software development, website services, mobile applications, and IT consultancy services. We aim to evolve from a startup to a leading tech product manufacturer by delivering advanced solutions and fostering long-term client relationships. We provide efficient, high-quality services tailored to complex organizational demands, boosting productivity and maximizing value. Our unique service level agreements and fixed costs cater to diverse needs and budgets, ensuring a real business advantage.</p></div>
          </div>
        </div>
      </div>
      {/* Values */}
      <div className='lg:bg-[#5873C1] rounded-xl pb-6 lg:mx-0 mx-4'>
        <div className='text-customBlue font-bold text-center py-4'><p>Our Values</p></div>
        <div className='text-white font-bold text-center pb-4'><p>Our Work Is Heavily Shaped By Our Core Values</p></div>
        <div className='bg-white max-w-6xl mx-auto py-12 px-8 rounded-2xl flex mb-8'>
          <div className="lg:h-56 lg:w-1 w-3 bg-red-600 mx-4 block"></div>
          <div className='lg:mx-6'>
            <div className='p-2'>
              <h1 className='text-red-600 font-bold pb-1 text-lg'>Sustainable Growth</h1>
              <p className='text-customBlue5 font-medium'>Achieved through innovation, creativity, and competence.</p>
            </div>
            <div className='p-2'>
              <h1 className='text-red-600 font-bold pb-1 text-lg'>Customer Respect</h1>
              <p className='text-customBlue5 font-medium'>Our customers are valued with honesty, quality, integrity, and ethical business practices</p>
            </div>
            <div className='p-2'>
              <h1 className='text-red-600 font-bold pb-1 text-lg'>Technology Advantage</h1>
              <p className='text-customBlue5 font-medium'>By integrating honesty, quality, and technology strategically, we enhance customer service</p>
            </div>
          </div>
        </div>
      </div>
      {/* What we do part */}
      <div className='mx-4 lg:mx-32 lg:mt-12'>
        <div className='font-bold text-white lg:text-5xl text-lg text-center lg:py-6 max-md:py-3 lg:mb-8 max-md:mb-4'>WHAT WE DO</div>
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
              <img src={gps} className="w-full h-auto" alt="GPS and Speed Tracking" />
            </div>
            <div className='px-4'>
              <h1 className='text-red-600 font-bold pb-1 text-lg'>GPS and Speed Tracking</h1>
              <p className='text-customBlue5 font-medium mb-3'>Installation and implementation of GPS and speed tracking technologies.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center'>
          {!showMore && (
            <button className='bg-red-600 text-white px-4 py-2 rounded-lg my-8' onClick={() => setShowMore(!showMore)}> Show More</button>
          )}
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
              <button className='bg-red-600 text-white px-4 py-2 rounded-lg my-8' onClick={() => setShowMore(!showMore)}>Show Less </button>
            </div>
          </div>
        )}
      </div>
      {/* Our Process part */}
      <div className='lg:bg-[#5873C1] rounded-xl pb-6 mt-4'>
        <div className='text-customBlue font-bold text-center py-4 mb-3'><p>Our Process</p></div>
        <div className='bg-white max-w-6xl lg:mx-auto mx-4 py-12 lg:px-8 rounded-2xl flex flex-col lg:flex-row mb-8'>
          <div className='lg:mx-6'>
            <div className='flex my-3 mb-6'>
              <div className='lg:px-3 pb-4 lg:pb-0 block'>
                <img src={mission} className="lg:w-24 w-full h-auto mt-6 lg:mt-0" alt="Mission" />
              </div>
              <div className='px-2'>
                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR MISSION</h1>
                <p className='text-customBlue5 lg:font-medium text-sm'>Our mission is to enhance customer relationships through exceptional services, utilizing innovation, advanced technology, and value, while focusing on client-desired technology services for growth.</p>
              </div>
            </div>
            <div className='flex mt-3 mb-6'>
              <div className='lg:px-3 pb-4 lg:pb-0 block'>
                <img src={vision} className="lg:w-24 w-full h-auto mt-6 lg:mt-0" alt="Vision" />
              </div>
              <div className='px-2'>
                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR VISION</h1>
                <p className='text-customBlue5 lg:font-medium text-sm'>Our vision is to become a leading provider of software and technological solutions across industries, empowering customers and aiming to be a top provider in East Africa by 2032 and across Africa by 2040.</p>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='lg:px-6 px-4 pb-4 lg:pb-0 block'>
                <img src={objectives} className="lg:w-16 w-full h-auto mt-12 lg:mt-0" alt="Objectives" />
              </div>
              <div className='px-3'>
                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR OBJECTIVE</h1>
                <p className='text-customBlue5 lg:font-medium text-sm'>Kefita Technology PLC offers software and hardware solutions tailored to the country's needs, including software development, cybersecurity testing, GPS vehicle speed limiters, fleet management systems, and technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
