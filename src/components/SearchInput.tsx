import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          onSubmit(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="outline"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
