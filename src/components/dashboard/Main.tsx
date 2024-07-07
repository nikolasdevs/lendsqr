import { useEffect, useState } from "react";
import iconBox1 from "../../assets/usersIcon.svg";
import iconBox2 from "../../assets/usersIcon2.svg";
import iconBox3 from "../../assets/usersIcon3.svg";
import iconBox4 from "../../assets/usersIcon4.svg";
import UserData from "../user/UserData";
import DataHeader from "./DataHeader";
import ReactPaginate from "react-paginate";
import { addUserToDB, getUsersFromDB, clearUsersFromDB } from "./Db";
import UserFilter from "../user/UserFilter";

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNum: string;
  dateJoined: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
  hasLoan: boolean;
  hasSavings: boolean;
}

const Main = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const usersPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [filters, setFilters] = useState<{
    organization: string;
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: string;
  }>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeUsersCount, setActiveUsersCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsersFromDB();
        if (users.length > 0) {
          setUserData(users);
          setLoading(false);
        } else {
          const response = await fetch(
            "https://run.mocky.io/v3/9d1249cf-7b7b-439a-b436-602c3bcee2cd"
          );
          const data = await response.json();
          await clearUsersFromDB();
          data.forEach(async (user: User) => await addUserToDB(user));
          setUserData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Calculate the number of active users
    const calculateActiveUsers = () => {
      const activeCount = userData.filter(
        (user) => user.status === "active"
      ).length;
      setActiveUsersCount(activeCount);
    };

    calculateActiveUsers();
  }, [userData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredUsers = userData.filter((user) => {
    const organizationMatch = filters.organization
      ? user.organization
          .toLowerCase()
          .includes(filters.organization.toLowerCase())
      : true;
    const usernameMatch = filters.username
      ? user.username.toLowerCase().includes(filters.username.toLowerCase())
      : true;
    const emailMatch = filters.email
      ? user.email.toLowerCase().includes(filters.email.toLowerCase())
      : true;
    const dateMatch = filters.date
      ? user.dateJoined.toLowerCase().includes(filters.date.toLowerCase())
      : true;
    const phoneNumberMatch = filters.phoneNumber
      ? user.organization
          .toLowerCase()
          .includes(filters.phoneNumber.toLowerCase())
      : true;
    const statusMatch = filters.status
      ? user.status.toLowerCase().includes(filters.status.toLowerCase())
      : true;

    return (
      organizationMatch &&
      usernameMatch &&
      emailMatch &&
      dateMatch &&
      phoneNumberMatch &&
      statusMatch
    );
  });

  const endOffset = itemOffset + usersPerPage;
  const currentUsers = filteredUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / usersPerPage);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemOffset(Number(event.target.value));
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  const toggleFilterPopup = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterApply = (filters: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: string;
  }) => {
    setFilters(filters);
  };

  return (
    <div className="userData">
      <div className="title">Users</div>

      <div className="title-boxes">
        <div className="title-box">
          <img src={iconBox1} alt="" />
          <p>USERS</p>
          <p className="fig">{userData.length}</p>
        </div>
        <div className="title-box">
          <img src={iconBox2} alt="" />
          <p>ACTIVE USERS</p>
          <p className="fig">{activeUsersCount}</p>
        </div>
        <div className="title-box">
          <img src={iconBox3} alt="" />
          <p>USERS WITH LOANS</p>
          <p className="fig">
            {userData.filter((user) => user.hasLoan).length}
          </p>
        </div>
        <div className="title-box">
          <img src={iconBox4} alt="" />
          <p>USERS WITH SAVINGS</p>
          <p className="fig">
            {userData.filter((user) => user.hasSavings).length}
          </p>
        </div>
      </div>

      <div className="dataBox">
        <div className="users-headers">
          <DataHeader
            title="ORGANIZATION"
            className="org"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
          <DataHeader
            title="USERNAME"
            className="usr"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
          <DataHeader
            title="EMAIL"
            className="email"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
          <DataHeader
            title="PHONE NUMBER"
            className="num"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
          <DataHeader
            title="DATE JOINED"
            className="date"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
          <DataHeader
            title="STATUS"
            className="status"
            onFilterClick={toggleFilterPopup}
            isFilterOpen={isFilterOpen}
          />
        </div>

        {isFilterOpen && (
          <UserFilter
            isOpen={isFilterOpen}
            onApply={handleFilterApply}
            onClose={toggleFilterPopup}
          />
        )}
        {currentUsers.map((user) => (
          <div>
            <UserData
              key={user.id}
              id={user.id}
              organization={user.organization}
              username={user.username}
              email={user.email}
              phoneNumber={user.phoneNum}
              dateJoined={user.dateJoined}
              status={user.status}
            />
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <div className="select-box">
          <p>Showing </p>
          <div className="select">
            <select value={itemOffset} onChange={handleDropdownChange}>
              {Array.from({ length: pageCount }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>{" "}
          </div>
          <p> out of {userData.length}</p>
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default Main;
