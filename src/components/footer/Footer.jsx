import { React, Link } from 'react'

import './Footer.css'
export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col py-2 text-center text-dark">
                            <p className=" "> &copy; {new Date().getFullYear()} . All Right reserved | Terms and Conditions |
                                <a href="mailto:chintoraza279@gmail.com" className='m-2 f-Link'>Muhammad Umar</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
