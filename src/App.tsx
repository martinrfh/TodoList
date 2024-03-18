import { useReducer } from "react";
import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";
import TodoReducer from "./Reducer/todoReducer";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <>
      <AddTodoInput
        onAddTodo={(todo) =>
          dispatch({
            type: "ADD",
            todo: todo,
          })
        }
      />
      <TodoList
        todoList={todos}
        onCompleteTodo={(selectedTodoId) =>
          dispatch({ type: "COMPLETED", todoId: selectedTodoId })
        }
        onDeleteTodo={(selectedTodoId) =>
          dispatch({
            type: "DELETE",
            todoId: selectedTodoId,
          })
        }
      />
    </>
  );
}

export default App;
