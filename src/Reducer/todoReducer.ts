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

const TodoReducer = (todos: Todo[], action: todoActions): Todo[] => {
  if (action.type === "ADD")
    return [
      ...todos,
      { id: todos.length + 1, title: action.todo, completed: false },
    ];

  if (action.type === "DELETE") {
    return todos.filter((todo) => todo.id !== action.todoId);
  }
  if (action.type === "COMPLETED")
    return todos.map((todo) =>
      todo.id === action.todoId ? { ...todo, completed: !todo.completed } : todo
    );
  return todos;
};

export default TodoReducer;
