import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = (props: any) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="Task Add">Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="Task Add">Day and Time</label>
        <input type="text" placeholder="Add day and time" value={day} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="Task Add">Set Reminder</label>
        <input type="checkbox" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

AddTask.propTypes = {};

export default AddTask;
