import React from 'react';
import person1 from '../../../assets/images/persons/person1.jpg';
import person2 from '../../../assets/images/persons/person2.jpg';
import quote from '../../../assets/icons/quote.svg';
import { AiFillStar } from 'react-icons/ai';




const Testimonial = () => {
    return (
        <div className='mt-[160px]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold'>Testimonial</p>
                <h1 className='text-[45px] font-bold'>What Customer Says</h1>
                <p><small>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.  </small></p>
            </div>
            <div className='mt-[50px] md:grid grid-cols-2 gap-7'>
                <div className='border-[1px] border-[#F3F3F3] bg-[#FFF] p-6'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img src={person1} className='w-[60px] h-[60px] rounded-full' alt="" />
                            <div className='ml-[22px]'>
                                <h1 className='font-bold '>Awlad Hossain</h1>
                                <p><small>Businessman</small></p>
                            </div>
                        </div>
                        <div>
                            <img className='w-[46px] h-[46px]' src={quote} alt="" />
                        </div>
                    </div>
                    <div>
                        <p><small>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </small></p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                    </div>
                </div>
                <div className='border-[1px] border-[#F3F3F3] bg-[#FFF] p-6'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img src={person2} className='w-[60px] h-[60px] rounded-full' alt="" />
                            <div className='ml-[22px]'>
                                <h1 className='font-bold '>Awlad Hossain</h1>
                                <p><small>Businessman</small></p>
                            </div>
                        </div>
                        <div>
                            <img className='w-[46px] h-[46px]' src={quote} alt="" />
                        </div>
                    </div>
                    <div>
                        <p><small>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </small></p>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                        <AiFillStar className='text-[#FF912C]'></AiFillStar>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Testimonial;