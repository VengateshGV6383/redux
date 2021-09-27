import React, { useState, useEffect } from "react";

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

  const setApiCall = async (task) => {
    const { data } = await api.post("/addtask/", JSON.stringify(task));
    return data?.result;
  };
  const mrkcmpltApiCall = async (task) => {
    const { data } = await api.post("/mrkCmptlist/", JSON.stringify(task));
    return data?.result;
  };
  const updtApiCall = async (task) => {
    const { data } = await api.post("/updtTask/", JSON.stringify(task));
    return data?.result;
  };
  const dltApiCall = async (task) => {
    const { data } = await api.post("/deleteTask/", JSON.stringify(task));
    return data?.result;
  };
  const addingTodos = (task) => {
    setApiCall(task).then((res) => setTask(res));
  };

  const updateTodos = (task) => {
    updtApiCall(task).then((res) => setTask(res));
  };

  const removeTask = (task) => {
    dltApiCall(task).then((res) => setTask(res));
  };

  const setCompleted = (task) => {
    mrkcmpltApiCall(task).then((res) => setTask(res));
  };
  return (
    <div>
      <div
        className="ui segment"
        style={{ maxHeight: "200px", position: "relative" }}
      >
        <InputTasks
          value={null}
          handleOnClickBtn={addingTodos}
          btnName="Add"
          setUpdate={null}
        />
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
          <ListItems
            tasklist={task}
            deleteTask={removeTask}
            setCompleted={setCompleted}
            updateTodos={updateTodos}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
