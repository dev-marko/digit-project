import { Card, CardBody, Divider, Image, Stack, Heading, Text, CardFooter, Spacer, Flex, Box, HStack, Fade } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

const MenuItemCard = (props) => {

  return (
    <Fade in={true}>
      <Card maxW='sm' bg={'background.100'}>
        <CardBody>
          <Stack mt='6' spacing='4'>
            <Image
              src='./images/placeholder.jpg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Flex>
              <Box>
                <Heading size='md'>{props.obj.name}</Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading size='md'>
                  ${props.obj.rating}
                </Heading>
              </Box>
            </Flex>
            <Text>
              beef, cheese, tomato, lettuce...
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Box ms='3'>
            <HStack spacing={'28px'}>
              <PrimaryButton text={'buy now'} size={'18px'} />
              <PrimaryButton text={'add to order'} size={'18px'} />
            </HStack>
          </Box>
        </CardFooter>
      </Card>
    </Fade>
  );
}

export default MenuItemCard;