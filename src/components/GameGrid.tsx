import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSceleton from "./GameCardSceleton";

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
          <GameCardSceleton key={skeleton} />
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
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
