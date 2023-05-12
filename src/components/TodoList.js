import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdOutlineEdit, MdDelete } from "react-icons/md";

import {TiStarOutline, TiStarFullOutline} from 'react-icons/ti'

function TodoList({ todos, updateTodo, removeTodo, completeTodo, createdAt, createdAtTime, nuevaAt }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    
  });

  const todosWithTime = todos.map((todo) => ({
    ...todo,
    createdAt: new Date().toLocaleString(),
    
      
  }));

  const submitUpdate = (value,) => {
    updateTodo(edit.id, value, createdAt);
    setEdit({
      id: null,
      value: "",
      
    });
  };

  // const [favorito, setFavorito] = useState(false)

  // const handleToggleFavorito = (id) => {
  //   setFavorito(!favorito)
  // }

if (edit.id) {
 return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
}

  return todosWithTime.map((todo, index,createdAt) => (
    <>

{/* <div className="nueva">
<label>
        <input className="textoNuevo" type="checkbox" checked={favorito.id} onChange={handleToggleFavorito} />
        {favorito ? <TiStarFullOutline size={24} /> : <TiStarOutline size={24} />}
      </label>
        </div> */}
      <div
        className={todo.isComplete ? "todo-complete" : "todo-container"}
        key={index}
      >
        
        <div>
          
          <input
            className="cuadradoCheck"
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => completeTodo(todo.id)}
          />
          <span
            onClick={() => completeTodo(todo.id)}
            style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
          >

            
            {todo.text} 
          </span>
        </div>
        

        <div className="icons">
          <MdDelete
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <MdOutlineEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </>
  ));
}

export default TodoList;
