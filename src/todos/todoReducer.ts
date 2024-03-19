interface State {
  todos: Todo[];
  filterByCompleted: Todo[];
}

interface AddTodo {
  type: "ADD";
  todo: string;
}

interface DeleteTodo {
  type: "DELETE";
  todoId: number;
}

interface CompleteTodo {
  type: "COMPLETED";
  todoId: number;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type todoActions = AddTodo | DeleteTodo | CompleteTodo;

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
    case "COMPLETED":
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
    // case "SET_FILTER":
    //   return { ...state, filterByCompleted: action.todoId };
    default:
      return state;
  }
};

export default TodoReducer;
