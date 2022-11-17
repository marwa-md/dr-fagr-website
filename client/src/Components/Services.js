import React from 'react'
import Image from '../img/street-og.jpg'
import Cleaning from '../img/cleaning.jpg'
import Smile from '../img/smile.jpg'
import Crown from '../img/elena.jpg';
import RCT from '../img/jonathan.jpg'
import Denture from '../img/enis.jpg'
import Whiten from '../img/diana.jpg'
import $ from 'jquery';


const Services = () => {
    $(document).ready(function(){
        var EqualHeight = 0;
        $('.shadow-style').each(function(){
            if($(this).height() > EqualHeight){
                EqualHeight = $(this).height();
            }
        });
        $('.shadow-style').height(EqualHeight);
       });
  return (
    <div className='services text-center'>
      <h1>Accepting New Patients</h1>
      <h1>Best Deal On Veneers, Teeth Whitening and Cosmetic Dentistry</h1>
      <hr></hr>

<div className='services-row '>
      <div className='shadow-style' >
        <h3>Professional Dental Cleaning</h3>
        <img src={Cleaning}></img>
        <p>Professional teeth cleanings are so important in maintaining healthy gums
            and teeth. Regular dental check-ups are recommended every 4-6 months to 
            preserving your dental health.These critical dental visits 
            involve multiple important levels of preventive dental care.</p>
      </div>

      <div className='shadow-style' >
        <h3>Dental Fillings</h3>
        <img src={Smile}></img>
        <p>Dr.Fagr El-Kordofany uses the most recent approaches in providing 
            treatment for tooth decay.In a relaxing and professional environment, Dr.Fagr asseses the extent 
            of your cavity, plans the best treatment choice and restores the tooth back to maintain function as well as esthetics.
        </p>
      </div>

      <div className='shadow-style' >
        <h3>Crowns and Bridges</h3>
        <img src={Crown}></img>
        <p>Dr.Fagr El-Kordofany has extensive experience in crown and bridge work. From crowns to restore esthetics, crowns 
            to protect fragile teeth to bridges to restore looks and function.
        </p>
      </div>

      <div className='shadow-style' >
        <h3>Root Canal Treatment</h3>
        <img src={RCT}></img>
        <p>Root canal treatments when done by an experienced dentist can be a great 
            option to save tooth structure and prevent complications from tooth loss. A cost effective treatment that provides 
            great alternative to tooth extraction.
        </p>
      </div>

      <div className='shadow-style' >
        <h3>Complete and partial dentures</h3>
        <img src={Denture}></img>
        <p>Smile with confidence with complete or partial dentures that are discrete 
            and comfortable to wear. In just few visits you can have an appliance fitted 
            to your needs.
        </p>
      </div>

      <div className='shadow-style' >
        <h3>Teeth Whitening</h3>
        <img src={Whiten}></img>
        <p>I offer both in-office teeth whitening service using the most recent 
            technology in teeth whitening as well as take home teeth bleaching trays
            that help you maintain your teeth whitening results.
        </p>
      </div>

    

     
    </div>
    </div>
  )
}

export default Services
