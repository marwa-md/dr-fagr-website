
import React from 'react'
import Image from '../img/street-og.jpg';
import {BsFillTelephoneFill as Icon ,BsFillEnvelopeFill as EIcon } from 'react-icons/bs';


const Intro = () => {
  return (
<div className='intro'>

<div className='row '>
  <div className='col-5 '>

  <h1 >
      Providing Excellent
       Dental Care
    </h1>
   
    <p className='mt-3 '>Welcome to Dr.Fagr El-Kordofany webpage. My aim is to deliver first-class dental care for all your family members. 
I take care of all my patients with customized dental care in a relaxing and welcoming environment</p>
<ul>
  <li>
<a href="tel:+249902051506"><Icon />+249 90 205 1506</a>
  </li>
  <li>
<a href="mailto:dr.sudaniaa@gmail.com"><EIcon />dr.sudaniaa@gmail.com</a>
  </li>
</ul>

  </div>
  
  <div className='col-7 text-center'>
<img src={Image}></img>
</div>
  </div>
  

      </div>

    
  )
}

export default Intro
