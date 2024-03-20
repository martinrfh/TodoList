interface State {
  todos: Todo[];
  sortOrder: string;
}

interface AddTodo {
  type: "ADD";
  todo: string;
}

interface DeleteTodo {
  type: "DELETE";
  todoId: number;
}

interface ToggleTodo {
  type: "TOGGLE";
  todoId: number;
}

interface SetFilter {
  type: "SET_FILTER";
  orderValue: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type todoActions = AddTodo | DeleteTodo | ToggleTodo | SetFilter;

const TodoReducer = (state: State, action: todoActions) => {
  const { todos } = state;
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...todos,
          { id: Date.now(), title: action.todo, completed: false },
        ],
      };
    case "TOGGLE":
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === action.todoId
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE":
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== action.todoId),
      };
    case "SET_FILTER":
      return { ...state, sortOrder: action.orderValue };
    default:
      return state;
  }
};

export default TodoReducer;
