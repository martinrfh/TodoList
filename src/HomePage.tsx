import { useContext } from "react";
import todoContext from "./context/todoContext";
import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";

const HomePage = () => {
  const { todos, dispatch } = useContext(todoContext);
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
};

export default HomePage;
