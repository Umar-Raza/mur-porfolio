import React from 'react'
import { Common } from '../components/common/Common'
// import web from '../../assets/img/home.png'
import web from '../assets/img/home.png'

export const Home = () => {
  return (
    <div>
      <Common
        name='Grow Your Business with'
        imgsrc={web}
        style={{ imgShadd: "5px" }}
        visit="/service"
        btnname='Get Started' />
    </div>
  )
}
