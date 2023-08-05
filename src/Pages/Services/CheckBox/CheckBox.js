import React from 'react';

const CheckBox = () => {
    return (
        <div className='mt-[142px] bg-[#F3F3F3] space-y-5 p-20'>
            <div className='grid grid-cols-2 gap-9 '>
                <div className=''>
                    <input className='h-[60px] w-full border-3px border-[#F3F3F3] p-4' type="text" name="firstName" id="" placeholder='first name' /><br />
                    <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4 mt-6' type="text" name="phone" id="" placeholder='your phone' />
                </div>
                <div className=''>
                    <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4' type="text" name="lastname" id="" placeholder='last name' /><br />
                    <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4 mt-6' type="email" name="email" id="" placeholder='your email' />
                </div>
            </div>
            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            <button className="btn btn-block bg-red-500 text-white">Order Confirm</button>

        </div>
    );
};

export default CheckBox;