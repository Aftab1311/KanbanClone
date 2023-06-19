import React  from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { RiAddBoxLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";
import dots from "../Images/4dots.png";
import pic1 from "../Images/Ellipse 12.png";
import pic2 from "../Images/Ellipse 13.png";
import pic3 from "../Images/Ellipse 14.png";
import pic4 from "../Images/Ellipse 15.png";
import pic6 from "../Images/Ellipse 17.png";

const Dashboard = ({ sidebarOpen }) => {
  return (
    <div
      className="dashboard_container"
      style={{
        paddingLeft: sidebarOpen ? "250px" : "0px",
      }}
    >
      <div className="mobile_section">
        <div className="title_section">
          <h1>Mobile App</h1>
          <span>
            <MdOutlineEdit className="icon" />
          </span>
          <span>
            <FiLink2 className="icon" />
          </span>
        </div>

        <div className="section2">
          <select className="dropdown">
            <option>Filter</option>
          </select>
          <select className="dropdown">
            <option>Today</option>
          </select>
        </div>
      </div>

      <div className="section3">
        <div className="topsection">
          <span className="icon">
            <RiAddBoxLine />
          </span>
          <h1>Invite</h1>
          <img
            className="profilepic"
            style={{ "--i": "0" }}
            src={pic1}
            alt="pic1"
          />
          <img
            className="profilepic"
            style={{ "--i": "1" }}
            src={pic2}
            alt="pic1"
          />
          <img
            className="profilepic"
            style={{ "--i": "2" }}
            src={pic3}
            alt="pic1"
          />
          <img
            className="profilepic"
            style={{ "--i": "3" }}
            src={pic4}
            alt="pic1"
          />
          <img
            className="profilepic"
            style={{ "--i": "4" }}
            src={pic6}
            alt="pic1"
          />
        </div>
        <div className="bottom_section">
          <button>
            <span className="group">
              <RiGroupLine />
            </span>
            Share
          </button>
          <span className="vertical"></span>
          <span className="bluebox">
            <FaEquals />
          </span>
          <img
            className="dots"
            src={dots}
            alt="4dot"
            style={{ width: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
