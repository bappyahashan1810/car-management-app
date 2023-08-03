import React from 'react';
import Bannar from '../Bannar/Bannar';
import About from '../About/About';
import Services from '../Services/Services';
import OfficeInfo from '../OfficeInfo/OfficeInfo';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <OfficeInfo></OfficeInfo>
        </div>
    );
};

export default Home;