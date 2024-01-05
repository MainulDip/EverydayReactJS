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

### Routing with React-Router-Dom:
> In React Core, There is no routing functionality. npm i react-router-dom

> Follow Docs: https://reactrouter.com/docs/en/v6 | To Use Routing
```js
// index.tsx
import { BrowserRouter } from "react-router-dom";
// Then wrap everythin inside <BrowserRouter><BrowserRouter/>
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
// You can replace <Link> with <a> then
// Also can define route then
// Route Should Be Wraped By Routes 
```

### API And Hooks
> Contex API => Docs https://reactjs.org/docs/context.html | https://github.com/MainulDip/AnimatedExpenseTrackingAppReact.git