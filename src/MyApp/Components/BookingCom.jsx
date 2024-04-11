import React from 'react'

const BookingCom = () => {

    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="book-main-section" id='booking-section'>
                <div className="container">
                    <div className='book-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>reservation</h5>
                        <h2 className=' text-center mb-4'>Book A Table Online</h2>
                        <br />
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6 book-left-div p-0">
                            <div className="p-0">
                                <figure>
                                    <img src="Images/dinnertable.jpeg" alt="restaurant-img" className='img-fluid' />
                                </figure>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 book-right-div">
                            <div className=' p-5'>
                                <form onSubmit={formSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" name='name' />
                                                <label htmlFor="name" >Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="name" placeholder="Your Email" name='email' />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type='datetime-local' className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="subject">Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className=' form-floating'>
                                                <select className=' form-select' id='select-1'>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <label htmlFor="NoOfPeople">No. of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className=' form-floating'>
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" name='message' style={{ height: "150px" }} />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className=" w-100 py-3" type="submit" title='submit'>Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingCom
