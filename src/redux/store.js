import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import employeeReducer from "./employeeSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    employee: employeeReducer,
  },
});

export default store;
