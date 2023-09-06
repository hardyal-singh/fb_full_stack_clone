import React from "react";
import "./side2.css";
import { BsThreeDots, BsInfoCircleFill, BsGlobeAmericas } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
export default function side2() {
  return (
    <div className="side2">
      <div className="first">
        <p className="bold_name"> Manage Page</p>
        <BsThreeDots className="side2_icons icon1" />
      </div>
      <button className="second">
        <img src="media/profile.jpg" className="side2_img" alt="profile"  /> <p className="bold_name">Hardyal Singh</p>
      </button>
      <button className="third">
        <div className="third_left">
          <BsGlobeAmericas className="side2_icons" />
          <p className="p2">Post reach</p> <BsInfoCircleFill />
        </div>
        <div className="third_right">
          <p className="p2">1</p>
        </div>
      </button>
      <button className="third">
        <div className="third_left">
          <IoMdContacts className="side2_icons" />
          <p className="p2">Post Engagement</p> <BsInfoCircleFill  />
        </div>
        <div className="third_right">
          <p className="p2">1</p>
        </div>
      </button>
      <button className="third">
        <div className="third_left">
          <AiTwotoneLike className="side2_icons" />
          <p className="p2">New page likes</p> <BsInfoCircleFill  />
        </div>
        <div className="third_right">
          <p className="p2">1</p>
        </div>
      </button>
      <button className="third">
        <div className="third_left">
          <HiSpeakerphone className="side2_icons" />
          <p className="p2">Create promotion</p> 
        </div>
      </button>
      
    </div>
  );
}
