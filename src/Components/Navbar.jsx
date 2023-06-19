import React, { useState } from "react";
import "../App.css";
import logo from "../Images/logo.jpg";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsCalendarWeek } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import profile from "../Images/profile.jpg";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
const Navbar = ({ toggle, sidebarOpen }) => {
  return (
    <div className="navbar_container">
      <div className="brandName">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">Project M.</div>
        <span onClick={toggle} style={{ cursor: "pointer" }}>
          <AiOutlineDoubleLeft />
        </span>
      </div>
      <div className="searchbar">
        <span>
          <CiSearch style={{ fontSize: "30px", color: "#787486" }} />
        </span>
        <input type="text" placeholder="Search for anything..." />
      </div>
      <div className="icons">
        <BsCalendarWeek />
        <RiQuestionnaireLine />
        <BsBell />
      </div>
      <div className="profile_details">
        <div className="profile_text">
          <h2 className="headtext">Anima Agrawal</h2>
          <h3 className="subtext">U.P, India</h3>
        </div>
        <div className="profile_img">
          <img
            style={{ borderRadius: "50%", margin: "10px" }}
            src={profile}
            alt="logo"
          />
        </div>
        <span>
          <HiChevronDown style={{ fontSize: "20px" }} />
        </span>
      </div>
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Navbar;
