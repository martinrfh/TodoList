import { Todo } from "./App";
import { HStack, Box, Text, Button } from "@chakra-ui/react";

interface Props {
  todoList: Todo[];
  onCompleteTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todoList, onCompleteTodo, onDeleteTodo }: Props) => {
  return (
    <Box marginTop={10}>
      {todoList.map((todo) => (
        <HStack
          key={todo.title}
          padding={3}
          borderRadius={5}
          backgroundColor={todo.completed ? "teal.700" : "gray.600"}
          justifyContent="space-between"
          marginBottom={5}
        >
          <Text
            fontWeight="bold"
            textDecoration={todo.completed ? "line-through" : ""}
          >
            {todo.title}
          </Text>
          <HStack>
            <Button
              colorScheme="teal"
              marginX={1}
              onClick={() => onCompleteTodo(todo.id)}
            >
              Done
            </Button>
            <Button colorScheme="red" onClick={() => onDeleteTodo(todo.id)}>
              Delete
            </Button>
          </HStack>
        </HStack>
      ))}
    </Box>
  );
};

export default TodoList;
