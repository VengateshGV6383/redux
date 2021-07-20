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
      const date = action.payload.date;
      const id = action.payload.id;
      const newtask = {
        id: id,
        task: task,
        isCompleted: isCompleted,
        date: date,
      };
      //the task to get updated
      const taskTObeUpdate = state.tasklist.filter(
        (item) => item.id === newtask.id
      );
      //only if task id is already present in tasklist
      if (taskTObeUpdate.length !== 0) {
        //filtering the taskslist other than taskToBeUpdate
        state.tasklist = state.tasklist.filter(
          (item) => item.id !== taskTObeUpdate[0].id
        );
        //Updatding the task;
        taskTObeUpdate[0]["task"] = newtask.task;
        state.tasklist.unshift(taskTObeUpdate[0]);
      } else {
        state.tasklist.unshift(newtask);
      }
    },
    deleteTask: (state, action) => {
      //filtering the tasklist leaving the task holding payload id
      state.tasklist = state.tasklist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    markAsdone: (state, action) => {
      //marking the tasks as completed;
      const id = action.payload.id;
      const task = action.payload.task;
      const date = action.payload.date;
      //fetching the task to be marked completed
      const newTask = state.tasklist.filter(
        (item) => item.id === id && item.task === task
      );
      newTask.isCompleted = true;
      newTask.id = id;
      newTask.task = task;
      newTask.date = date;
      // filtering out the tasks without the the fteched task
      state.tasklist = state.tasklist.filter(
        (item) => item.id !== action.payload.id
      );
      //inserting the fetched task with marked completed
      state.tasklist.unshift(newTask);
    },
  },
});
export const { addTask, deleteTask, markAsdone } = tasklistSlice.actions;
export default tasklistSlice.reducer;
