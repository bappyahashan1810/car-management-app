import React from 'react';
import { FcCalendar } from 'react-icons/fc';
const OfficeInfo = () => {
    return (
        <div className='mt-[130px]'>
            <div className='h-[250px] bg-[#151515] rounded-md text-white'>
                <div className='flex justify-center'>
                    <FcCalendar></FcCalendar>
                </div>
            </div>
        </div>
    );
};

export default OfficeInfo;