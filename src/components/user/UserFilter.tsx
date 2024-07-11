import React, { useEffect, useState } from "react";
import dateIcon from "../../assets/np_calendar_.svg";

interface FilterPopupProps {
  isOpen: boolean;
  onApply: (filters: FilterCriteria) => void;
  onClose: () => void;


}

interface FilterCriteria {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const UserFilter: React.FC<FilterPopupProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {
    if (!isOpen) {
      setOrganization("");
      setUsername("");
      setEmail("");
      setDate("");
      setPhoneNumber("");
      setStatus("");
    }
  }, [isOpen]);

  const handleApply = () => {
    onApply({ organization, username, email, date, phoneNumber, status });
    onClose();
  };

  const handleReset = () => {
    setOrganization("");
    setUsername("");
    setEmail("");
    setDate("");
    setPhoneNumber("");
    setStatus("");
  };

  if (!isOpen) return null;

  return (
    <div className="filters">
      <form>
        <div className="form-group">
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Organization"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <div className="date-input">
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              className="dates"
            />
            <img src={dateIcon} alt="" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className="btn">
          <button type="button" className="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="button"  onClick={handleApply}>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
