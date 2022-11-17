import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {BsFillTelephoneFill as Icon } from 'react-icons/bs';


const Navbar = () => {
 
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/contact"; 
    navigate(path);
  }
  return (
    <div className='header'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >Dr.Fagr El-Kordofany</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto ">
        <li class="nav-item">
        <Link to="/about" class="nav-link"  >About Me</Link>
          
        </li>
        <li class="nav-item">
          <Link to="/services" class="nav-link" href="">Services</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link" >Contact</Link>
        </li>
        <li class="nav-item">
          <a href="tel:+249902051506" class="nav-link" ><Icon /> +249 90 205 1506</a>
        </li>
      
      </ul>

      <ul class="navbar-nav ms-auto">
        <li>
        <button class="btn btn-danger navbar-btn " onClick={routeChange}>Request Appointment</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
