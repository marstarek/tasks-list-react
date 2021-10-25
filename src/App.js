import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Header/Tasks";
import Addtask from "./components/Header/Addtask";

import { useState } from "react";
function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, settasks] = useState([
    {
      id: 1,
      text: "food shopping",
      day: "feb 1th at 2:15 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "food shiting",
      day: "feb 5th at 5:15 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "no shopping",
      day: "march 10th at 10:15 pm",
      reminder: true,
    },
  ]);
  //add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newtask = { id, ...task };

    settasks([...tasks, newtask]);
    console.log(newtask);
  };
  const deleletTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleremainder = (id) => {
    console.log(id);
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleletTask}
          onToggle={toggleremainder}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
