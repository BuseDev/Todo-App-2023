import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Yeniden düzenle..."
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="todo-btn">
          Güncelle
        </button>
      </form>
    </div>
  );
};
