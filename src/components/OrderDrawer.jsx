import React from "react";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Image,
  HStack,
  VStack,
  Box,
  AspectRatio,
  IconButton,
  Icon,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { Heading, Text, Flex } from "@chakra-ui/layout";
import PrimaryButton from "./PrimaryButton";
import { useShoppingCart } from "../context/ShoppingCartContext";
import menuItems from "../assets/data/menu.json";

const OrderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const orderRef = React.useRef();
  const { cartItems, removeFromCart } = useShoppingCart();

  const isCartEmpty = cartItems.length === 0;

  const handleOrder = () => {
    console.log('hello');
    cartItems.forEach(item => {
      removeFromCart(item.id);
    });
  }

  return (
    <>
      <Text ref={orderRef} onClick={onOpen}>
        order
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={orderRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="background.100">
            <Flex h="75px" alignItems={"center"}>
              <DrawerCloseButton />
              <Text fontSize={"24px"} fontWeight={400}>
                order
              </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} mt={3} alignItems="flex-start">
              {isCartEmpty ? (
                <Text alignSelf="center">your order is empty</Text>
              )
                :
                cartItems.map((cartItem) => (
                  <HStack
                    rounded="lg"
                    key={cartItem.id}
                    p={3}
                    bg="background.100"
                    w="full"
                    justify="space-between"
                  >
                    <HStack>
                      <AspectRatio w="100px" maxW="100px" ratio={1}>
                        <Image
                          rounded="lg"
                          objectFit="cover"
                          src="./images/new_offer_burger.jpg" />
                      </AspectRatio>

                      <VStack
                        textAlign="left"
                        justifyContent="space-between"
                        spacing={3}
                      >
                        <Box>
                          <Heading size={{ base: "sm", md: "md" }}>
                            {cartItem.name}
                          </Heading>
                          <Text>
                            {cartItem.ingredients.length > 3
                              ? cartItem.ingredients.slice(0, 3).join(", ") +
                              "..."
                              : cartItem.ingredients.join(", ")}
                          </Text>
                        </Box>
                        <Text alignSelf="baseline">
                          quantity: {cartItem.quantity}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack justifyContent="space-between" alignItems="center">
                      <Heading
                        alignSelf="flex-start"
                        size={{ base: "sm", md: "md" }}
                      >
                        ${cartItem.rating}
                      </Heading>
                      <IconButton
                        onClick={() => removeFromCart(cartItem.id)}
                        w={10}
                        h={10}
                        color="#171717"
                        bg="background.200"
                        icon={<Icon as={DeleteIcon} />} />
                    </VStack>
                  </HStack>
                ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter borderTop={"1px solid black"}>
            <Flex w="100%" flexDir={"column"} py={4}>
              <Flex flexDir={"row"} justifyContent={"space-between"} py={2}>
                <Text fontSize="md">delivery fee</Text>
                <Text fontSize="md">$2,49</Text>
              </Flex>
              <Flex flexDir={"row"} justifyContent={"space-between"} pb={12}>
                <Heading as="h4" size="md">
                  TOTAL
                </Heading>
                <Heading as="h4" size="md">
                  $
                  {cartItems
                    .reduce((total, cartItem) => {
                      const item = menuItems.data.find(
                        (i) => i.id === cartItem.id
                      );
                      return total + (item?.rating || 0) * cartItem.quantity;
                    }, 0)
                    .toFixed(2)}
                </Heading>
              </Flex>
              <Button
                colorScheme={"#171717"}
                variant={"outline"}
                _hover={{ bg: "#313131", color: "#fffcf2" }}
                px={4}
                py={2}
                rounded={"full"}
                onClick={handleOrder}
              >
                <Text fontWeight={400}>
                  purchase
                </Text>
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OrderDrawer;
