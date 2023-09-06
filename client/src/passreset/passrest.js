import React ,{useState} from "react";
import "./passreset.css";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";


export default function Password() {
  const navigate=useNavigate();
  const [email, setEmail]=useState();
  
  console.log(email);

  let handlSubmit=async(e)=>{
    e.preventDefault();
    let res=await fetch("http://localhost:5000/passreset_email",{
      method:"PUT", 
      headers:{
       "content-type":"application/json"
      },
      body:JSON.stringify({email})
    })
    let result =await res.json();
    console.log(result);
    if (result.status==="ok"){
      alert(result.message);
      Cookie.set("reset_token",result.resettoken,{expires:1});
      navigate("/setpassword")
    }else{
      alert(result.message);
    }
  }
  return (
    <div className="password_reset_container">
      <div className="password_main_container">
        <h1>Find Your Account</h1>
        <hr></hr>
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <form onSubmit={handlSubmit}>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter email address" required />
          <input type="submit" value={"Search"} />
        </form>
      </div>
    </div>
  );
}
