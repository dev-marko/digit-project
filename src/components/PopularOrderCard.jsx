import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

import { useShoppingCart } from "../context/ShoppingCartContext";

import PrimaryButton from "./PrimaryButton.jsx";

const PopularOrderCard = (props) => {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <Flex
      ms="10"
      mb="8"
      flexDir={"column"}
      gap={"4px"}
      w="325px"
      h={"475px"}
      p={4}
      borderRadius="10px"
      bg="background.100"
      boxShadow="lg"
    >
      <Box>
        <Image
          borderRadius="10px"
          w="300px"
          h="300px"
          objectFit="cover"
          src={props.obj.imgUrl}
          alt="placeholder image"
        />
      </Box>
      <VStack alignItems={"flex-start"}>
        <Heading as="h1" size="lg" noOfLines={1} mt={4}>
          {props.obj.name}
        </Heading>
        <Text>
          {props.obj.ingredients.length > 3
            ? props.obj.ingredients.slice(0, 3).join(", ") + "..."
            : props.obj.ingredients.join(", ")}
        </Text>
      </VStack>
      <HStack mt="2" justify={"space-evenly"}>
        <Box>
          <PrimaryButton
            noBorder={"none"}
            color={"#171717"}
            bg={"#ccf736"}
            text={"buy now"}
            size={"18px"}
          />
        </Box>
        <Box>
          <Button
            colorScheme={"#171717"}
            variant={"outline"}
            _hover={{ bg: "#313131", color: "#fffcf2" }}
            px={4}
            py={2}
            rounded={"full"}
            onClick={() => increaseCartQuantity(props.obj)}
            size={"18px"}
          >
            <Text fontSize={"18px"} fontWeight={400}>
              add to order
            </Text>
          </Button>
        </Box>
      </HStack>
    </Flex>
  );
};

export default PopularOrderCard;
