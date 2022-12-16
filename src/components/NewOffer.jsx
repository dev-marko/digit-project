import { Flex, Box, Text, Image, Heading, HStack } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

const NewOffer = () => {
  return (
    <Flex mb='8' flexDirection={{base: 'column', md: 'row'}} bgGradient='linear(background.100, background.200)' alignItems={"center"} borderRadius='10px'>
      <HStack p='8' alignItems={'center'} justify={'center'}>
        <Image borderRadius='10px' w='50vh' h='25vh' objectFit='cover' src='./images/new_offer_burger.jpg' alt="placeholder image"/>
      </HStack>
      <Box flex='1' pe='10' py='6'>
        <Box p='5'>
          <Heading as='h3' size='lg'>NEW CHEESEBURGER!</Heading>
          <Text my='5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mi proin sed libero enim sed faucibus turpis in. Sed viverra ipsum nunc aliquet bibendum
            enim facilisis. Cursus mattis molestie a iaculis at erat pellentesque. Aenean vel elit
            scelerisque mauris. Velit euismod in pellentesque massa placerat duis.
          </Text>
          <PrimaryButton text={'more info'} />
        </Box>
      </Box>
    </Flex>
  );
}

export default NewOffer;