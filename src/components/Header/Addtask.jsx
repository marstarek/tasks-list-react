import React from "react";
import { useState } from "react";
const Addtask = ({ onAdd }) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("its not text ");
      return;
    }
    onAdd({ text, day, reminder });
    settext("");
    setday("");
    setreminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tasks</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>day</label>
        <input
          type="text"
          placeholder="add day"
          value={day}
          onChange={(e) => setday(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="add task"
          value={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        ></input>
      </div>
      <button type="submit" value="savetask" className="btn btn-block">
        Save Task
      </button>
    </form>
  );
};

export default Addtask;
