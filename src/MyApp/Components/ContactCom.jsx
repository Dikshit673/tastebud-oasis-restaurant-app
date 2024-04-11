import React, { useState } from 'react'

const ContactCom = () => {

    const [userData, setUserdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [phraseDiv, setPhraseDiv] = useState("");
    const [phraseBool, setPhraseBool] = useState(false);

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!userData.name) {
            alert("Plzz fill your name");
        }
        else if (!userData.email) {
            alert("Plzz fill your email");
        }
        else if (!userData.subject) {
            alert("Plzz fill your subject");
        }
        else if (!userData.message) {
            alert("Plzz fill your message");
        }
        else {
            setPhraseDiv("Your Message Submitted ✓")
            setPhraseBool(true);
            setTimeout(() => {
                setPhraseBool(false);
            }, 5000)
            setUserdata(
                {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                }
            )
        }
    }
    return (
        <>
            <section className='contact-main-section'>
                <div className="container">
                    <div className='contact-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Contact us</h5>
                        <h2 className=' text-center mb-4'>contact for any quary</h2>
                        <br />
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-4 mb-4">
                            <div className='contact-scnd-div'>
                                <h5 className=' mb-2 horz-line'>booking</h5>
                                <small>book@example.com</small>
                                <br />
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className='contact-scnd-div'>
                                <h5 className=' mb-2 horz-line'>general</h5>
                                <small>info@example.com</small>
                                <br />
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className='contact-scnd-div'>
                                <h5 className=' mb-2 horz-line'>technical</h5>
                                <small>tech@example.com</small>
                                <br />
                            </div>
                        </div>

                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-md-6 mb-4 ">
                            <div className='contact-left-div'>
                                <iframe className='w-100' title='my-gMap'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36079945025!2d76.82493351406114!3d28.422858319601133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712503264150!5m2!1sen!2sin"
                                    width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4 ">
                            <div className='contact-right-div p-4 d-flex flex-column justify-content-center align-items-start'>
                                <form onSubmit={formSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="contact-name" placeholder="Your Name" name='name' onChange={inputUserdata} value={userData.name} />
                                                <label htmlFor="contact-name" >Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="contact-email" placeholder="Your Email" name='email' onChange={inputUserdata} value={userData.email} />
                                                <label htmlFor="contact-email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="contact-subject" placeholder="Subject" name='subject' onChange={inputUserdata} value={userData.subject} />
                                                <label htmlFor="contact-subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className=' form-floating'>
                                                <textarea type="text" className="form-control" id="contact-message" placeholder="Leave a message here" name='message' onChange={inputUserdata} value={userData.message} style={{ height: "150px" }} />
                                                <label htmlFor="contact-message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className=" w-100 py-3" type="submit" title='submit'>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                <div className='contact-phrase ps-3  mt-2'>
                                    {phraseBool ? phraseDiv : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCom
