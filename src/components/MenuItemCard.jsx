import {
  Card,
  CardBody,
  Divider,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Spacer,
  Flex,
  Box,
  HStack,
  Fade,
  Button,
} from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

import { useShoppingCart } from "../context/ShoppingCartContext";

const MenuItemCard = (props) => {
  const { increaseCartQuantity, cartItems } = useShoppingCart();

  return (
    <Fade in={true}>
      <Card maxW="sm" bg={"background.100"}>
        <CardBody>
          <Stack mt="6" spacing="4">
            <Image
              src="./images/placeholder.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Flex>
              <Box>
                <Heading size="md">{props.obj.name}</Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading size="md">${props.obj.rating}</Heading>
              </Box>
            </Flex>
            <Text>beef, cheese, tomato, lettuce...</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Box ms="3">
            <HStack spacing={"28px"}>
              <PrimaryButton text={"buy now"} size={"18px"} />
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
                <Text fontSize={props.size} fontWeight={400}>
                  add to cart
                </Text>
              </Button>
            </HStack>
          </Box>
        </CardFooter>
      </Card>
    </Fade>
  );
};

export default MenuItemCard;
