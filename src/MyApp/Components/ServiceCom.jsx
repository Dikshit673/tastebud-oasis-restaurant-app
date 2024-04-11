import React from 'react'
import MyServiceData from '../Api-folder/ServiceApi'

const ServiceCom = () => {
    return (
        <>
            <section className='service-main-section'>
                <div className="container">

                    <div className='service-top-div'>
                        <h5 className=' text-center mb-4 horz-line'>Services</h5>
                        <h2 className=' text-center mb-4'>Explore our Services</h2>
                        <br />
                    </div>

                    <div className="row">

                        {
                            MyServiceData.map((servData, index) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
                                        <div className='p-4 service-card'>
                                            <i className={`${servData.iconclass} mt-4 mb-4`}></i>
                                            <h3 className='mb-4'>{servData.heading}</h3>
                                            <p className='mb-4'>{servData.para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceCom
