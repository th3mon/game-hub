import { Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return <Text>{error}</Text>;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
