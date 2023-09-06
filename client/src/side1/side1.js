import React from "react";
import "./side1.css";
import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsFillDisplayFill } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";
import {FaSignOutAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie"

export default function Home() {
 let Navigate=useNavigate();
  let signout=()=>{
    Cookie.remove("user_");
    Navigate("/login")
  }
  return (
    <div className="sideBar">
      <button type="button" className="side1_button">
        <AiFillHome className="icon" /> <p>Home page</p>
      </button>
      <button type="button" className="side1_button">
        <img alt="pic" className="side1_img" src="media\profile.jpg" /> <p>Hardyal Singh</p>
      </button>
      <p className="side1_line"></p>
      <button type="button" className="side1_button">
        <img alt="pic" className="side1_img" src="media\admanager.png" /> <p>Ads Manager</p>
      </button>
      <button type="button" className="side1_button">
        <img alt="pic" className="side1_img" src="media\ads.png" /> <p>Ad Center</p>
      </button>
      <button type="button" className="side1_button">
        <MdDashboard className="icon" /> <p>Professinal dashboard</p>
      </button>
      <button type="button" className="side1_button">
        <BsFillDisplayFill className="icon" /> <p>Watch</p>
      </button>
      <button type="button" className="side1_button">
        <img alt="pic" className="side1_img" src="media\feeds.png" /> <p>Feeds</p>
      </button>
      <p className="side1_line"></p>
      <button type="button" className="side1_button" >
        <IoIosContacts className="icon" /> <p>See all group</p>
      </button>
      <p className="side1_line"></p>
      <button type="button" className="side1_button">
        <img alt="pic" className="side1_img" src="media\profile.jpg" /> <p>Hardyal Singh</p>
      </button>
      <button type="button" className="side1_button">
        <AiOutlineLink className="icon" /> <p>See all Shortcuts</p>
      </button>
      <button type="button" className="side1_button" onClick={signout}>
      <FaSignOutAlt className="icon" /> <p>Sign out </p>
      </button>
    </div>
  );
}
