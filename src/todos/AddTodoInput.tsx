import { Input } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

interface Props {
  onAddTodo: (todo: string) => void;
}

const AddTodoInput = ({ onAddTodo }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current?.value) {
      onAddTodo(ref.current.value);
    }
  };
  return (
    <form onSubmit={handleAddTodo}>
      <Input ref={ref} variant="filled" placeholder="Add New Todo"></Input>
    </form>
  );
};

export default AddTodoInput;
