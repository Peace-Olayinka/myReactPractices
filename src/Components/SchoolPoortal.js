import React from "react";
import { useState } from "react";
import RegisteredUsers from "./RegisteredUsers";
import SignUpPage from "./SignUpPage";

const SchoolPoortal = () => {
  const [allUsers, setallUsers] = useState([]);
  const createAccount = (newUser) => {
    setallUsers([...allUsers, newUser]);
    console.log(allUsers);
  };
  const deleteUser = (index) => {
    allUsers.splice(index, 1);
    setallUsers([...allUsers]);
    console.log(allUsers);
  };
  const editUser = (index, editedInfo) => {
    allUsers.splice(index, 1, editedInfo);
    setallUsers([...allUsers]);
    console.log(allUsers);
  };

  return (
    <>
      <SignUpPage createUser={createAccount} />
      <RegisteredUsers
        allUsers={allUsers}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  );
};

export default SchoolPoortal;
