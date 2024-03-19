import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import todoContext from "../todos/todoContext";

const TodosCounter = () => {
  const { state } = useContext(todoContext);
  const incompleteTodos = state.todos.filter((todo) => !todo.completed);
  return (
    <Text fontSize="lg">you have {incompleteTodos.length} task to do</Text>
  );
};

export default TodosCounter;
