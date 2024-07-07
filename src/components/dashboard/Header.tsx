import React from "react";
import logo from "../../assets/logo.svg";
import icon from "../../assets/searchVector.svg";
import notification from "../../assets/np_notification_ 1.svg";
import avatar from "../../assets/avatar.svg";
import dropdown from "../../assets/dropdownVector.svg";

const Header = () => {
  return (
    <div className="nav">
      <div className="leftNav">
        <img src={logo} alt="" />
        <div className="searchBox">
          <input placeholder="Search for anything" type="text" />
          <span>
            <img src={icon} alt="" />
          </span>
        </div>
      </div>

      <div className="rightNav">
        <div className="docs">
          <p>Docs</p>
        </div>
        <div className="profile">
          <img src={notification} alt="" />
          <div className="avatar">
            <img src={avatar} alt="" />
            <p>
              Adedeji{" "}
              <span>
                <img src={dropdown} alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
