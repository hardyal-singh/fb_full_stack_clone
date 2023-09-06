import React from 'react'
import {useNavigate} from "react-router-dom";
import "./Nfound.css";


export default function Nfound() {
  const navigate=useNavigate();
  let Fun =()=>{
    navigate("/") }
  return (
    <div className='page-no-found'>
        <button className='page-no-found-button' onClick={Fun}>Home</button> 
    </div>
  )
}
                  