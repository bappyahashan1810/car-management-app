import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row flex items-center">
                    <div className='w-1/2 relative'>
                        <img src={person} className=" rounded-lg shadow-2xl w-full h-full " />
                        <img src={parts} alt="" className="w-3/4 rounded-lg shadow-2xl absolute right-0 top-1/2 border-8 border-white" />
                    </div>
                    <div className='w-1/2 space-y-4 ml-[61px]'>
                        <h1 className="text-5 font-bold text-[#FF3811]">About Us</h1>
                        <h1 className="text-5xl font-bold md:w-[376px]">We are qualified & of experience in this field</h1>
                        <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn bg-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;