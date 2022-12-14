import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import PrimaryButton from "./PrimaryButton.jsx";

const Navbar = () => {
  let activeStyle = {
    fontWeight: '700',
  };


  return (
    <Flex
      bg='background.100'
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      my={'8'}
    >
      <Heading>jollybyte</Heading>
      <Flex flexDir={"row"} gap={16}>
        <Text fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : null}>home</NavLink>
        </Text>
        <Text fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>about us</NavLink>
        </Text>
        <Text fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
          <NavLink to="/app" style={({isActive}) => isActive ? activeStyle : null}>app</NavLink>
        </Text>
        <Text fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
          <NavLink to="/order" style={({isActive}) => isActive ? activeStyle : null}>order</NavLink>
        </Text>
      </Flex>
      <PrimaryButton size={'24px'} text={"menu"} />
    </Flex>
  );
};

export default Navbar;
