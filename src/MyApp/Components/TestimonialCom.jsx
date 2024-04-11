import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import TestimonialApi from '../Api-folder/TestimonialApi';

const TestimonialCom = () => {
    const [noOfCard, setNoOfCard] = useState(2);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => { setWindowWidth(window.innerWidth) };

        window.addEventListener('resize', handleResize);

        return () => { window.removeEventListener('resize', handleResize) };

    }, []);

    useEffect(() => {
        if (windowWidth < 768) {
            setNoOfCard(1);
        }
        else if (windowWidth >= 768 && windowWidth < 1440) {
            setNoOfCard(2);
        }
        else if (windowWidth >= 1440) {
            setNoOfCard(3);
        }
    }, [windowWidth])

    return (
        <>
            <section className='test-main-section'>
                <div className="container">
                    <div className='test-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>testimonial</h5>
                        <h2 className=' text-center mb-4'>Clients Thoughts!!!</h2>
                        <br />
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={noOfCard}
                        spaceBetween={30}

                        navigation
                        pagination={{ clickable: true, }}
                        scrollbar={{ draggable: true, }}

                        autoplay={{
                            delay: "2500",
                            disableOnInteraction: false
                        }}

                        onSlideChange={() => { }}
                        onSwiper={() => { }}

                    >
                        {
                            TestimonialApi.map((currData, index) => {
                                return (
                                    <SwiperSlide className=' pb-5' key={index}>

                                        <div className="testimonial-card p-0">
                                            <div className="pt-4 pe-4 pb-0 ps-4">
                                                <div className='test-card-top-div pt-3 pb-3'>
                                                    <i className="fa-solid fa-quote-left"></i>
                                                    <p className=' ps-2 pb-2'>{currData.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='test-client-div ps-4 pe-4'>
                                            <div className=' test-profile-img p-0'>
                                                <img src={currData.imagePath} alt='profile-pic' className=' img-fluid' />
                                            </div>
                                            <div className=' test-profile'>
                                                <h6 className=' text-capitalize m-0 ps-4'>{currData.name}</h6>
                                                <small className=' text-capitalize m-0 ps-4'>{currData.profession}</small>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </section>


        </>
    )
}

export default TestimonialCom
