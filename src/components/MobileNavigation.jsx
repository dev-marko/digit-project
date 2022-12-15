import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Fade,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { routes } from '../constants/routes'
import OrderDrawer from "./OrderDrawer.jsx";

const MobileNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="background.100" px={4} w="full" mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
            w="full"
          >
            <Heading as={NavLink} to="/">
              jollybyte
            </Heading>
            <IconButton
              bg="background.100"
              _hover={{ bg: "background.200" }}
              _active={{ bg: "background.200" }}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {routes.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              {routes.map((route) => (
                <NavLink to={route} key={route}>
                  {route.slice(1)}
                </NavLink>
              ))}
              {/* <Text
                fontSize={"24px"}
                fontWeight={400}
                _hover={{ fontWeight: "700", cursor: "pointer" }}
              > */}
                <OrderDrawer />
              {/* </Text> */}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MobileNavigation;
