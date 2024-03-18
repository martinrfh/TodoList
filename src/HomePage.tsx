import { useContext } from "react";
import todoContext from "./todos/todoContext";
import AddTodoInput from "./todos/AddTodoInput";
import TodoList from "./todos/TodoList";
import { Box, Heading } from "@chakra-ui/react";

const HomePage = () => {
  const { todos, dispatch } = useContext(todoContext);
  return (
    <Box maxWidth="600px" margin="4rem auto" paddingX={2}>
      <Heading textAlign="center" fontSize="5xl" marginBottom="2rem">
        Todo List
      </Heading>
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
    </Box>
  );
};

export default HomePage;
