import React, { useState ,useEffect} from "react";
import "./login.css";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate()

useEffect(()=>{
    let token=Cookie.get("user_")
    if (token){
      navigate("/")
    }
  })

  const [userdata, setUserdata] = useState({});
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
  setUserdata((prevalue) => ({ ...prevalue, [name]: value }));
  };

  let handleSubmit= async(e)=>{
    e.preventDefault();
    let res=await fetch("http://localhost:5000/login",{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
    })
    let data=await res.json();
    if (data.status==="ok"){
      Cookie.set("user_",data.user_,{expires:1});
      navigate("/")
      
    }else {
      alert(data.message)
    }
    
  }
  return (
    <div className="login">
      <div className="login_left">
        <h1 className="login_left_headline">facebook</h1>
        <p className="login_left_text">
          Facebook helps you connect and share
          <br /> with the people in your life.
        </p>
      </div>
      <div className="login_right">
        <form className="login_right_container" onSubmit={handleSubmit} >
          <input
            type="email"
            name="email"
            value={userdata.email}
            placeholder="Email address and Phone number"
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={userdata.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br></br>
          <input type="submit" className="login_link" value={"Login"} />
          <p className="login_right_forget">
            {" "}
            <a href="/password">forgotten password?</a>{" "}
          </p>
          <p className="line"></p>
          <input type="button" value="Create new account" onClick={()=>{navigate("/signup")}}/>
        </form>
        <div className="login_right_bottom">
          <p className="login_right_bottom_text">
            <a href="/#jj">Create a Page</a> for celebrity,brand or bussiness.
          </p>
        </div>
      </div>
    </div>
  );
}
