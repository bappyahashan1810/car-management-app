import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
const OfficeInfo = () => {
    return (
        <div className='mt-[130px]'>
            <div className='h-[250px] bg-[#151515] rounded-md text-white flex justify-between  p-3'>
                <div className='flex items-center '>
                    <FcCalendar className='text-5xl mr-3'></FcCalendar>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1>7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <MdOutlinePermPhoneMsg className='text-5xl mr-3 text-red-600'></MdOutlinePermPhoneMsg>
                    <div>
                        <p>Have a question?</p>
                        <h1>+2546 251 2658</h1>
                    </div>
                </div>
                <div className='flex items-center '>
                    <GrLocation className='text-5xl mr-3 text-yellow-500'></GrLocation>
                    <div>
                        <p>Need a repair? our address</p>
                        <h1>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeInfo;