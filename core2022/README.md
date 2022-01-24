## React Core 2022 Overview
Personalized Overview Of the Typescript React core in an app perspective.

### Props:
Note: State Gets Passed Down, Action Gets Passed UP
```js
// App.tsx
export type TasksType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

function App() {
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
  ]);

  // Delete Task
  const deleteTask = (id: any, o: Number, e: {}) => {
    //  e for event will always be last argument in case of 'this' binding
    console.log(id, e, o);
  };

  return (
      <>
      <Tasks tasks={tasks} onDelete={deleteTask} />
      </>
  );
}

// Task.tsx
function Task(this: any, { task, onDelete }: { task: TasksType, onDelete: Function }) {
  return (
    <Component onClick={onDelete.bind(this, task.id, '12')} style={{ color: "red", cursor: "pointer" }} />
  );
};
```