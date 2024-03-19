import TodosCounter from "./TodosCounter";
import ColorModeSwitch from "./ColorModeSwitch";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <TodosCounter />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
