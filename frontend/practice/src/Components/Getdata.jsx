import React,{ useState } from 'react'
import "./Getdata.css";
import axios from "axios";

const Getdata = () => {

    const initialState = {
        name: "",
        email: "",
        city: "",
        phone:"",
        question:"",
        insta:"",

      };
    
      const [input, setInput] = useState(initialState);
    
      const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
      };
      const handleClick = () => {
        axios.post(`http://localhost:8080/`, input).then((response) => {
            alert("sucess");
            setInput(initialState);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      

  return (
    <div>
        <div id='Main-header' >
            <div className='Box'>
        <form >
            <center> <h1>Enter Your Details</h1></center>
            <center> <span>All Fields Are Required To Submit Your Form</span></center>
  <div className="mb-3">
    <label  className="form-label"> Your Name </label>
    <input className="form-control" type="text" placeholder='Enter Your Fullname' name={"name"} value={input.name} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label  className="form-label"> Email </label>
    <input className="form-control" type="email" placeholder='Enter Your Email' name={"email"} value={input.email} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label  className="form-label"> Town/City/Place </label>
    <input className="form-control" type="text" placeholder='Your Current City' name={"city"} value={input.city} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label  className="form-label"> Contact Details </label>
    <input maxLength="10" className="form-control" type="text" placeholder='without+91' name={"phone"} value={input.phone} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">You want to talk to me</label>
    <input maxLength="3" className="form-control" type="text" placeholder='Type yes/No' name={"question"} value={input.question} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Your Instagram I'd</label>
    <input maxLength="20" className="form-control" type="text" placeholder='Enter your Id' name={"insta"} value={input.insta} onChange={handleChange}/>
  </div>
 
 
</form>
<button type="submit" className="btn btn-primary"  onClick={handleClick}>
    Submit
  </button>

</div>
</div>

<center> <h4> &#169;2022 by Rajnish Aryan All Rights Reserved.</h4></center>

    </div>
  )
}

export default Getdata