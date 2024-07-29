import React from "react";
import "./Task.css";

export default function Task({ what, onDelete, keyid, completed,onTick }) {
  return (
    <div className="task" keyid={keyid}>
      <div className="task-detail">
        <p className={"task-text " + (completed === true ? "completed" : "")}>
          {what}
        </p>

        <div className="task-buttons">
          {!completed?(<div className="fa fa-check" onClick={()=>onTick(keyid)} aria-hidden="true"></div>):""}
          
          <div
            onClick={(e) => {
              onDelete(keyid);
            }}
            className="fa fa-trash"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
}
