import React ,{useState,useEffect} from 'react'
import Cookie from "js-cookie"
import "./Setpassword.css";
import { useNavigate } from 'react-router-dom';

export default function Setpassword() {
  const navigate =useNavigate();

  useEffect(()=>{
    let token =Cookie.get("reset_token");
  if (!token){
    navigate("/login")
  }
  })
 const [resetpass,setRestpass]=useState({});
 let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
     setRestpass(preValue=>({...preValue,[name]:value}))}

let handleSubmit =async(e)=>{
    e.preventDefault();
    let token=Cookie.get("reset_token");
    let res=await fetch("http://localhost:5000/setpass",{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({data:resetpass,token:token})
    })
    let result =await res.json();
    if(result.status==="ok"){
        Cookie.remove("reset_token");
        alert(result.message);
        navigate("/login");
    }else{
        alert(result.message);
    }
    
}
 
  return (
    <div className='setpass_container'>
      <form  onSubmit={handleSubmit} className='setpass_main_container'>
        <h1>Reset Password</h1>
        <hr></hr>
        <input type="text" value={resetpass.code} name="code" onChange={handleChange} placeholder='Enter email code' pattern='[0-9]{6}' title='Enter 6 digit code' required/>
        <input type='password' value={resetpass.newPassword} name='newPassword' onChange={handleChange} placeholder='Set new password' required/>
        <input type="submit" value={"Save"}/>
      </form>
    </div>
  )
}
