import {React,useEffect,useState} from 'react'

function Records  ()  {

    const [records,setRecords] = useState([{
        
        name : '',
        phone:'',
        email: '',
        message: ''
 
       }])

       useEffect(()=>{
        fetch("/records").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jRes => setRecords(jRes));
       })
   

  return (
    <div className='contact'>
        <h1>Contact Requests from patients</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Message</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>
  <tbody>

  {records.map(
            record => 
           
            <tr>
    
            <th scope="row">{record.name}</th>
            <td>{record.message}</td>
            <td> {record.phone}</td>
            <td > {record.email}</td>
        
          </tr>
       
        )
        }
   </tbody>
</table>

                </div>

  )
}

export default Records
