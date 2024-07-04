import React from "react";
import filter from "../../assets/filter-results-button.png";

interface HeaderBoxProps {
  title: string;
  className?: string;
}

const DataHeader: React.FC<HeaderBoxProps> = ({ title, className }) => (
  <div className={`users-headers-box ${className}`}>
    <p>
      {title}{" "}
      <span>
        <img src={filter} alt="filter" />
      </span>
    </p>
  </div>
);

export default DataHeader;
