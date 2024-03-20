import React, { useReducer } from "react";
import todoContext from "./todoContext";
import TodoReducer from "./todoReducer";

const initialState = {
  todos: [],
  sortOrder: "",
};

interface Props {
  children: React.ReactNode;
}
const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
