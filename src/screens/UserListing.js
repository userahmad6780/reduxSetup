import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/User/user.action";

function UserListing() {
  const disptch = useDispatch();
  useEffect(() => {
    disptch(fetchUsers());
  }, []);
  let userObject = useSelector((state) => state.usersData);

  return (
    <div>
      <h2>UserListing</h2>
      {userObject?.loading ? (
        <h3>Loading...</h3>
      ) : userObject?.error ? (
        <h3>{userObject?.error}</h3>
      ) : (
        userObject &&
        userObject.data &&
        userObject.data.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })
      )}
    </div>
  );
}

export default UserListing;
