import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = ({}) => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };

  return (
    <div className="LoginWrapper">
      <h1>ToDo App by Buse B.</h1>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-input"
          value={value}
          placeholder="Email"
          onChange={(event) => setValue(event.target.value)}
        />
        <input
          type="text"
          className="login-input"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.password)}
        />
        <button type="submit" className="todo-btn">
          <Link className="login-btn" to={"/Todo"}>Login</Link>
        </button>
      </form>
    </div>
  );
};
