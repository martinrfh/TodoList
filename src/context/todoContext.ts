import { Dispatch } from "react";
import { Todo, todoActions } from "../Reducer/todoReducer";
import React from "react";

interface todoContextType {
  todos: Todo[];
  dispatch: Dispatch<todoActions>;
}

const todoContext = React.createContext<todoContextType>({} as todoContextType);

export default todoContext;
