import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/ic-more-vert-18px.svg";

interface UserDataProps {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
}

const UserData: React.FC<UserDataProps> = ({
  id,
  organization,
  username,
  email,
  phoneNumber,
  dateJoined,
  status,
}) => {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active  status_all";
      case "inactive":
        return "status-inactive status_all";
      case "pending":
        return "status-pending  status_all";
      case "blacklisted":
        return "status-blacklisted  status_all";
      default:
        return "";
    }
  };

  return (
    <div className="data">
      <div className="org status_all">
        <Link to={`/user/${id}`}>{organization}</Link>
      </div>
      <div className="usr status_all">{username}</div>
      <div className="email status_all">{email}</div>
      <div className="num status_all">{phoneNumber}</div>
      <div className="date status_all">{dateJoined}</div>
      <div className={`status ${getStatusClass(status)}`}>{status}</div>
      <img src={menuIcon} alt="menu-icon" className="status_all menu-icon" />
    </div>
  );
};

export default UserData;
