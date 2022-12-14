import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import PopularOrdersSlider from "./PopularOrdersSlider";

const PopularOrders = () => {
  return (
    <Box>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Box>
          <Heading as='h3' size='lg'>Most Popular Orders</Heading>
        </Box>
        <Box>
          <Text fontSize='xl'>Lorem ipsum dolor</Text>
        </Box>
      </Flex>
      <PopularOrdersSlider />
    </Box>
  );
}

export default PopularOrders;