import { useContext } from "react";
import todoContext from "../todos/todoContext";
import AddTodoInput from "../todos/AddTodoInput";
import TodoList from "../todos/TodoList";
import { Box, HStack, Heading } from "@chakra-ui/react";

const HomePage = () => {
  const { state, dispatch } = useContext(todoContext);

  return (
    <Box maxWidth="700px" margin="4rem auto" paddingX={2}>
      <Heading textAlign="center" fontSize="5xl" marginBottom="2rem">
        Todo List
      </Heading>
      <HStack>
        <AddTodoInput
          onAddTodo={(todo) =>
            dispatch({
              type: "ADD",
              todo: todo,
            })
          }
        />
      </HStack>

      <TodoList
        todoList={state.todos}
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
