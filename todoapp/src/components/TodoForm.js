import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  

  return (
    <div>
      <h1>ToDo App by Buse B.</h1>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Bugünün görevi nedir?"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="todo-btn">
          Görev Ekle
        </button>
      </form>
    </div>
  );
};
