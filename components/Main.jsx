import React, { useState } from "react";
import AddTask from "./AddTask.jsx";
import Tasks from "./Tasks.jsx";
import Users from "./Users.jsx";

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [selectedUser, setselectedUser] = useState(1);

  return (
    <div>
      <Users selectedUser={selectedUser} setselectedUser={setselectedUser} />
      <AddTask tasks={tasks} setTasks={setTasks} selectedUser={selectedUser} />
      <Tasks selectedUser={selectedUser} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
