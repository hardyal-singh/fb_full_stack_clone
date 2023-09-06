import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./email.css";
import Cookie from "js-cookie";

export default function Emailc() {
  const navigate = useNavigate();

  useEffect(()=>{
    let token=Cookie.get("conformemail");
    if(!token){
      navigate("/signup")
    }
  })

 
  const [code, setCode] = useState();

  const submitHandle = async (e) => {
    e.preventDefault();
    let token = Cookie.get("conformemail");
    let respone = await fetch("http://localhost:5000/conformmail", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code: code, token }),
    });
    let data = await respone.json();
    if (data.status === "ok") {
      alert(data.message);
      Cookie.remove("conformemail")
      navigate("/login");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="conform_email_container">
      <div className="conform_email_main">
        <h3>Enter the from your email</h3>
        <p>
          let us know that this email address belong to you. Enter the code from
          the email send to ..
        </p>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="FB-"
            required
            pattern="[0-9]{6}"
            title="Enter 6 code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <a href="#h">Send email again </a>
          <input type="submit" value={"Continue"} />
        </form>
      </div>
    </div>
  );
}
