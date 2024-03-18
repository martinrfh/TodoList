import React, { useReducer } from "react";
import todoContext from "./todoContext";
import TodoReducer from "./todoReducer";

interface Props {
  children: React.ReactNode;
}
const TodoProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
