import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TodoForm />
              <TodoList />
            </div>
          }
        />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
