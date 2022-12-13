import { Flex, Button, Heading, Text } from "@chakra-ui/react";

import PrimaryButton from "./PrimaryButton.jsx";

const Navbar = () => {
  return (
    <Flex
      bgColor={"#FCF5E1"}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={148}
      py={6}
    >
      <Heading>jollybytes</Heading>
      <Flex flexDir={"row"} gap={16}>
        <Text fontSize={"24px"} fontWeight={400}>
          home
        </Text>
        <Text fontSize={"24px"} fontWeight={400}>
          about us
        </Text>
        <Text fontSize={"24px"} fontWeight={400}>
          order
        </Text>
      </Flex>
      <PrimaryButton text={"menu"} />
    </Flex>
  );
};

export default Navbar;
