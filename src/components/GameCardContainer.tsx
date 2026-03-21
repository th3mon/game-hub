import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => (
  <Box borderRadius={10} overflow="hidden" width={300}>
    {children}
  </Box>
);

export default GameCardContainer;
