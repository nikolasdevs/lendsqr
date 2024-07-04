interface UserProps {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
}

const UserData = (props: UserProps) => {
  return (
    <div className="data">
      <p className="org"> {props.organization}</p>
      <p className="usr"> {props.username}</p>
      <p className="email"> {props.email}</p>
      <p className="num"> {props.phoneNumber}</p>
      <p className="date"> {props.dateJoined}</p>
      <p className="status"> {props.status}</p>{" "}
    </div>
  );
};

export default UserData;
