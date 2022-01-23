import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export type TasksType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

function App(this: any) {
  const [tasks, setTasks] = React.useState<TasksType[]>([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 3.30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Food shopping",
      day: "Feb 7th at 4.30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id: number, e: any) => {
    console.log(id, e.target);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask.bind(this, 12)} />
    </div>
  );
}

export default App;
