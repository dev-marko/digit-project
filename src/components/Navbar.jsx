import { Flex, Heading, Text } from "@chakra-ui/react";

import PrimaryButton from "./PrimaryButton.jsx";

const Navbar = () => {
  return (
    <Flex
      bg='background.100'
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      my={'8'}
    >
      <Heading>jollybyte</Heading>
      <Flex flexDirection={"row"} gap={16}>
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
      <PrimaryButton size={'24px'} text={"menu"} />
    </Flex>
  );
};

export default Navbar;
