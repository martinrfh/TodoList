import { Dispatch } from "react";
import { Todo, todoActions } from "./todoReducer";
import React from "react";

interface todoContextType {
  state: {
    todos: Todo[];
    sortOrder: string;
  };
  dispatch: Dispatch<todoActions>;
}

const todoContext = React.createContext<todoContextType>({} as todoContextType);

export default todoContext;
