import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import todoContext from "./context/todoContext";

const TodosCounter = () => {
  const { todos } = useContext(todoContext);
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  return (
    <Text fontSize="lg">you have {incompleteTodos.length} task to do</Text>
  );
};

export default TodosCounter;
