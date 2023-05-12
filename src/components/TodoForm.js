import React, { useState, useRef } from "react";

// ICONOS
import { MdAddCircle } from 'react-icons/md';



function TodoForm(props) {
  //comprobaremos si el usuario está tratando de actualizar entonces mostraremos el valor de props de lo contrario mostraremos null o ""
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //useRef(initialValue) es un hook incorporado en React que acepta un argumento como valor inicial y devuelve una referencia.
  //Una referencia es un objeto que tiene una única propiedad "current", a la que se puede acceder y cambiar (mutar).
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // el método preventDefault() se utiliza para evitar que se produzca el comportamiento por defecto de un evento
    e.preventDefault();

    //aquí hemos proporcionado id como número aleatorio que nos ayudará al actualizar o eliminar la tarea
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo_form">
      {/* En react usamos "?" para declaraciones condicionales como if-else.
       hemos usado, props.edit ?(if) mostrar botón actualizar : (else) mostrar botón Añadir */}

      {props.edit ? (
        <>
          <input
            placeholder="Actualiza tu tarea"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-edit"
          />
          <button onClick={handleSubmit} className="edit-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Añade una nueva tarea"
            value={input}
            onChange={handleChange}
            name="text"
            className="input-add"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="add-button">
          <MdAddCircle size={40}  className="icono" color="white"/>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;