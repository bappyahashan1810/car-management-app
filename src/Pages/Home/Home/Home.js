import React from 'react';
import Bannar from '../Bannar/Bannar';
import About from '../About/About';
import Services from '../Services/Services';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import Products from '../Products/Products';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <OfficeInfo></OfficeInfo>
            <Products></Products>
            <Team></Team>
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;