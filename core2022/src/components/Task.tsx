import React from "react";
import PropTypes from "prop-types";
import { TasksType } from "../App";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }: { task: TasksType, onDelete: any }) => {
  return (
    <div className="task" >
      <h3>
        {task.text} <FaTimes onClick={onDelete} style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p className="">{task.day}</p>
    </div>
  );
};

Task.propTypes = {};

export default Task;
