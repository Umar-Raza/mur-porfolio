import React from 'react'
import './Navbar.css'

// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'


import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className=' bgColor ' >
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className='main-div '>
                                    <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
                                        <Link className="navbar-brand" to='/'>MUR</Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                                                <Link id="menu_active" className="nav-item nav-link active" to="/">Home</Link>
                                                <Link id="menu_active" className="nav-item nav-link " to="/service">Service</Link>
                                                <Link id="menu_active" className="nav-item nav-link " to="/About">About</Link>
                                                <Link id="menu_active" className="nav-item nav-link" to="/contact">Contact</Link>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >

    )
}

export default Navbar;