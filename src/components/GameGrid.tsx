import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSceleton from "./GameCardSceleton";
import type { GameQuery } from "@/App";
import { Suspense } from "react";
import GameGridErrorBoundary from "./GameGridErrorBoundary";

interface Props {
  gameQuery: GameQuery;
}

const skeletons = [1, 2, 3, 4, 5, 6];

const GameGridSkeleton = () =>
  skeletons.map((skeleton) => (
    <GameCardContainer key={skeleton}>
      <GameCardSceleton />
    </GameCardContainer>
  ));

const GameGridContent = ({ gameQuery }: Props) => {
  const data = useGames(gameQuery);

  return data.map((game) => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ));
};

const GameGrid = ({ gameQuery }: Props) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      padding={2.5}
      gap={6}
    >
      <GameGridErrorBoundary key={JSON.stringify(gameQuery)}>
        <Suspense fallback={<GameGridSkeleton />}>
          <GameGridContent gameQuery={gameQuery} />
        </Suspense>
      </GameGridErrorBoundary>
    </SimpleGrid>
  );
};

export default GameGrid;
