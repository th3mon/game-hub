import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return <Text>{error}</Text>;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <List.Root unstyled>
      {data.map((genre) => (
        <List.Item key={genre.id} py={2}>
          <HStack>
            <Image
              boxSize={7}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
