import React from 'react'

const OtherHeroCom = (props) => {
    return (
        <>
            <section
                className='otherhero-main-section pt-5 pb-5'
                style={{ background: "linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(Images/bg-hero.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100  pt-5 pb-5">

                        <div className="col-12 pt-5 pb-5">
                            <h2>{props.PageName}</h2>
                            <div className='otherhero-inner-div'>
                                <span>Home</span>/
                                <span>Pages</span>/
                                <span style={{ color: "#fff" }}>{props.PagePathName}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherHeroCom
