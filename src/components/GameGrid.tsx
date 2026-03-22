import useGames from "@/hooks/useGames";
import type { Genre } from "@/hooks/useGenres";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSceleton from "./GameCardSceleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
        gap={3}
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
      gap={3}
    >
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
