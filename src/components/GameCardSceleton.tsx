import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSceleton = () => (
  <Card.Root>
    <Skeleton height={200} />
    <Card.Body>
      <Box width="full">
        <SkeletonText />
      </Box>
    </Card.Body>
  </Card.Root>
);

export default GameCardSceleton;
