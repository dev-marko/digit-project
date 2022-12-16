import {
  Card,
  CardBody,
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
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <Fade in={true}>
      <Card maxW="sm" bg={"background.100"}>
        <CardBody>
          <Stack mt="6" spacing="4">
            <Image
              src={props.obj.imgUrl}
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
            <Text>
              {props.obj.ingredients.length > 3
                ? props.obj.ingredients.slice(0, 3).join(", ") +
                "..."
                : props.obj.ingredients.join(", ")}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter justify={'center'} alignItems={'center'}>
          <HStack gap='3' justify={'space-between'}>
            <Box>
              <PrimaryButton noBorder={'none'} color={'#171717'} bg={'#ccf736'} text={"buy now"} size={"18px"} />
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
                <Text fontSize={'18px'} fontWeight={400}>
                  add to order
                </Text>
              </Button>
            </Box>
          </HStack>
        </CardFooter>
      </Card>
    </Fade>
  );
};

export default MenuItemCard;
