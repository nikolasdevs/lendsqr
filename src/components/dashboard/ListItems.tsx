import * as React from "react";

import usersFriends from "../../assets/user-friends1.png";
import guarantors from "../../assets/users1.png";
import loans from "../../assets/sack1.png";
import decision from "../../assets/handshake-regular1.png";
import savings from "../../assets/piggy-bank1.png";
import loanRequests from "../../assets/loanRequest.png";
import whitelist from "../../assets/user-check1.png";
import karma from "../../assets/user-times1.png";
import switchOrg from "../../assets/briefcase1.png";
import dashboard from "../../assets/home1.png";
import npBank from "../../assets/np_bank_1.png";
import fees from "../../assets/coins-solid1.png";
import transaction from "../../assets/transaction.png";
import services from "../../assets/galaxy1.png";
import account from "../../assets/user-cog1.png";
import settlement from "../../assets/scroll1.png";
import report from "../../assets/chart-bar2.png";
import preferences from "../../assets/sliders-h.png";
import pricing from "../../assets/badge-percent.png";
import audit from "../../assets/clipboard-list.png";

import { Link } from "react-router-dom";

export const MainListItems = (
  <React.Fragment>
    <div className="primaryItem">
      <Link to="/users">
        <div className="asideMenu">
          <img src={switchOrg} alt="" />
          <p>Switch Organization</p>
        </div>
      </Link>
      <Link to="/guarantors">
        <div className="asideMenu">
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </div>
      </Link>
    </div>

    <div className="secondaryItem">
      <span>CUSTOMERS</span>
      <Link to="/users">
        <div className="asideMenu">
          <img src={usersFriends} alt="" />
          <p>Users</p>
        </div>
      </Link>
      <Link to="/guarantors">
        <div className="asideMenu">
          <img src={guarantors} alt="" />
          <p>Guarantors</p>
        </div>
      </Link>
      <Link to="/loans">
        <div className="asideMenu">
          <img src={loans} alt="" />
          <p>Loans</p>
        </div>
      </Link>
      <Link to="/decision-models">
        <div className="asideMenu">
          <img src={decision} alt="" />
          <p>Decision Models</p>
        </div>
      </Link>
      <Link to="/savings">
        <div className="asideMenu">
          <img src={savings} alt="" />
          <p>Savings</p>
        </div>
      </Link>
      <Link to="/loan-requests">
        <div className="asideMenu">
          <img src={loanRequests} alt="" />
          <p>Loan Requests</p>
        </div>
      </Link>
      <Link to="/whitelist">
        <div className="asideMenu">
          <img src={whitelist} alt="" />
          <p>Whitelist</p>
        </div>
      </Link>
      <Link to="/karma">
        <div className="asideMenu">
          <img src={karma} alt="" />
          <p>Karma</p>
        </div>
      </Link>
    </div>

    <div className="secondaryItem">
      <span>BUSINESSES</span>
      <Link to="/users">
        <div className="asideMenu">
          <img src={switchOrg} alt="" />
          <p>Organization</p>
        </div>
      </Link>
      <Link to="/guarantors">
        <div className="asideMenu">
          <img src={loanRequests} alt="" />
          <p>Loan Products</p>
        </div>
      </Link>
      <Link to="/loans">
        <div className="asideMenu">
          <img src={npBank} alt="" />
          <p>Savings Products</p>
        </div>
      </Link>
      <Link to="/decision-models">
        <div className="asideMenu">
          <img src={fees} alt="" />
          <p>Fees and Charges</p>
        </div>
      </Link>
      <Link to="/savings">
        <div className="asideMenu">
          <img src={transaction} alt="" />
          <p>Transactions</p>
        </div>
      </Link>
      <Link to="/loan-requests">
        <div className="asideMenu">
          <img src={services} alt="" />
          <p>Services</p>
        </div>
      </Link>
      <Link to="/whitelist">
        <div className="asideMenu">
          <img src={account} alt="" />
          <p>Service Account</p>
        </div>
      </Link>
      <Link to="/settlements">
        <div className="asideMenu">
          <img src={settlement} alt="" />
          <p>Settlements</p>
        </div>
      </Link>
      <Link to="/reports">
        <div className="asideMenu">
          <img src={report} alt="" />
          <p>Reports</p>
        </div>
      </Link>
    </div>

    <div className="secondaryItem">
      <span>SETTINGS</span>
      <Link to="/preferences">
        <div className="asideMenu">
          <img src={preferences} alt="" />
          <p>Preferences</p>
        </div>
      </Link>
      <Link to="/fees-pricing">
        <div className="asideMenu">
          <img src={pricing} alt="" />
          <p>Fees and Pricing</p>
        </div>
      </Link>
      <Link to="/auditLogs">
        <div className="asideMenu">
          <img src={audit} alt="" />
          <p>Audit Logs</p>
        </div>
      </Link>
    </div>
  </React.Fragment>
);