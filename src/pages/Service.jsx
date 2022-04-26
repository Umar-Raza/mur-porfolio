import React from 'react'
import { Card } from '../components/card/Card'
import SData from '../constant/serviceData/ServiceData'
export  const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center mb-5 fw-bold'>Our Services</h1>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-10 mx-auto">
              <div className="row gy-4">
                {
                  SData.map((items, index) => {
                    return <Card key={index}
                      imgSrc={items.imgSrc}
                      title={items.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
