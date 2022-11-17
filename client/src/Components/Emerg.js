import React from 'react'
import Image from '../img/pain.jpg'

const Emerg = () => {
  return (
    <div className='emerg'>
      <div >
        <div className='row text-center '>


<h1 >Dental Emergency</h1>


        </div>
<div className='row'>
    <div className='col-4 text-end'>
        <img src ={Image}></img>
    </div>
    <div className='col-6'>
        
        
        <p>
        In a dental emergency, every second matters. 
        That’s why we do our best to prioritize emergency care and deliver fast, effective treatment 
            that can be the difference between saving and losing teeth.
        
        </p>

    </div>
</div>

      </div>

    </div>
  )
}

export default Emerg
