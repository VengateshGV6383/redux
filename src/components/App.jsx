import React, { useState, useEffect } from "react";
import { addTask, deleteTask, markAsdone } from "../CreateSlice";
import { useSelector, useDispatch } from "react-redux";

import InputTasks from "./InputTasks";
import ListItems from "./Tasks";
import "./app.css";
import api from "../api/DjangoApi";

const App = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getApiCall = async () => {
      const { data } = await api.get("/getTasklist/");
      return data?.result;
    };
    getApiCall().then((res) => setTask(res));
  }, []);

  const selector = useSelector((state) => state.tasklist);
  const dispatch = useDispatch();

  const setApiCall = async (task) => {
    const { data } = await api.post("/addtask/", JSON.stringify(task));
    return data?.result;
  };
  const addingTodos = (task) => {
    setApiCall(task).then((res) => setTask(res));
    dispatch(addTask(task));
  };

  // const keys = Object.keys(selector);
  //const keys = getApiCall();

  const removeTask = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const setCompleted = ({ id, task, date }) => {
    dispatch(markAsdone({ id: id, task: task, date: date }));
  };
  return (
    <div>
      <div
        className="ui segment"
        style={{ maxHeight: "200px", position: "relative" }}
      >
        <InputTasks value={null} handleOnClickBtn={addingTodos} btnName="Add" />
      </div>
      <div className="ui segment" style={{ height: "400px", overflow: "auto" }}>
        <div
          className="ui styled accordion"
          style={{
            maxHeight: "max-content",
            width: "100%",
            overflow: "auto",
            padding: "1%",
          }}
        >
          {task.length !== 0 ? (
            <ListItems
              tasklist={task}
              filter={removeTask}
              setCompleted={setCompleted}
              addingTodos={addingTodos}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default App;
