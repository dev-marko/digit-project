import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

const NewOffer = () => {
  return (
    <Flex mb='5' flexDirection={'row'} bg='background.100' alignItems={"center"} sborderRadius='10px'>
      <Box ps='10' py='6' flex='1' alignItems={'center'}>
        <Image alignItems={'center'} borderRadius='10px' w='50vh' h='25vh' objectFit='cover' src='./images/new_offer_burger.jpg' alt="placeholder image" />
      </Box>
      <Box flex='1' pe='10' py='6'>
        <Box p='5'>
          <Heading as='h3' size='lg'>New Cheeseburger!</Heading>
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