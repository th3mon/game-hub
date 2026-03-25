import type { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card.Root>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <Card.Body>
      <HStack justifyContent="space-between" mb={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="xl">{game.name}</Heading>
    </Card.Body>
  </Card.Root>
);

export default GameCard;
