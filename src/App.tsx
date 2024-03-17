import { useState } from "react";
import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  title: string;
  completed: false;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <AddTodoInput
        onAddTodo={(todo) =>
          setTodos([
            ...todos,
            { id: todos.length + 1, title: todo, completed: false },
          ])
        }
      />
      <TodoList todoList={todos} />
    </>
  );
}

export default App;
