import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Login from "../components/Login";
import Dashboard from "../components/dashboard/Dashboard";

const MainRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myChallenges" element={<MyChallenges />} />
        </Route> */}
      </Routes>
    </Fragment>
  );
};

export default MainRouter;
