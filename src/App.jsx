import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import UserList from "./components/user-list/UserList";
import emptyImage from "./assets/empty.svg";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const getUserInfo = (userData) => {
    users.push(userData);
    setUsers([...users]);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const deleteUser = (id) => {
    const deletedUser = users.filter((item) => item.id !== id);
    setUsers(deletedUser);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Header userLength={users.length} />
      {showModal ? (
        <Modal setShowModal={setShowModal} getUserInfo={getUserInfo} />
      ) : null}

      {users.length ? (
        <UserList users={users} deleteUser={deleteUser} />
      ) : (
        <div className="empty__image">
          <img src={emptyImage} />
        </div>
      )}

      <button onClick={() => setShowModal(true)} className="modal__btn">
        Create
      </button>
    </div>
  );
}

export default App;
