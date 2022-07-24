import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addUser from "../redux/User/userAdd.action";

function CreateNewUser() {
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.usersData);
  console.log(
    "🚀 ~ file: CreateNewUser.js ~ line 8 ~ CreateNewUser ~ newData",
    newData
  );
  const handleAdd = () => {
    console.log("fucntion tigered");
    dispatch(
      addUser({
        id: 11,
        name: "Muhammad Ahmad Muhammad",
        username: "Ahmad",
        email: "ahmad@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "lahore",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "AlphaSquad",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      })
    );
  };
  return (
    <div>
      <h3>CreateNewUser</h3>
      <button onClick={handleAdd}>Add New User</button>
    </div>
  );
}

export default CreateNewUser;
