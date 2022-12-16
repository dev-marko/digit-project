import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { routes } from '../constants/routes'
import OrderDrawer from "./OrderDrawer.jsx";
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
      <Box as={NavLink} to="/">
        <Image w='200px' src='./images/jollybyte-logo.svg' />
      </Box>
      <Flex flexDir={"row"} gap={16}>
        {routes.map((route) => (
          <Text key={route} fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
            <NavLink to={route} style={({ isActive }) => isActive ? activeStyle : null}>{route.slice(1)}</NavLink>
          </Text>
        ))}
        <Text fontSize={"24px"} fontWeight={400} _hover={{ fontWeight: '700', cursor: "pointer" }} >
          <OrderDrawer />
        </Text>
      </Flex>
      <NavLink to="/menu">
        <PrimaryButton noBorder={'none'} color={'#fffcf2'} bg={'#f85b47'} size={'24px'} text={"menu"} />
      </NavLink>
    </Flex>
  );
};

export default Navbar;
