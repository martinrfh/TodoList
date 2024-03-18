import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import todoContext from "./context/todoContext";

const TodosCounter = () => {
  const { todos } = useContext(todoContext);
  return <Text fontSize="lg">you have {todos.length} task to do</Text>;
};

export default TodosCounter;
