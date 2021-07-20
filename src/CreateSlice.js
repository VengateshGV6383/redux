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
      const arr = state.tasklist.filter((item) => item.id === newtask.id);
      //only if task id is already present in tasklist
      if (arr.length !== 0) {
        const [taskTObeUpdate] = arr;
        //filtering the taskslist other than taskToBeUpdate
        state.tasklist = state.tasklist.filter(
          (item) => item.id !== taskTObeUpdate.id
        );
        //Updatding the task;
        taskTObeUpdate.task = task;
        state.tasklist.unshift(taskTObeUpdate);
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

      if (window.confirm(`Hurrah! You have completed ${task} `))
        state.tasklist.push(newTask);
      else {
        newTask.isCompleted = false;
        state.tasklist.unshift(newTask);
      }
    },
  },
});
export const { addTask, deleteTask, markAsdone } = tasklistSlice.actions;
export default tasklistSlice.reducer;
