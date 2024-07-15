import React from "react";
import filter from "../../assets/filter-results-button.svg";

interface HeaderBoxProps {
  title: string;
  className?: string;
  onFilterClick: () => void;
  isFilterOpen: boolean;
}

const DataHeader: React.FC<HeaderBoxProps> = ({ title, className,onFilterClick, isFilterOpen }) => {
  return (
    <div className={`users-headers-box ${className}`}>
      <p>
        {title}{" "}
        <span onClick={onFilterClick}>
          <img src={filter} alt="filter" />
        </span>
      </p>
    </div>
  );
};

export default DataHeader;
