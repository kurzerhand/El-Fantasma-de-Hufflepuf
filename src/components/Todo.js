import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });

      return updatedTodos;
    });
  };

  const onComplete = (id) => {
    console.log("task", id);
  };

  const sortedTodos = todos.sort((a, b) => {
    if (a.isComplete && !b.isComplete) {
      return 1; // Mueve las tareas tachadas al final
    } else if (!a.isComplete && b.isComplete) {
      return -1; // Mueve las tareas no tachadas antes de las tachadas
    } else {
      return a.text.localeCompare(b.text); // Ordena alfabéticamente dentro de cada grupo
    }
  });

  return (
    <div>
      <h1 className="header">Crea tu lista de tareas</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={sortedTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        onComplete={onComplete}
      />
    </div>
  );
}

export default Todo;
