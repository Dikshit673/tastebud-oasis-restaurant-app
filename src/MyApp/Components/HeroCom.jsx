import React, { useState, useEffect } from 'react'

const HeroCom = () => {
    const [heroImg, setHeroImg] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroImg(prevState => !prevState);
        }, 15000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <section
                className='hero-main-section'
                style={{ background: "linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(Images/bg-hero-main.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100 ">

                        <div className="col-12 col-md-6 dsply-flx pt-5 pt-md-0 pb-5 pb-md-0 mt-5 mt-md-0 mb-5 mb-md-0">
                            <div className='hero-left-div'>
                                <h1>Enjoy Our <br />Delicious Meal</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis consequuntur, consectetur placeat exercitationem ipsum!</p>
                                <a href='/#booking-section'>
                                    <button className='btn-style btn1-style'>Book a Seat</button>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 pt-5 pt-md-0 pb-5 pb-md-0">
                            <div className='h-100 dsply-flx'>
                                <img src={heroImg ? "Images/hero-main1.png" : "Images/hero-main2.png"} alt='hero-main-img' className=' img-fluid hero-img-rotation' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroCom
