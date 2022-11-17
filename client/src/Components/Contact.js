
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form , setForm] = useState({
    name : '',
    phone:'',
    email : '',
    message : ''
  });
  
  const [show , setShow ] = useState(false);
  
  const handleChange = (e)=>{
  const {name , value} = e.target;
  
  setForm (prevInput =>{
    return {
      ...prevInput,
      [name]:value 
    }
  })
  }
  
  const submitForm = (e)=>{
    e.preventDefault();
    console.log (form);
  
    const record = {
      name : form.name,
      phone : form.phone,
      email : form.email,
      message : form.message
    };

    axios.post("https://drfagr.herokuapp.com/add", record)
    .then((res)=> console.log(res))
    .catch ((err)=>console.log(err));
    setShow(!show);
  };
  
  return (
    <div className='contact'>
    <h1 className='text-center'>Book Your Appointment Today!</h1>
    <hr></hr>
    <p >If you have a question do not hesitate to contact me by 
        filling up this form. I will get back to you as soon as possible. 
       </p>
       {

        !show && (
       
     <form  onSubmit={submitForm}>
          <div className="mb-3 mt-3">
            <label className="form-label">Name:</label>
        
            <input type="name" className="form-control"
             id="name" 
             value={form.name}
             onChange={handleChange}
        
             placeholder="Enter name" name="name" required ></input>
           
          </div>
        
          <div className="mb-3 mt-3">
            <label  className="form-label">Phone:</label>
        
            <input type="phone" class="form-control" id="phone"
          value={form.phone}
          onChange={handleChange}
        
              placeholder="Enter phone" name="phone"></input>
        
          </div>
        
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" id="email"
            value={form.email}
            onChange={handleChange}
        
              placeholder="name@example.com" name="email"></input>
        
          </div>
        
          <div className="mb-3 mt-3">
            <label className="form-label">Your message:</label>
        
            <textarea type="message" className="form-control" rows="4" id="message" 
        value={form.message}
        onChange={handleChange}
        
             placeholder="Your message here" name="message"></textarea>
            
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> )}
        {show && (
        <h1>Thank you for your submission !</h1>
      )}
        </div>
  );
}

export default Contact;
