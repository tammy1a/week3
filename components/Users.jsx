import React, { useState } from "react";
import "./Users.css";
import User from "./User";

export default function Users({selectedUser,setselectedUser}) {
  
  const onClickHandler = (e) => {
    const id = +e.target.id[4];
    if (!isNaN(id)) {
      setselectedUser(id);
      console.log("changed");
    }
  };
  return (
    <>
      <div className="users" onClick={(e) => onClickHandler(e)}>
        {[1, 2, 3, 4, 5].map((elem) => (
          <User key={elem} id={"user"+elem} selected= {elem===selectedUser}/>
        ))}
      </div>
    </>
  );
}
