import React from 'react'
import './Common.css'
import { Link } from 'react-router-dom'

export const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto ">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 sm-mt-3 mb-3 pt-lg-3 order-2  order-md-1  banner-info  d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className='brand-name'>MUR</strong></h1>
                                    <h2 className='my-3'>We are the team of talented developer making websites</h2>
                                    <div className='mt-4 btn-get-starated'>
                                        <Link to={props.visit} className='btn-get-started' >{props.btnname}</Link>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6 order-1 order-md-2 header-img flex-column d-flex justify-content-end  banner-image'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
