import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='mt-[44px]'>
            <div className='text-center space-y-3'>
                <p className='text-[#FF3811] font-bold'>Service</p>
                <h1 className='font-bold text-[20px]'>Our Service Area</h1>
                <p><small>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </small></p>

            </div>
            <div className='md:grid grid-cols-3 gap-8 mt-[50px] '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='mt-[50px] flex justify-center'>
                <button className="btn btn-outline btn-secondary hover:bg-fuchsia-100">More Services</button>
            </div>
        </div>
    );
};

export default Services;