import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorCom = () => {
    return (
        <>
            <section className='error-main-section'>
                <div className='container h-100 d-flex justify-content-center align-items-center'>

                    <div className="row">
                        <div className="col-12 error-centerdiv">
                            <div className=" p-5">

                                <h1 className='mb-4'>404</h1>
                                <h2 className='mb-4'>Page Not Found</h2>
                                <p className='mb-4'>The page you are looking for doesn't exist or has been moved.</p>
                                <NavLink to="/" className=' d-flex justify-content-center align-items-center'>
                                    <button type='submit' title='go-to-homepage' className=' w-100 btn-style btn1-style m-0'>Go Home</button>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ErrorCom
