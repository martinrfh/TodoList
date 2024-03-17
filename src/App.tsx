import { useState } from "react";
import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
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
      <TodoList
        todoList={todos}
        onCompleteTodo={(selectedTodoId) =>
          setTodos(
            todos.map((todo) =>
              todo.id === selectedTodoId
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          )
        }
        onDeleteTodo={(selectedTodoId) =>
          setTodos(todos.filter((todo) => todo.id !== selectedTodoId))
        }
      />
    </>
  );
}

export default App;
