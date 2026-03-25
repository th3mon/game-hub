import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSubmit: (searchText: string) => void;
}

const NavBar = ({ onSubmit }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={onSubmit} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
