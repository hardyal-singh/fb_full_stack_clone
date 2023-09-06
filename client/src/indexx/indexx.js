import React from "react";
import { useState } from "react";
import "./indexx.css";
import story1 from "./media2/story1.jpg";
import story2 from "./media2/story2.jpg";
import story3 from "./media2/story3.jpg";

import Elon from "./media2/elon.jpg";
import Jeff from "./media2/jeff.jpg";
import Ratan from "./media2/ratan.jpg";
import Harsh from "./media2/my.jpg";

import Tata from "./media2/tata.png";
import Amazon from "./media2/amazon.jpg";
import SapceX from "./media2/spacex.jpg";

import { MdAutoStories } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoLibrary, MdVerified } from "react-icons/md";
import { BiHappyAlt, BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

export default function Indexx() {
  let [like,setLike] =useState();

  let fun=()=>{
    setLike(1);
  }
  const Story = [
    { id: 1, src: story1, alt: "rakesh" },
    { id: 2, src: story2, alt: "narendra" },
    { id: 3, src: story3, alt: "dipsa" },
    { id: 4, src: Ratan, alt: "ratan" },
    { id: 5, src: Jeff, alt: "jeff" },
  ];

  const Posts = [
    {
      id: 1,
      name: "Elon Musk",
      disc: "Hello Everyone",
      ProfileSrc: Elon,
      postSrc: SapceX,
    },
    {
      id: 2,
      name: "Jeff bezos",
      disc: "Amazon",
      ProfileSrc: Jeff,
      postSrc: Amazon,
    },
    {
      id: 3,
      name: "Ratan Tata",
      disc: "I love India",
      ProfileSrc: Ratan,
      postSrc: Tata,
    },
    {
      id: 4,
      name: "Harsh Badgujars",
      disc: "Happy holi",
      ProfileSrc: Harsh,
      postSrc: Harsh,
    },
  ];
  return (
    <div className="indexx">
      <div className="indexx_top">
        <div className="indexx_top_buttons">
          <button type="button" className="in_top_button">
            <MdAutoStories className="in_top_icons" />
            <p className="top_buttons_name">Stories</p>
          </button>
          <button type="button" className="in_top_button">
            <img
              src="media/instareels.png"
              alt="instareelicon"
              className="in_top_icons"
            />
            <p className="top_buttons_name">Reels</p>
          </button>
        </div>
        <p className="indexx_line"></p>
        <div className="indexx_top_stories">
          <div className="my_story">
            <img src="media/profile.jpg" alt="story" />
            <AiFillPlusCircle className="story_plus" />
          </div>
          <div className="others_stories">
            {Story.map((el) => {
              return (
                <img
                  src={el.src}
                  alt={el.alt}
                  className="other_sto"
                  key={el.id}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="indexx_post_part">
        <div className="post_part_first">
          <img
            src="media/profile.jpg"
            className="post_part_profile"
            alt="profile"
          />
          <input
            type="search"
            value="What's on your mind,Hardyal ?"
            className="indexx_search"
          />
        </div>
        <p className="indexx_line"></p>
        <div className="post_part_second">
          <button type="button" className="post_part_button">
            <RiLiveFill className="post_part_icon icon1" />
            <p>Live video</p>
          </button>
          <button type="button" className="post_part_button">
            <MdPhotoLibrary className="post_part_icon icon2" />
            <p>Photo/video</p>
          </button>
          <button type="button" className="post_part_button">
            <BiHappyAlt className="post_part_icon icon3" />
            <p>Filling/activity</p>
          </button>
        </div>
      </div>

      <div className="posts">
        {Posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="post_top">
                <div className="top_left">
                  <img
                    src={post.ProfileSrc}
                    className="post_profile"
                    alt={post.alt}
                  />
                  {post.name}
                  <MdVerified className="verify_mark" />
                </div>
                <div className="top_right">
                  <BiDotsHorizontalRounded />
                </div>
              </div>

              <div className="post_middle">
                <p className="disc">{post.disc}</p>
                <img src={post.postSrc} className="post_pic" alt="postx" />
              </div>

              <div className="post_bottom">
                <div className="post_bottom_first">
                  {like}
                  <FaRegCommentAlt className="bottom_icons" />
                </div>
                <p className="indexx_line"></p>
                <div className="post_bottom_second">
                  <div className="post_bottom_last">
                   <BiLike onClick={()=>{fun()} } key={Posts.id}  /><p>Like</p>
                  </div>
                  <div className="post_bottom_last">
                    <FaRegCommentAlt />
                    <p>Comment</p>
                  </div>
                  <div className="post_bottom_last">
                    <IoIosShareAlt />
                    <p>Share</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
