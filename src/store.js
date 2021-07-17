import { configureStore } from "@reduxjs/toolkit";
import tasklistSliceReducer from "./CreateSlice";

export default configureStore({
  reducer: {
    tasklist: tasklistSliceReducer,
  },
});
