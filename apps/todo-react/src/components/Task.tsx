import React from "react";
import PropTypes from "prop-types";
import { TasksType } from "../App";
import { FaTimes } from "react-icons/fa";

function Task(this: any, { task, onDelete, onToggle }: { task: TasksType; onDelete: Function; onToggle: any }) {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} style={{ userSelect: "none" }}>
      <a href="" className="" onClick={onToggle.bind(this, undefined)} onDoubleClick={onToggle.bind(this, task.id)} >
        <h3>
          {task.text} <FaTimes onClick={onDelete.bind(this, task.id)} style={{ color: "red", cursor: "pointer" }} />
        </h3>
        <p className="">{task.day}</p>
      </a>
    </div>
  );
}

Task.propTypes = {};

export default Task;
// onClick={(e)=>{onToggle(e, task.id)}}