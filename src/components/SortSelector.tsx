import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const triggerStyles = {
  bg: "#666c79",
  color: "#f3f4f6",
  border: "1px solid",
  borderColor: "#707787",
  borderRadius: "12px",
  py: 2,
  px: 4,
  boxShadow: "sm",
  _hover: { bg: "#717786" },
  _expanded: { bg: "#717786", borderColor: "#81889a" },
};

const menuContentStyles = {
  bg: "#353d4f",
  color: "#f3f4f6",
  border: "1px solid",
  borderColor: "#5e6677",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
  minW: "320px",
  py: 2,
};

const menuItemStyles = {
  px: 3,
  py: 1,
  borderRadius: 0,
  _highlighted: {
    bg: "#434c5f",
  },
};

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [open, setOpen] = useState(false);
  const currnetSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Button {...triggerStyles}>
          Order by: {currnetSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content {...menuContentStyles}>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => onSelectSortOrder(order.value)}
                {...menuItemStyles}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
