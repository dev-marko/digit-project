import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

const NewOffer = () => {
  return (
    <Flex mb='5' flexDirection={'row'} bg='background.100' borderRadius='10px'>
      <Box ps='10' py='6' flex='1'>
        <Image borderRadius='10px' w='75vh' h='50vh' objectFit='cover' src='./images/placeholder.png' alt="placeholder image" />
      </Box>
      <Box flex='1' pe='10' py='6'>
        <Box p='5'>
          <Heading>New Cheeseburger!</Heading>
          <Text my='5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Mi proin sed libero enim sed faucibus turpis in. Sed viverra ipsum nunc aliquet bibendum 
            enim facilisis. Cursus mattis molestie a iaculis at erat pellentesque. Aenean vel elit
            scelerisque mauris. Velit euismod in pellentesque massa placerat duis.
          </Text>
          <PrimaryButton text={'More Info'}/>
        </Box>
      </Box>
    </Flex>
  );
}

export default NewOffer;