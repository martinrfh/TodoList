import { useState } from "react";
import AddTodoInput from "./AddTodoInput";

interface Todo {
  id: number;
  title: string;
  completed: false;
}
function App() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  return (
    <>
      <AddTodoInput
        onAddTodo={(todo) =>
          setTasks([
            ...tasks,
            { id: tasks.length + 1, title: todo, completed: false },
          ])
        }
      />
    </>
  );
}

export default App;
