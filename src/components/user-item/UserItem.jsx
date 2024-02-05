import "./user-item.css";

function UserItem({
  id,
  image,
  firstName,
  lastName,
  age,
  from,
  job,
  deleteUser,
}) {
  return (
    <div className="user__card">
      <img src={image} alt={firstName} />
      <div className="user__card--body">
        <h2>
          {firstName} {lastName}, {age} age.
        </h2>
        <p>Job: {job}</p>
        <p>From: {from}</p>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserItem;
