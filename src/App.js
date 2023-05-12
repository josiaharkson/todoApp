import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  // Toggle Complete
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // // Delete Todo
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // Add Todo
  const addTodo = (title = "") => {
    if (
      todos.find(
        (todo) => `${todo.title}`.toLowerCase() === title.trim().toLowerCase()
      )
    ) {
      return alert("Item already exist");
    }
    setTodos([
      ...todos,
      {
        title: title.trim(),
        id: Math.random(),
        completed: false,
      },
    ]);
  };

  const onUpdate = (title = "", id = "", cb = () => null) => {
    const foundItem = todos.find(
      (todo) => `${todo.title}`.toLowerCase() === title.trim().toLowerCase()
    );
    if (foundItem) {
      if (foundItem.id === id) return alert("No changes have been made");
      else return alert("Item already exist");
    }

    setTodos([
      ...todos.map((x) => {
        if (x.id === id) {
          x.title = title;
        }
        return x;
      }),
    ]);

    if (typeof cb === "function") cb();
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos
                onUpdate={onUpdate}
                todos={todos}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            </React.Fragment>
          )}
        />
      </div>
    </div>
  );
};

export default App;
