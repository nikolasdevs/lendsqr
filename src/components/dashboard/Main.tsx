import { useEffect, useState } from "react";
import iconBox1 from "../../assets/box-icon1.png";
import iconBox2 from "../../assets/box-icon2.png";
import iconBox3 from "../../assets/box-icon3.png";
import iconBox4 from "../../assets/box-icon4.png";
import UserData from "../UserData";
import DataHeader from "./DataHeader";
import ReactPaginate from "react-paginate";
import { addUserToDB, getUsersFromDB, clearUsersFromDB } from "./Db";

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  hasLoan: boolean;
  hasSavings: boolean;
}

const Main = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const usersPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsersFromDB();
        if (users.length > 0) {
          setUserData(users);
          setLoading(false);
        } else {
          const response = await fetch(
            "https://run.mocky.io/v3/931bbc55-66eb-45b5-b3ba-44fa3025c0fd"
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



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const endOffset = itemOffset + usersPerPage;
  const currentUsers = userData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / usersPerPage);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemOffset(Number(event.target.value));
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % userData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
          <p className="fig">
            {userData.filter((user) => user.status === "active").length}
          </p>
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
          <DataHeader title="ORGANIZATION" className="org" />
          <DataHeader title="USERNAME" className="usr" />
          <DataHeader title="EMAIL" className="email" />
          <DataHeader title="PHONE NUMBER" className="num" />
          <DataHeader title="DATE JOINED" className="date" />
          <DataHeader title="STATUS" className="status" />
        </div>

        {currentUsers.map((user) => (
          <UserData
            key={user.id}
            organization={user.organization}
            username={user.username}
            email={user.email}
            phoneNumber={user.phoneNumber}
            dateJoined={user.dateJoined}
            status={"active"}
          />
        ))}
      </div>
      <div className="pagination-container">
        {" "}
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
