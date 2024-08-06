import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people2 from "../assets/Meeting.png";
import div from "../assets/develop.png";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import objectives from "../assets/objectives.png";
import it from "../assets/consult.webp";
import data from "../assets/datar.png";
import electronic from "../assets/networking.png";
import gps from "../assets/speed.png";
import hw from "../assets/maintenance.png";
import React, { useRef,useState,useEffect } from 'react';


function AboutUs() {
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
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 "ref={el => fadeRefs.current[1] = el}>
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
    }
    return (
        <div className='   font-outfit mx-0 '>
            <div className='bg-white'> 
            {/* about us image */}
            {/* <div className='max-w-6x lg:mx-aut  lg:px- '>
                <img src={people1} className="w-full h-[300px]" alt="People" />
            </div> */}
            <div className='bg-gradient-to-b from-[#5873C1] via-[#5873C1] lg:pt-12 py-2 pb-32 '>
             <div ref={el => fadeRefs.current[0] = el}  className=' lg:flex  text-white items-center w-full max-w-6xl mx-auto fade-in-enterlg:px-4 mt-6'>
              <div className='w-72 lg:w-1/2 lg:ml-0 ml-12 lg:mb-6'>
                  <img src={people2} className="w-full h-auto" alt="People" />        
              </div>
              <div className='  lg:w-1/2  lg:mt-12 lg:ml-20 mx-4 mb-6 text-customBlu5'>
                  <div className='font-bold text-lg py-4 lg:mt-3 lg:text-3xl'><h2>WHAT WE ARE</h2></div>
                  <div className='font-bold text-2xl pb-4'><h2>Committed to Excellence</h2></div>
                  <div className='lg:text-lg lg:pb-2 '><p>Kefita Technology PLC in Addis Ababa, Ethiopia, offers cost-efficient IT support for organizations, focusing on software development, website services, mobile applications, and IT consultancy services. We aim to evolve from a startup to a leading tech product manufacturer by delivering advanced solutions and fostering long-term client relationships. We provide efficient, high-quality services tailored to complex organizational demands, boosting productivity and maximizing value. Our unique service level agreements and fixed costs cater to diverse needs and budgets, ensuring a real business advantage.</p></div>
              </div>
          </div>
            </div>
            </div>
   
            {/* values */}
            <div ref={el => fadeRefs.current[1] = el}  className=' rounded-xl pb-6 lg:mx-0 mx-4 pt-0 mt-0 fade-in-enetr '>
                <div className='text-customBlue  font-bold text-center pb-4 text-3xl '><p>Our Values</p></div>
                <div className='text-customBlue5 font-bold text-center pb-4'><p>Our Work Is Heavily Shaped By Our Core Values</p></div>
                <div className='bg-white max-w-6xl mx-auto py-12 px-8 rounded-2xl flex  mb-8 shadow-xl'>
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
            {/* what we do part */}
            <div ref={el => fadeRefs.current[2] = el} className='lg:mx-32 px-2 pb-12 lg:mt-12 roundd-xl fade-in-enter'>
                <div className='font-bold text-customBlue5 lg:text-4xl text-lg text-center py-6 mb-8'>WHAT WE DO</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
                        <div className='py-4 px-4 mb-1'>
                            <img src={div} className="w-full h-auto" alt="Software Development" />
                        </div>
                        <div className='px-4'>
                            <h1 className='text-red-600 font-bold pb-1 text-lg'>Software Development</h1>
                            <p className='text-customBlue5 font-medium mb-3'>Custom software development services tailored to meet specific business needs.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
                        <div className='py-4 px-4 mb-1'>
                            <img src={it} className="w-full h-auto" alt="IT Consultancy" />
                        </div>
                        <div className='px-4'>
                            <h1 className='text-red-600 font-bold pb-1 text-lg'>IT Consultancy</h1>
                            <p className='text-customBlue5 font-medium mb-3'>Expert IT consultancy services to optimize business processes and technology use.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
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
        <button className='bg-red-600 text-white shadow-xl px-4 py-2 rounded-lg my-8' onClick={() => setShowMore(!showMore)}> Show More</button>)}
