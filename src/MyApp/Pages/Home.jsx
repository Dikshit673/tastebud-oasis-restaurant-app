import React from 'react'

import HeroCom from '../Components/HeroCom';
import AboutCom from '../Components/AboutCom';
import ServiceCom from '../Components/ServiceCom';
import MenuCom from '../Components/MenuCom';
import BookingCom from '../Components/BookingCom';
import TestimonialCom from '../Components/TestimonialCom';
// import ContactCom from '../Components/ContactCom';

const Home = () => {
    return (
        <>
            <HeroCom />
            <AboutCom />
            <ServiceCom />
            <MenuCom />
            <BookingCom />
            <TestimonialCom />
            {/* <ContactCom /> */}
        </>
    )
}

export default Home
