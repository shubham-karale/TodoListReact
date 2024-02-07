 /*
  TODO: Mostly context Api is used for the Small Projects for Big Projects we use Redux State Management Tools
*/

import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "To List 1",
      completed: false,
    },
  ],
  // ! These are just definition of Methods there functionalities introduced where it is needed
  addTodo: (todo) => {}, // To add todo
  updatedTodo: (id, todo) => {}, // To update todo requires todo  and its id
  deleteTodo: (id) => {}, // To delete todo requires only its id
  toggleCompleted: (id) => {}, // To toggle completed status of todo requires only its id
});

// Notes: When you use createContext, you have to use Provider to provide the value and Consumer to consume the value
export const TodoProvider = TodoContext.Provider;

// Notes: When you use useContext, you have to given the context as params
export const useTodo = () => {
  return useContext(TodoContext);
};
