
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployees } from "../redux/employeeSlice";
// import "./EmployeeList.css";
// const EmployeeList = () => {
//   const dispatch = useDispatch();
//   const { employees, loading, error } = useSelector((state) => state.employee);

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {employees.map((employee) => (
//         <li key={employee.id}>
//           <p>Name: {employee.first_name} {employee.last_name}</p>
//           <p>Email: {employee.email}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default EmployeeList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/employeeSlice";
import "./EmployeeList.css";  // Ensure this file is properly imported

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="employee-container">
      <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <div className="name-container">
              Name: {employee.first_name} {employee.last_name}
            </div>
            <div className="email-container">
              Email: {employee.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
