import { useContext } from "react";
import todoContext from "../todos/todoContext";
import AddTodoInput from "../todos/AddTodoInput";
import TodoList from "../todos/TodoList";
import { Box, HStack, Heading } from "@chakra-ui/react";
import SortSelector from "./SortSelector";

const HomePage = () => {
  const { state, dispatch } = useContext(todoContext);

  const visibleTodos = state.sortOrder
    ? state.todos.filter((todo) => todo.completed.toString() == state.sortOrder)
    : state.todos;

  return (
    <Box maxWidth="750px" margin="4rem auto" paddingX={2}>
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
        <SortSelector
          sortOrder={state.sortOrder}
          onSelectSortOrder={(selectedOrder) =>
            dispatch({ type: "SET_FILTER", orderValue: selectedOrder })
          }
        />
      </HStack>

      <TodoList
        todoList={visibleTodos}
        onToggleTodo={(selectedTodoId) =>
          dispatch({ type: "TOGGLE", todoId: selectedTodoId })
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
