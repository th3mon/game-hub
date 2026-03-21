import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSceleton from "./GameCardSceleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        padding={2.5}
        gap={10}
      >
        {skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSceleton />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      padding={2.5}
      gap={10}
    >
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
