import React from "react";
import "./header.css"
import { BsMessenger } from "react-icons/bs";
import { MdCircleNotifications } from "react-icons/md";
export default function header() {
  return (
    <div className="header">
      <h1 className="fb_logo">facebook</h1>
      <input type="search" placeholder="facebbok search" />
      <div className="header_last_part">
        <BsMessenger className="header_icon"/>
        <MdCircleNotifications className="header_icon" />
        <img src="./media/profile.jpg" alt="profile" className="header_img"/>
      </div>
    </div>
  );
}
