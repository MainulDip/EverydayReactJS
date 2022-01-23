import React from "react";
import PropTypes from "prop-types";
import { TasksType } from "../App";
import { FaTimes } from "react-icons/fa";

function Task(this: any, { task, onDelete }: { task: TasksType, onDelete: Function }) {
  return (
    <div className="task" >
      <h3>
        {task.text} <FaTimes onClick={onDelete.bind(this, task.id)} style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p className="">{task.day}</p>
    </div>
  );
};

Task.propTypes = {};

export default Task;
