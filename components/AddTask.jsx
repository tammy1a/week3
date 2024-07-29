import React, { useState } from "react";
import "./AddTask.css";
import axios from "axios";

export default function AddTask({ tasks, setTasks,selectedUser}) {
  const [inputval, setInputVal] = useState("");


async function postTask(task) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',task, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
    
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
  const addTask = () => {
    if (inputval) {
      postTask({user_id:selectedUser,title:inputval,completed:false});
      
      setTasks([{user_id:selectedUser,title:inputval,completed:false},...tasks]);
      setInputVal("");
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const handleReset = () => {
    setTasks([]);
  };
  return (
    <div className="add-task">
      <div className="inner">
        <input
          type="text"
          placeholder="Add a new Task"
          value={inputval}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <div className="my-plus-button">
          <i className="fa fa-plus " aria-hidden="true" onClick={addTask}></i>
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
