
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, updateTodo } from "../redux/todoSlice";
// import "./TodoList.css"; 

// const TodoList = () => {
//   const todos = useSelector((state) => state.todo.items);
//   const dispatch = useDispatch();

//   const [editingId, setEditingId] = useState(null);
//   const [newText, setNewText] = useState("");

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleEdit = (id, text) => {
//     setEditingId(id);
//     setNewText(text);
//   };

//   const handleUpdate = (id) => {
//     dispatch(updateTodo({ id, text: newText }));
//     setEditingId(null); // Exit editing mode
//   };

//   const handleCancel = () => {
//     setEditingId(null); // Cancel editing
//   };

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {editingId === todo.id ? (
//             <div>
//               <input
//                 type="text"
//                 value={newText}
//                 onChange={(e) => setNewText(e.target.value)}
//               />
//               <button onClick={() => handleUpdate(todo.id)}>Save</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           ) : (
//             <div>
//               {todo.text}
//               <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
//               <button onClick={() => handleDelete(todo.id)}>Delete</button>
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, updateTodo } from "../redux/todoSlice";
// import "./TodoList.css";

// const TodoList = () => {
//   const todos = useSelector((state) => state.todo.items);
//   const dispatch = useDispatch();

//   const [editingId, setEditingId] = useState(null);
//   const [newText, setNewText] = useState("");

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleEdit = (id, text) => {
//     setEditingId(id);
//     setNewText(text);
//   };

//   const handleUpdate = (id) => {
//     dispatch(updateTodo({ id, text: newText }));
//     setEditingId(null);
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//   };

//   return (
//     <div className="container">
//       <ul className="todo-list">
//         {todos.map((todo) => (
//           <li key={todo.id} className="todo-item">
//             {editingId === todo.id ? (
//               <div className="todo-edit">
//                 <input
//                   type="text"
//                   value={newText}
//                   onChange={(e) => setNewText(e.target.value)}
//                   className="edit-input"
//                 />
//                 <button onClick={() => handleUpdate(todo.id)} className="save-btn">
//                   Save
//                 </button>
//                 <button onClick={handleCancel} className="cancel-btn">
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <div className="todo-content">
//                 <span className="todo-text">{todo.text}</span>
//                 <button
//                   onClick={() => handleEdit(todo.id, todo.text)}
//                   className="edit-btn"
//                 >
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(todo.id)} className="delete-btn">
//                   Delete
//                 </button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todoSlice";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  // Filter todos based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="todo-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Todo List Container */}
      <div className="todo-actions-container">
        {/* <button className="add-todo-btn">Add Todo</button> */}
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editingId === todo.id ? (
                <div className="todo-edit">
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="save-btn"
                  >
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="todo-content">
                  <span className="todo-text">{todo.text}</span>
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

