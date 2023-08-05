import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} className='w-[314px] h-[208px]' alt="Shoes" /></figure>
                <div className="card-body space-y-[20px]">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions ">
                        <p className='text-red-500 font-bold'>price: ${price}</p>
                        <Link to={`/services/${_id}`}><AiOutlineArrowRight className='text-2xl text-red-500'></AiOutlineArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;