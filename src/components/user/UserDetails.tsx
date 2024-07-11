import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../dashboard/Header";
import Aside from "../dashboard/Aside";
import backArrow from "../../assets/backArrowVector.svg";

import star from "../../assets/np_star_1.svg";
import halfStar from "../../assets/np_star_2.svg";
import { getUsersFromDB } from "../dashboard/Db";

interface User {
  id: number;
  organization: string;
  username: string;
  avatar_url: string;
  email: string;
  phoneNumber: string;
  bvn: number;
  hasLoan: boolean;
  hasSavings: boolean;
  full_name: string;
  users_id: string;
  residence_type: "house" | "apartment" | "condo" | "townhouse";
  num_children: number;
  marital_status: "single" | "married" | "divorced" | "widowed";
  gender: string;
  education_level: string;
  employment_status: string;
  sector: string;
  salary: number;
  relationship_status: string;
  years_of_experience: number;
  bank: string;
  loan_repayment: number;
  account_number: string;
  balance: number;
  guarantor?: Guarantor;
}

interface Guarantor {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  relationship: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setError(new Error("User ID is missing"));
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const userData = await getUsersFromDB();
        const foundUser = userData.find(
          (user: User) => user.id === parseInt(id)
        );
        if (!foundUser) {
          throw new Error("User not found");
        }

        console.log("Fetched user data:", foundUser);

        const guarantorUrl = `https://run.mocky.io/v3/876edf56-073a-47fe-8df4-4e7e87f65d4a`;
        const guarantorResponse = await fetch(guarantorUrl);
        if (!guarantorResponse.ok) {
          throw new Error("Guarantor not found");
        }

        const guarantorData: Guarantor = await guarantorResponse.json();
        console.log("Fetched guarantor data:", guarantorData);

        foundUser.guarantor = guarantorData;
        setUser(foundUser);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user or guarantor data:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="userDetails">
      <Header />

      <div className="main-details">
        <Aside />
        <div className="details-container">
          <Link to="/dashboard">
            <p className="backIcon">
              <span>
                <img src={backArrow} alt="" />
              </span>{" "}
              Back to Users
            </p>
          </Link>
          <div className="detailsHeader">
            {" "}
            <p>User Details</p>
            <div className="ctaBtn">
              <button className="blacklist">Blacklist user</button>
              <button className="activate">Activate user</button>
            </div>
          </div>

          <div className="profileHeader">
            <div className="top">
              <div className="profileImg">
                <img src={user.avatar_url} alt="" />
                <div className="profileName">
                  <p>{user.full_name}</p>
                  <p>{user.users_id}</p>
                </div>
              </div>

              <div className="profileStar">
                <p>User’s Tier</p>
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={halfStar} alt="" />
                  <img src={halfStar} alt="" />
                </div>
              </div>

              <div className="profileAccount">
                <p>{user.balance}</p>
                <div className="accountDetails">
                  <p>{user.account_number}</p>
                  <p>/{user.bank} Bank</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p>General Details</p>
              <p>Documents</p>
              <p>Bank Details</p>
              <p>Loans</p>
              <p>Savings</p>
              <p>App and System</p>
            </div>
          </div>

          <div className="profileInfo">
            <div className="personalInfo">
              <div className="personalInfoHeader">
                <p>Personal Information</p>
              </div>
              <div className="personalInfoBox">
                <div className="personalInfoBox1">
                  <div className="info">
                    {" "}
                    <p className="title">Full Name</p>
                    <p>{user.full_name}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Phone Number</p>
                    <p>{user.phoneNumber}</p>
                  </div>
                  <div className="info email">
                    {" "}
                    <p className="title ">Email Address</p>
                    <p>{user.email}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">BVN</p>
                    <p>{user.bvn}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Gender</p>
                    <p>{user.gender}</p>
                  </div>
                </div>
                <div className="personalInfoBox1">
                  <div className="info">
                    {" "}
                    <p className="title">Marital Status</p>
                    <p>{user.marital_status}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Children</p>
                    <p>{user.num_children}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Type of Residence</p>
                    <p>{user.residence_type}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="personalInfo">
              <div className="personalInfoHeader">
                <p>Education and Employment</p>
              </div>
              <div className="personalInfoBox">
                <div className="personalInfoBox1">
                  <div className="info">
                    {" "}
                    <p className="title">Level of Education</p>
                    <p>{user.education_level}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Employment Status</p>
                    <p>{user.employment_status}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Sector of Employment</p>
                    <p>{user.sector}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Duration of employment</p>
                    <p>{user.years_of_experience} years</p>
                  </div>
                </div>
                <div className="personalInfoBox1">
                  {" "}
                  <div className="info">
                    {" "}
                    <p className="title">Office Email</p>
                    <p>
                      {user.username}@{user.organization}.com
                    </p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">monthly income</p>
                    <p>{user.salary}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Loan Repayment</p>
                    <p>{user.loan_repayment}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="personalInfo">
              <div className="personalInfoHeader">
                <p>Socials</p>
              </div>
              <div className="personalInfoBox">
                <div className="personalInfoBox1">
                  <div className="info">
                    {" "}
                    <p className="title">Twitter</p>
                    <p>{user.username}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Facebook</p>
                    <p>{user.username}</p>
                  </div>
                  <div className="info">
                    {" "}
                    <p className="title">Instagram</p>
                    <p>{user.username}</p>
                  </div>
                </div>
              </div>
            </div>

            {user.guarantor && (
              <div className="personalInfo">
                <div className="personalInfoHeader">
                  <p>Guarantor</p>
                </div>

                <div className="personalInfoBox">
                  <div className="personalInfoBox1">
                    <div className="info">
                      <p className="title">Full Name</p>
                      <p>{user.guarantor.fullName || "N/A"}</p>
                    </div>
                    <div className="info">
                      <p className="title">Phone Number</p>
                      <p>{user.guarantor.phoneNumber || "N/A"}</p>
                    </div>
                    <div className="info">
                      <p className="title">Email Address</p>
                      <p>{user.guarantor.email || "N/A"}</p>
                    </div>
                    <div className="info">
                      <p className="title">Relationship</p>
                      <p>{user.guarantor.relationship}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default UserDetails;
