import React from 'react'

const AboutCom = () => {
    return (
        <>
            <section className='about-main-section'>
                <div className="container h-100">

                    <div className="row">
                        <div className="col-12 about-top-div">
                            <h5 className='horz-line mb-4'>about us</h5>
                            <h2 className='mb-4'>Welcome to Tastebud Oasis</h2>
                        </div>
                    </div>

                    <div className="row h-100 mt-4">

                        <div className="col-12 col-md-6 mb-4">
                            <div className='about-left-div w-100'>
                                <figure>
                                    <img src="Images/restaurant-kiwi.jpg" alt="restaurant-img" className='img-fluid' />
                                </figure>
                            </div>
                        </div>

                        <div className=" col-12 col-md-6 mb-4 dsply-flx">
                            <div className='about-right-div p-4 w-100'>
                                <h4 className='mt-4 mb-4 ps-3 pe-3'>Who Are We?</h4>
                                <p className='mb-4 ps-3 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores, eos atque totam modi suscipit quasi odit cupiditate.</p>
                                <p className='mb-4 ps-3 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere architecto enim ratione, suscipit quasi odit rem odio illum adipisci in, vitae facilis fuga hic.suscipit quasi odit.</p>
                                <button className='btn-style btn1-style mb-4'> Read more</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCom
