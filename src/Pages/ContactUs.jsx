import React, { useEffect, useRef, useState } from 'react';
import contact1 from "../assets/Mentionr.jpg";


const ContactUs = () => {
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
      className={`font-outfit bg-customBlue5 pb-4 ${fadeIn ? 'fade-in' : ''}`}
    >
      <div className="text-white p-4 text-center font-bold text-2xl">
        <h1>Contact Us</h1>
      </div>
      <div className="lg:flex lg:m-12 lg:mt-5 shadow-2xl rounded-2xl bg-white">
        <div className="lg:p-8 px-2 lg:w-1/2">
          <img src={contact1} alt="Contact Us" className="w-[500px] lg:ml-12" />
        </div>
        <div className="bg-white lg:p-8 p-4 lg:w-1/2 rounded-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-customBlue">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 p-2 rounded-md w-full bg-customBlue5 text-white"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-customBlue">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 rounded-md w-full bg-customBlue5 text-white"
                placeholder="Enter a valid phone number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-customBlue">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 rounded-md w-full bg-customBlue5 text-white"
                placeholder="Enter a valid email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-customBlue">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 rounded-md w-full bg-customBlue5 text-white"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="text-white py-2 px-4 rounded-md w-full bg-customBlue5 hover:bg-white hover:text-customBlue transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
