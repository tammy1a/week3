import React, { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";
import "./Tasks.css";
export default function Tasks({ selectedUser, tasks, setTasks }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  Array.prototype.myFilter = function (callback) {
    const trueArray = [];
    const falseArray = [];

    this.forEach((element, index, array) => {
      if (callback(element, index, array)) {
        trueArray.push(element);
      } else {
        falseArray.push(element);
      }
    });

    return [trueArray, falseArray];
  };

  function onDelete(idx) {
    console.log(idx);
    setTasks(
      tasks.filter((elem, indx) => {
        return elem.title !== idx;
      })
    );
  }
  function onTick(idx) {

    let task=tasks.find((task)=>task.title ===idx);
    let index= tasks.indexOf(task);    
    task.completed=true;
    setTasks(tasks.map((elem)=>elem));


  }

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${selectedUser}/todos`
      );
      console.log(response);
      if (response.status == 200) {
        setTasks(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, [selectedUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const [completed, pending] = tasks.myFilter((elem) => {return elem.completed;});
 
  return (
    <div className="tasks-container">
      <h4>Pending</h4>
      {pending.map((elem, idx) => (
        <Task
          key={elem.title}
          keyid={elem.title}
          what={elem.title}
          onDelete={onDelete}
          onTick={onTick}
          completed={elem.completed}
          />
        ))}
      <hr></hr>
      <h4>Completed</h4>
      {completed.map((elem, idx) => (
        <Task
        key={elem.title}
        keyid={elem.title}
        what={elem.title}
        onDelete={onDelete}
        onTick={onTick}
        completed={elem.completed}
        />
      ))}
    </div>
  );
}
