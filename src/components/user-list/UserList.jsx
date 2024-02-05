import React from "react";
import UserItem from "../user-item/UserItem";
import "./user-list.css";

function UserList({ users, deleteUser }) {
  return (
    <div className="container">
      <div className="user__cards">
        {users.map((user) => (
          <UserItem key={user.id} {...user} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
