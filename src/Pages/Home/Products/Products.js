import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import { AiFillStar } from 'react-icons/ai'

const Products = () => {
    return (
        <div className='mt-[130px]'>
            <div className='text-center'>
                <p className='font-bold text-red-500'>Popular Products</p>
                <h1 className='text-[45px] font-bold'>Browse Our Products</h1>
                <p><small>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </small></p>

            </div>
            <div className='mt-[50px] md:grid grid-cols-3 gap-8 relative'>
                <div className="card w-[364px]  bg-base-100 shadow-xl  mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img1} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img2} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img3} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img4} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img5} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mr-20">
                    <figure className="px-10 pt-10 bg-[#F3F3F3]">
                        <img src={img6} alt="Shoes" className="rounded-xl w-[156px] h-[153px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className='flex mr-2'>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                            <AiFillStar className='text-xl text-yellow-500'></AiFillStar>
                        </div>
                        <p className='font-bold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className='flex justify-center w-full absolute bottom-0 top-full'>
                    <button class="btn btn-outline btn-secondary mt-[50px]">More Products</button>
                </div>
            </div>

        </div >
    );
};

export default Products;