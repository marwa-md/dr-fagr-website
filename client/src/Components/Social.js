import React from 'react'
import Insta from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Linked from '../img/linked.png'

const Social = () => {
  return (
    <div className='social text-center '>
     
<h1>Follow me on social media</h1>
<div className='row'>
<div className='col'>
<a href="https://www.facebook.com/fagrelkordofany" target="_blank">
<img src= {Facebook}></img>
</a>
</div>

<div className='col'>
<a href="https://www.instagram.com/dr.fagr_elkordofany/" target="_blank">
    <img src={Insta}></img></a>
</div>


<div className='col'>
<a href="https://www.linkedin.com/in/fagr-elkordofany-a7b9b694/" target="_blank">
    <img src={Linked}></img></a>
</div>

  
</div>
<br></br>
<hr></hr>
<footer>Dr.Fagr El-Kordofany - 2022</footer>

    </div>
  )
}

export default Social
