import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import todoContext from "../todos/todoContext";

const TodosCounter = () => {
  const { state } = useContext(todoContext);
  const incompleteTodos = state.todos.filter((todo) => !todo.completed);
  return <Text fontSize="lg">pending tasks : {incompleteTodos.length} </Text>;
};

export default TodosCounter;