</div>
{showMore && (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:mx-32   px-2 '>
            <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
                <div className='py-4 px-4 mb-1'>
                    <img src={data} className="w-full h-auto" alt="Data Research and Analysis" />
                </div>
                <div className='px-4'>
                    <h1 className='text-red-600 font-bold pb-1 text-lg'>Data Research and Analysis</h1>
                    <p className='text-customBlue5 font-medium mb-3'>Conducting data research, analysis, and consultancy for organizations.</p>
                </div>
            </div>
            <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
                <div className='py-4 px-4 mb-1'>
                    <img src={electronic} className="w-full h-auto" alt="Electronics Trade & Network Cabling" />
                </div>
                <div className='px-4'>
                    <h1 className='text-red-600 font-bold pb-1 text-lg'>Electronics Trade & Network Cabling</h1>
                    <p className='text-customBlue5 font-medium mb-3'>The company engages in the trade of electronics and electrical goods, focusing on network cabling contract work to ensure reliable and efficient connectivity.</p>
                </div>
            </div>
            <div className='bg-white shadow-xl rounded-lg mx-4 sm:mx-0'>
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
         {/* our process part */}
            <div ref={el => fadeRefs.current[3] = el}  className=' rounded-xl pb-6 mt-4 fade-in-enter'>
                <div className='text-[#32C48F] font-bold text-center py-4 mb-3 text-xl'><p>Our Process</p></div>
                <div className='bg-white shadow-2xl max-w-6xl lg:mx-auto mx-4 py-12 lg:px-8 rounded-2xl flex flex-col lg:flex-row mb-8'>
                    <div className='lg:mx-6   '>
                        <div className='flex my-3 mb-6'>
                        <div className=' lg:px-3 pb-4 lg:pb-0 block'>
                        <img src={mission} className="lg:w-24 w-full h-auto mt-6 lg:mt-0" alt="Mission" />
                            </div>
                            <div className='px-2'>
                                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR MISSION</h1>
                                <p className='text-customBlue5 lg:font-medium text-sm'>Our mission is to enhance customer relationships through exceptional services, utilizing innovation, advanced technology, and value, while focusing on client-desired technology services for growth.</p>
                            </div>
                        </div>
                        <div className='flex my-3 mb-6'>
                        <div className=' lg:px-3 pb-4 lg:pb-0 block'>
                        <img src={vision} className="lg:w-24  w-full h-auto mt-6 lg:mt-0" alt="Vision" />
                            </div>
                            <div className='px-2'>
                                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR VISION</h1>
                                <p className='text-customBlue5 lg:font-medium text-sm'>Our vision is to become a leading provider of software and technological solutions across industries, empowering customers and aiming to be a top provider in East Africa by 2032 and across Africa by 2040.</p>
                            </div>
                        </div>
                        <div className='flex my-3'>
                            <div className=' lg:px-6 px-4 pb-4 lg:pb-0 block'>
                                <img src={objectives} className="lg:w-16  w-full h-auto mt-12 lg:mt-0" alt="Objectives" />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-red-600 font-bold pb-1 lg:text-lg'>OUR OBJECTIVE</h1>
                                <p className='text-customBlue5 lg:font-medium text-sm'>Kefita Technology PLC offers software and hardware solutions tailored to the country's needs, including software development, cybersecurity testing, GPS vehicle speed limiters, fleet management systems, and technical support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
             {/* testimonials */}
            <div ref={el => fadeRefs.current[4] = el}  className='pb-8 fade-in-enter'>
            <p className='text-[#32C48F] my-8 text-center '>OUR TEAM</p>
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
        </div>
    )
}

export default AboutUs;
