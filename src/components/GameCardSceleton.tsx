import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSceleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width={300}>
      <Skeleton height={200} />
      <Card.Body>
        <Box width="full">
          <SkeletonText />
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSceleton;
