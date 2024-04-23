import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const [userData, setUserdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!userData.firstName) {
            alert("Plzz fill your first name");
        }
        else if (!userData.lastName) {
            alert("Plzz fill your last name");
        }
        else if (!userData.email) {
            alert("Plzz fill your email");
        }
        else if (!userData.password) {
            alert("Plzz fill your password");
        }
        else {
            setUserdata(
                {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }
            )
        }
    }

    const handleCheckbox = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    }
    return (
        <>s
            <section className="signup-main-section">
                <div className=" container ">

                    <div className='signup-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Sign Up</h5>
                        <h2 className=' text-center mb-4'>Make a new Account</h2>
                        <br />
                    </div>

                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div className=" col-12 col-md-6 signup-right-div">
                            <form onSubmit={formSubmit}>
                                <div className="right-indiv p-5 ">

                                    <div className="row pt-4">

                                        <div className="col-12 col-md-6 mb-4">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="signup-first-name" placeholder="First Name" name='firstName' onChange={inputUserdata} value={userData.firstName} />
                                                <label htmlFor="signup-first-name" >First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-4">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="signup-last-name" placeholder="Last Name" name='lastName' onChange={inputUserdata} value={userData.lastName} />
                                                <label htmlFor="sign-last-name" >Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className=' form-floating'>
                                                <input type="email" className="form-control" id="signup-email" placeholder="Email" name='email' onChange={inputUserdata} value={userData.email} />
                                                <label htmlFor="signup-email" >Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <div className=' form-floating'>
                                                <input type="password" className="form-control" id="signup-password" placeholder="Password" name='password' onChange={inputUserdata} value={userData.password} />
                                                <label htmlFor="signup-password" >Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className=" col-12 mb-4  signup-input-field">
                                            <div className=" form-floating form-check d-flex">
                                                <input className="  form-check-input " type="checkbox" id="signup-flexCheckChecked" onChange={handleCheckbox} checked={isCheckboxChecked} />
                                                <p className=" form-check-label text-start  ps-4 pt-0 pb-0 pe-0 m-0" htmlFor="signup-flexCheckChecked" >
                                                    I agree that the owner may contact me at the
                                                    email address above.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <button type="submit" title='submit' className={`w-100 btn-style  m-0 ${isCheckboxChecked ? "btn1-style" : "btn2-style"}`} disabled={!isCheckboxChecked}>Sign Up</button>
                                        </div>
                                        <div className="col-12 ">
                                            <p className=" text-center m-0">
                                                By clicking the Sign Up button, you agree to our
                                                <u className=" ps-1 pe-1" style={{ color: "blue", cursor: "pointer" }}>
                                                    terms and condition
                                                </u>
                                                and
                                                <u className=" ps-1 pe-1" style={{ color: "blue", cursor: "pointer" }}>
                                                    policy privacy
                                                </u>
                                                .
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12 ">
                            <p>
                                Already have an account?
                                <NavLink to="/login">
                                    <u className=" ps-1 pe-1" style={{ color: "blue", cursor: "pointer" }}>
                                        Login here
                                    </u>
                                </NavLink>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SignUp;
