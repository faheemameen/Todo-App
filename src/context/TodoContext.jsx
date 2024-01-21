import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
