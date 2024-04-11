import React, { useState } from 'react'

const FooterCom = () => {
    const [userData, setUserdata] = useState({ email: "" });

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!userData.email) {
            alert("Plzz fill your email");
        }
        else {
            setUserdata({ email: "" })
        }
    }
    const myYear = new Date().getFullYear();
    return (
        <>
            <section className='footer-main-section pt-5 pb-4'>
                <div className="container">
                    <div className="row">

                        <div className="col-8 col-sm-4 mb-4 ">
                            <div className='footer-company-div'>
                                <h5 className='horz-line mb-4'>Company</h5>

                                <div className=" common-new-class">
                                    <div>
                                        <span className="col-12">
                                            about us
                                        </span>
                                    </div>
                                    <div>
                                        <span className="col-12">
                                            contact us
                                        </span>
                                    </div>
                                    <div>
                                        <span className="col-12">
                                            reservation
                                        </span>
                                    </div>
                                    <div>
                                        <span className="col-12">
                                            privacy policy
                                        </span>
                                    </div>
                                    <div>
                                        <span className="col-12">
                                            terms & conditions
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-8 col-sm-4 mb-4">
                            <div className='footer-contact-div'>
                                <h5 className='horz-line mb-4'>Contact</h5>
                                <div className="row mb-3">
                                    <div className="col-6 col-sm-12">
                                        <div className=" mb-1 common-new-class">
                                            <span className=' d-flex align-items-center'>
                                                <i className="fa-solid fa-location-dot"></i>
                                                <div className=' ps-4'>123 Street, XYZ, ABCD</div>
                                            </span>
                                        </div>
                                        <div className=" mb-1 common-new-class">
                                            <span className=' d-flex align-items-center'>
                                                <i className="fa-solid fa-phone"></i>
                                                <div className=' ps-4'>+01234567890</div>
                                            </span>
                                        </div>
                                        <div className=" mb-1 common-new-class">
                                            <span className=' d-flex align-items-center'>
                                                <i className="fa-solid fa-envelope"></i>
                                                <div className=' ps-4'>contact@info.com</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-10 col-lg-8 footer-contact-icon-div">

                                        <div className=' d-flex justify-content-between align-items-center'>
                                            <div className='footer-border-round-class'>
                                                <i className=" fab fa-twitter"></i>
                                            </div>

                                            <div className='footer-border-round-class'>
                                                <i className=" fab fa-facebook"></i>
                                            </div>

                                            <div className='footer-border-round-class'>
                                                <i className=" fab fa-instagram"></i>
                                            </div>

                                            <div className='footer-border-round-class'>
                                                <i className="fa-brands fa-linkedin"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 col-sm-4 mb-4">
                            <div className='footer-opening-div'>
                                <h5 className='horz-line mb-4'>opening</h5>

                                <div className="row mb-2 common-new-class">
                                    <div className="col-12">
                                        <span>
                                            Mon - Sat
                                            <br />
                                            9AM - 9PM
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-2 common-new-class">
                                    <div className="col-12 ">
                                        <span>
                                            Sun
                                            <br />
                                            8AM - 8PM
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-sm-8 col-md-6 mb-4">
                            <div className='footer-newsletter-div'>
                                <h5 className='horz-line mb-4'>Newsletter</h5>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                                <form onSubmit={formSubmit}>
                                    <div className="row">
                                        <div className="col-8 ">
                                            <div className=' form-floating'>
                                                <input type="email" className="form-control" id="footer-email" placeholder="Your Email" name='email'
                                                    onChange={inputUserdata} value={userData.email}
                                                />
                                                <label htmlFor="footer-email">Enter Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-4 ps-0">
                                            <button className=" w-100 py-2 " type="submit" title='submit'>Subscribe</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className="row footer-copyright mt-4 mb-2">
                        <div className="col-12">
                            <p className='m-0'>Copyright © {myYear} <span>Tastebud Oasis</span>, All Rights Reserved.</p>
                        </div>

                        <div className="col-12">
                            <p className='m-0 pt-2'>Created By : <span> Sachin Kumar</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterCom
