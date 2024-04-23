import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackToTopCom from "./BackToTopCom";

const NavbarCom = () => {
    const [state, setState] = useState(false);          // navbar toggler
    const [boolColor, setBoolColor] = useState(false);  // navbar bg color
    const [dropdown, setDropdown] = useState(false);    // for dropdown

    let location = useLocation();

    const validPaths = ['/service', '/booking', '/testimonial', '/contact'];
    const isDropDownActive = validPaths.includes(location.pathname);

    useEffect(() => {
        const handleChangeBackground = () => {
            if (window.scrollY >= 78) {
                setBoolColor(true)
            }
            else {
                setBoolColor(false)
            }
        }

        window.addEventListener("scroll", handleChangeBackground);

        return () => { window.removeEventListener('scroll', handleChangeBackground) };

    }, []);

    const handleNavLinks = () => {
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setState(false);
    }

    const handleNavDropdown = () => {
        setDropdown(!dropdown);
    }

    const handleNavLinkColor = () => {
        setDropdown(false)
        setState(false);
        if (window.innerWidth < 992) {
            setDropdown(true);
        }
    }

    return (
        <>
            <section className={`navbar-main-section p-0 ${boolColor ? "nav-bg-blck " : "nav-bg-trans"}`}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="/" target="_sachin">Tastebud Oasis</a>
                        <button className="navbar-toggler" type="button" title='toggle-button' onClick={() => setState(!state)}>
                            {state ? <i className="fa-solid fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                        <div className={`collapse navbar-collapse ${state ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" onClick={() => handleNavLinks()}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" onClick={() => handleNavLinks()}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/menu" onClick={() => handleNavLinks()}>
                                        Menu
                                    </NavLink>
                                </li>


                                <li className="nav-item dropdown nav-drop-page">
                                    <NavLink to="/pages" className={`nav-link dropdown-toggle ${isDropDownActive ? "active" : ""}`} role="button" data-bs-toggle="dropdown" onClick={() => handleNavDropdown()} >
                                        Pages
                                    </NavLink>
                                    <ul className={`dropdown-menu ${dropdown ? "show" : ""}`} data-bs-popper="static" >
                                        <li><NavLink className="dropdown-item" to="/service" onClick={() => handleNavLinkColor()} >Service</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/booking" onClick={() => handleNavLinkColor()} >Booking</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/testimonial" onClick={() => handleNavLinkColor()} >Testimonial</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/contact" onClick={() => handleNavLinkColor()} >Contact</NavLink></li>
                                    </ul>
                                </li>


                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" onClick={() => handleNavLinks()}>
                                        Contact
                                    </NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cart" onClick={() => handleNavLinks()}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <small>cart</small>
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <NavLink to="/signup" onClick={() => handleNavLinks()}>
                                    <button className="btn btn-style btn1-style" type="submit">Sign Up</button>
                                </NavLink>
                                <NavLink to="/login" onClick={() => handleNavLinks()}>
                                    <button className="btn btn-style btn2-style" type="submit">Log In</button>
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>

            <BackToTopCom />
        </>
    );
}

export default NavbarCom
