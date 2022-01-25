import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

export type TasksType = {
  id: Number;
  text: string;
  day: string;
  reminder: boolean;
};

function App() {
  const [showAddTask, setShowAddTask] = React.useState(false);
  const [tasks, setTasks] = React.useState<TasksType[]>([
    // {
    //   id: 1,
    //   text: "Doctors Appointment",
    //   day: "Feb 5th at 2.30pm",
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: "Meeting at school",
    //   day: "Feb 6th at 3.30pm",
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: "Food shopping",
    //   day: "Feb 7th at 4.30pm",
    //   reminder: false,
    // },
    // {
    //   id: 4,
    //   text: "Going To Caffee",
    //   day: "Feb 7th at 7.30pm",
    //   reminder: false,
    // },
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  //  Pull Data
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task: any) => {
    // console.log("adding task", task);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const res = await fetch(`http://localhost:3001/tasks/`, { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(task) });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id: any, e: {}) => {
    // console.log(id);
    // setTasks(tasks.filter((task) => task.id !== id));
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Toggle reminder
  const toggleReminder = async (id?: Number, e?: any) => {
    e.preventDefault();
    if (e.type !== "dblclick") return;
    // console.log("ToggleReminder", id, e);
    // setTasks(
    //   tasks.map((task) => {
    //     return task.id === id ? { ...task, reminder: !task.reminder } : task;
    //   })
    // );
    const getDataReminderState = tasks.find((task: any) => task.id === id);
    console.log(getDataReminderState?.reminder);
    const update = await fetch(`http://localhost:3001/tasks/${id}`, { method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify({ reminder: !getDataReminderState?.reminder }) });
    const data = await update.json();
    setTasks(
      tasks.map((task) => {
        return task.id === data.id ? { ...task, reminder: data.reminder } : task;
      })
    );
  };

  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {showAddTask ? <AddTask onAdd={addTask} /> : ""}

              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <div className="">No Task Listed</div>}
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
