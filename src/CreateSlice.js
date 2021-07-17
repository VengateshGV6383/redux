import { createSlice } from "@reduxjs/toolkit";
export const tasklistSlice = createSlice({
  name: "tasklist",
  initialState: {
    tasklist: [],
  },
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      const id = parseInt(localStorage.getItem("userid"));
      state.tasklist.push({ id: id, task: task });
      localStorage.setItem("userid", `${id + 1}`);
    },
    deleteTask: (state, action) => {
      state.tasklist.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addTask, deleteTask } = tasklistSlice.actions;
export default tasklistSlice.reducer;
