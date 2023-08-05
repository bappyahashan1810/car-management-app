import React from 'react';
import bannerimg from '../../../assets/images/checkout/checkout.png'

const Banner = () => {
    return (
        <div className='mt-[84px]'>
            <div className="hero h-[300px] relative " style={{ backgroundImage: `url(${bannerimg}) ` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md absolute left-[100px]">
                        <h1 className="mb-5 text-5xl font-bold">Check Out</h1>

                    </div>
                    <div className="max-w-md absolute top-[251px] bottom-[30px] left-[421px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="296" height="50" viewBox="0 0 296 50" fill="none">
                            <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                            <h1>Home/CheckBox</h1>
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;