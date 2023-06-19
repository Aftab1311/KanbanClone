import React, { useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { TbMessageDots } from "react-icons/tb";
import { GrTask } from "react-icons/gr";
import { RiGroupLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import lamp from "../Images/lamp.jpg";
const Sidebar = ({ sidebarOpen }) => {
  console.log(sidebarOpen);
  return (
    <div className="sidebar" style={{ width: sidebarOpen ? "250px" : "0px" }}>
      <div className="sidebar_items">
        <ul>
          <li>
            <RxDashboard /> Dashboard
          </li>
          <li>
            <TbMessageDots /> Messages
          </li>
          <li>
            <GrTask /> Tasks
          </li>
          <li>
            <RiGroupLine /> Teams
          </li>
          <li>
            <FiSettings /> Settings
          </li>
        </ul>
      </div>
      <hr className="hrline"/>
      <div className="project">
        <div className="project_title">
          <h2>my projects</h2>
          <span>
            <BiMessageSquareAdd />
          </span>
        </div>
        <ul>
          <li className="active">
            <span
              style={{
                background: "#7AC555",
              }}
            ></span>
            Mobile App
            <span className="active">
              <BsThreeDots />
            </span>
          </li>
          <li>
            <span
              style={{
                background: "#FFA500",
              }}
            ></span>
            Website Redesign
            <span>
              <BsThreeDots />
            </span>
          </li>
          <li>
            <span
              style={{
                background: "#E4CCFD",
              }}
            ></span>
            Design System
            <span>
              <BsThreeDots />
            </span>
          </li>
          <li>
            <span
              style={{
                background: "#76A5EA",
              }}
            ></span>
            Wireframes
            <span>
              <BsThreeDots />
            </span>
          </li>
        </ul>
      </div>
      <div className="thought_box">
        <span className="lamp">
          <img src={lamp} alt="lamp" />
        </span>
        <h2>Thoughts time</h2>
        <p>
          We don't have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <input type="submit" placeholder="write something..." />
      </div>
    </div>
  );
};

export default Sidebar;
