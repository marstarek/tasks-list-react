import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Header/Tasks";
import { useState } from "react";
function App() {
  const [tasks, settasks] = useState([
    {
      id: 1,
      text: "food shopping",
      day: "feb 1th at 2:15 pm",
      reminder: false,
    },
    {
      id: 2,
      text: "food shiting",
      day: "feb 5th at 5:15 pm",
      reminder: false,
    },
    {
      id: 3,
      text: "no shopping",
      day: "march 10th at 10:15 pm",
      reminder: false,
    },
  ]);
  const deleletTask = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleletTask} />
    </div>
  );
}

export default App;
