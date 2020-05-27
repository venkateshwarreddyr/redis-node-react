import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions/user";

const UsersReg = ({ addUser, user, fetchUser }) => {
  const [username, setUsername] = useState("Venkatesh");

  useEffect(() => {
    const id = localStorage.getItem("id");
    id && fetchUser(id);
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    addUser(username);
    setUsername("");
  };

  return (
    <>
      {user.username ? (
        <h1>`Welcome ${user.username}'</h1>
      ) : (
        <form onSubmit={handleSumbit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Set User</button>
        </form>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps, actions)(UsersReg);
