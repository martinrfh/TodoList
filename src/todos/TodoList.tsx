import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { Todo } from "./todoReducer";

interface Props {
  todoList: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todoList, onDeleteTodo, onToggleTodo }: Props) => {
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
            textTransform="capitalize"
            color="white"
            fontWeight="bold"
            textDecoration={todo.completed ? "line-through" : ""}
          >
            {todo.title}
          </Text>
          <HStack>
            <Button
              colorScheme="teal"
              marginX={1}
              onClick={() => onToggleTodo(todo.id)}
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
