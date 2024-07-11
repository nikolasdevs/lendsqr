import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Login from "../components/Login";
import Dashboard from "../components/dashboard/Dashboard";
import UserDetails from "../components/user/UserDetails";

const MainRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Fragment>
  );
};

export default MainRouter;
