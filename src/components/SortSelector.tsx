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

const SortSelector = () => {
  const [open, setOpen] = useState(false);

  // if (error) return null;

  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Button {...triggerStyles}>
          Order
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content {...menuContentStyles}>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Relevance
            </Menu.Item>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Date added
            </Menu.Item>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Name
            </Menu.Item>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Release date
            </Menu.Item>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Popularity
            </Menu.Item>
            <Menu.Item
              value="value"
              onClick={() => console.log("test")}
              {...menuItemStyles}
            >
              Average rating
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
