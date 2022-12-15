import { Flex, Heading, Text, Box, Image} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Icon } from '@chakra-ui/react'
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci'

import OrderDrawer from "./OrderDrawer.jsx";

const Footer = () => {
    return (
      <Flex flexDir={"column"} justifyContent={"center"}>
        <Flex flexDir={{base: "column", md: "row"}} gap={8} mt={16}>
          <Text fontSize={"20px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
            <NavLink to="/">home</NavLink>
          </Text>
          <Text fontSize={"20px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
            <NavLink to="/about">about us</NavLink>
          </Text>
          <Text fontSize={"20px"} fontWeight={400} _hover={{ fontWeight: '700' }}>
            <NavLink to="/app">app</NavLink>
          </Text>
          <Text fontSize={"20px"} fontWeight={400} _hover={{ fontWeight: '700', cursor: "pointer"}}>
          <OrderDrawer />
          </Text>
        </Flex>

        <Flex flexDir={{base: "column", md: "row"}} gap={8} mt={6} justifyContent={'space-between'}>
          <Flex gap={2}>
            <Icon as={CiFacebook} boxSize={8} color="##171717" _hover={{cursor: "pointer"}}/>
            <Icon as={CiInstagram} boxSize={8} color="#171717" _hover={{cursor: "pointer"}}/>
            <Icon as={CiTwitter} boxSize={8} color="#171717" _hover={{cursor: "pointer"}}/>
          </Flex>
          <Box as={NavLink} to="/">
            <Image w='200px' src='./images/jollybyte-logo.svg'/>
          </Box>
        </Flex>

        <Flex flexDir={{base: "column", md: "row"}} gap={8} mt={1 } mb={12} justifyContent={'space-between'}>
          <Flex gap={4}>
            <Text fontSize={"16px"} fontWeight={400} _hover={{cursor: "pointer", textDecoration: "underline"}}>privacy statement</Text>
            <Text fontSize={"16px"} fontWeight={400} _hover={{cursor: "pointer", textDecoration: "underline"}}>terms & conditions</Text>
            <Text fontSize={"16px"} fontWeight={400} _hover={{cursor: "pointer", textDecoration: "underline"}}>cookie policy</Text>
            <Text fontSize={"16px"} fontWeight={400} _hover={{cursor: "pointer", textDecoration: "underline"}}>cookie settings</Text>
          </Flex>
          <Text fontSize={"16px"} fontWeight={400}>&#169; 2022 jollybyte all rights reserved</Text>
        </Flex>
      </Flex>
    );
  };
  
  export default Footer;
  