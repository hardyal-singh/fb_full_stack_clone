import React,{useEffect} from "react";
import Header from "../header/header";
import Side1 from "../side1/side1";
import Side2 from "../side2/side2";
import { Outlet } from "react-router-dom";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

export default function Home() {
  let navigate=useNavigate()
useEffect(()=>{
  let token=Cookie.get("user_")
  if(! token){
    navigate("/login")
  }
})
  return (<div className="home">
    <div className="home_top">
      <Header/>
    </div>
    <div className="home_bottom">
      <Side1/>
      <Outlet className="outlet"/>
      <Side2/>
    </div>
    </div>
  )
      
    
    
}
