import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginCom = () => {

    const [userData, setUserdata] = useState({
        userOrEmail: "",
        userPassword: "",
    });

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!userData.userOrEmail) {
            alert("Plzz fill your username or email");
        }
        else if (!userData.userPassword) {
            alert("Plzz fill your password");
        }
        else {
            setUserdata(
                {
                    userOrEmail: "",
                    userPassword: "",
                }
            )
        }
    }

    return (
        <>
            <section className="login-main-section">
                <div className=" container ">

                    <div className='login-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Login</h5>
                        <h2 className=' text-center mb-4'>Login to your Account</h2>
                        <br />
                    </div>

                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div className=" col-12 col-md-6 login-right-div">
                            <form onSubmit={formSubmit}>
                                <div className=" right-indiv p-5">

                                    <div className="row pt-4">
                                        <div className="col-12 mb-5">
                                            <div className=' form-floating'>
                                                <input type="text" className="form-control" id="login-username-or-email" placeholder="Username or Email" name='userOrEmail' onChange={inputUserdata} value={userData.userOrEmail} />
                                                <label htmlFor="login-username-or-email" >Username or Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-5">
                                            <div className=' form-floating'>
                                                <input type="password" className="form-control" id="login-password" placeholder="Password" name='userPassword' onChange={inputUserdata} value={userData.userPassword} />
                                                <label htmlFor="login-password" >Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-5">
                                            <button type="submit" title='submit' className=" w-100 btn-style btn1-style m-0">Login</button>
                                        </div>
                                        <div className="col-12 ">
                                            <p className=" text-center m-0">
                                                By clicking the Login button, you agree to our
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
                        <div className="col-12">
                            <p>
                                Not have an account?
                                <NavLink to="/signup">
                                    <u className=" ps-1 pe-1" style={{ color: "blue", cursor: "pointer" }}>
                                        Sign up here
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

export default LoginCom;
