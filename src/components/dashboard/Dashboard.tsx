import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div className="mainDashboard">
      <div className="dashboard ">
        <Header />
        <div className="main">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
