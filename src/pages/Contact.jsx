import React from 'react'
import { useState } from 'react'

const initialState = {
    fullName: "",
    email: "",
    phone: '',
    massage: ''
}


export const Contact = () => {

    const [state, setState] = useState(initialState)


    const handleChange = (e) => {
        const { name, value } = e.target
        // setState(s => ({ ...s, [e.target.name]: e.target.value }))
        setState(s => ({ ...s, [name]: value }))
        // console.log("field name", e.target.name)
        // console.log("field value", e.target.value)x

    }








    const submitHandle = (e) => {

        setState(initialState)

        e.preventDefault();

        console.log(state)
        // const { fullName, email, password, confirmPassword } = state
        // console.log(fullName)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPassword)
        // console.log("fullName =>", fullName)
        // console.log("email =>", email)
        // console.log("password =>", password)
        // console.log("confirm password =>", confirmPassword)
    
    
    
    }

    // const submitHandle = (e) => {

    // }

    return (
        <>
            <div>
                <h1 className='text-center mt-3 mb-3'>Contact us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12  col-lg-6 col-sm-12 mx-auto">
                        
                        <form onSubmit={submitHandle}>
                            <div className="form-floating" >
                                <input type="text" className="form-control mb-4" placeholder="Type full name" name='fullName' value={state.fullName} onChange={handleChange} />
                                <label>Full Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="number" className="form-control mb-4" placeholder="Phone number" name='phone' value={state.phone} onChange={handleChange} />
                                <label>Phone number</label>
                            </div>
                            <div className="form-floating mt-2 mb-4">
                                <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" name='email' value={state.email} onChange={handleChange} />
                                <label >Email address</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control mb-3" placeholder="Leave a massage here" id="floatingTextarea2" style={{ height: '70px' }} name='massage' value={state.massage} onChange={handleChange}></textarea>
                                <label>Message</label>
                            </div>
                            <div className='btn d-flex align-items-center m-auto  justify-contant-center w-50'>
                                <button className='btn btn-outline-primary mb-4 w-100' onClick={submitHandle} style={{ letterSpacing: '3px' }}  >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
