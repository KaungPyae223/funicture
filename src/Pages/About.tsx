import React from 'react';
import Header from '../Components/AboutUs/Header';
import AboutUsStart from '../Components/AboutUs/AboutUsStart';
import HowWeMake from '../Components/AboutUs/HowWeMake';
import WhatServiesWhatWeGive from '../Components/AboutUs/WhatServiesWhatWeGive';
import OurKeyPeople from '../Components/AboutUs/OurKeyPeople';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div className='font-heading'>
            <Header/>
            <AboutUsStart/>
            <HowWeMake/>
            <WhatServiesWhatWeGive/>
            <OurKeyPeople/>
            <Footer/>
        </div>
    );
};

export default About;