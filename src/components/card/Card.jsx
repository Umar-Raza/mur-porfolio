import { React } from 'react'

import { Link } from 'react-router-dom'

import './Card.css'
export const Card = (props) => {


    // const clickHandle = (e) => {
    //     e.preventDefault();
    // }




    return (
        <>
            <div className="col-md-4 col-10  mx-auto " >
                <div className="card"  >
                    <img src={props.imgSrc} className="card-img-top" alt="Images" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/contact"  className="btn btn-outline-primary" >Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
