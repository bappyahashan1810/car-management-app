import React from 'react';
import Bannar from '../Bannar/Bannar';
import About from '../About/About';
import Services from '../Services/Services';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <OfficeInfo></OfficeInfo>
            <Products></Products>
        </div>
    );
};

export default Home;