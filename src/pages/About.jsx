import React from 'react'
import { Common } from '../components/common/Common'
import AboutImg from '../assets/img/About.png'
export const About = () => {
  return (
    <>
      <Common  
      name='Wellcom to about page'
       imgsrc={AboutImg}  
       visit="/contact" 
       btnname='Contact Now' />
    </>
  )
}
