import React,{useState,useEffect} from 'react'
import axios from "axios";

const page = () => {
    const initialState={
        name:"",
        email:"",
        password:""
       }
       const [state,setState]=useState("");
    
       const [input,setInput]=useState(initialState)
    
      const handleChange=(event)=>{
        setInput({...input,[event.target.name]:event.target.value});
    
      }

    const handleClick=()=>{
        axios.post(`http://localhost:8080/login`,input).then(response=>{
            alert("sucess")
          setInput(initialState);
         console.log(input);
     
         }).catch(err=>{
           console.log(err);
         })
    }
  return (
    <div>
<h1>Fill your details</h1>
<input type={"text"} name={"name"} value={input.name} placeholder="Name" onChange={handleChange}/><br/>
<input type={"text"} name={"email"} value={input.email} placeholder="Email" onChange={handleChange}/><br/>

<input type={"text"} name={"password"} value={input.password} placeholder="Password" onChange={handleChange}/><br/>

<button onClick={handleClick}>

  Submit
</button>
    </div>
  )
}

export default page