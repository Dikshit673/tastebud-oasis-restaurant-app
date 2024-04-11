import React, { useState } from 'react'

const BackToTopCom = () => {
    const [boolTop, setBoolTop] = useState(false);

    const handleBackToTop = () => {
        if (window.scrollY >= 150) {
            setBoolTop(true)
        }
        else {
            setBoolTop(false)
        }
    }

    window.addEventListener("scroll", handleBackToTop);
    return (
        <>
            <div className={`nav-back-to-top ${boolTop ? "" : "div-hide"}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </>
    )
}

export default BackToTopCom;
