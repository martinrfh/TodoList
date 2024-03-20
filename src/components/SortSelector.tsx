import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

const sortOrders = [
  { value: "", label: "ALL" },
  { value: "true", label: "COMPLETE" },
  { value: "false", label: "INCOMPLETE" },
];

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} iconSpacing={8} rightIcon={<ChevronDownIcon />}>
        {currentSortOrder?.label || "All"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, index) => (
          <MenuItem
            key={index}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
