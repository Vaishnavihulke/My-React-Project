import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]); // state to store tasks
  const [input, setInput] = useState(""); // state for input field

  // Function to add task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput(""); // clear input box
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ To-Do List</h2>

      {/* Input box */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      {/* Add button */}
      <button onClick={addTask}>Add</button>

      {/* Render tasks using .map */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
