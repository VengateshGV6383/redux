import { createSlice } from "@reduxjs/toolkit";
export const tasklistSlice = createSlice({
  name: "tasklist",
  initialState: {
    tasklist: [],
  },
  reducers: {
    addTask: (state, action) => {
      const task = action.payload.task;
      const isCompleted = action.payload.isCompleted;
      const id = parseInt(localStorage.getItem("userid"));
      state.tasklist.push({ id: id, task: task, isCompleted: isCompleted });
      localStorage.setItem("userid", `${id + 1}`);
    },
    deleteTask: (state, action) => {
      state.tasklist = state.tasklist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    markAsdone: (state, action) => {
      const id = action.payload.id;
      const task = action.payload.task;
      const newTask = state.tasklist.filter(
        (item) => item.id === id && item.task === task
      );
      newTask.isCompleted = true;
      newTask.id = id;
      newTask.task = task;
      state.tasklist = state.tasklist.filter(
        (item) => item.id !== action.payload.id
      );
      state.tasklist.push(newTask);
    },
  },
});
export const { addTask, deleteTask, markAsdone } = tasklistSlice.actions;
export default tasklistSlice.reducer;
