// import React, { useState } from "react";
import PropTypes from "prop-types";
import { TasksType } from "../App";
import Task from "./Task";

// type TasksType = {
//   id: number;
//   text: string;
//   day: string;
//   reminder: boolean;
// };

// const tasks: TasksType[] = [
//   {
//     id: 1,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2.30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting at school",
//     day: "Feb 6th at 3.30pm",
//     reminder: true,
//   },

//   {
//     id: 3,
//     text: "Food shopping",
//     day: "Feb 7th at 4.30pm",
//     reminder: false,
//   },
// ];

const Tasks = ({ tasks, onDelete }: { tasks: TasksType[]; onDelete: any }) => {
  // const [tasks, setTasks] = useState<TasksType[]>(
  //   [
  //     {
  //       id: 1,
  //       text: "Doctors Appointment",
  //       day: "Feb 5th at 2.30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Meeting at school",
  //       day: "Feb 6th at 3.30pm",
  //       reminder: true,
  //     },

  //     {
  //       id: 3,
  //       text: "Food shopping",
  //       day: "Feb 7th at 4.30pm",
  //       reminder: false,
  //     },
  //   ]
  // )
  return (
    <>
      {tasks.map((task: any) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

Tasks.propTypes = {};

export default Tasks;
