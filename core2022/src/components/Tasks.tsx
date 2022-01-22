import React from "react";
import PropTypes from "prop-types";

type TasksType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

const tasks: TasksType[] = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2.30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Doctors Appointment",
    day: "Feb 5th at 2.30pm",
    reminder: true,
  },

  {
    id: 3,
    text: "Doctors Appointment",
    day: "Feb 5th at 2.30pm",
    reminder: true,
  },
];

const Tasks = (props: any) => {
  return <div></div>;
};

Tasks.propTypes = {};

export default Tasks;
