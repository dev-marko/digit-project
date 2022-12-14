import { Flex, Box, Text, Heading, Spinner } from "@chakra-ui/react";
import PopularOrdersSlider from "./PopularOrdersSlider";
import menuObject from "../assets/data/menu.json";
import { useEffect, useState } from "react";

const PopularOrders = () => {
  const [menu, setMenu] = useState([]);
  const [mostPopularOrders, setMostPopularOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMenu(menuObject.data);
    if (menu) {
      setMostPopularOrders(menu.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 4));
      setLoading(false);
    }
  }, [menu]);

  return (
    <Box mt='20' mb='20'>
      <Flex mb='8' flexDirection={'column'} alignItems={'center'}>
        <Box>
          <Heading as='h1' size='lg'>MOST POPULAR ORDERS</Heading>
        </Box>
        <Box>
          <Text fontSize='xl'>Lorem ipsum dolor</Text>
        </Box>
      </Flex>
      {
        loading ?
          <Flex flexDirection={'column'} alignItems={'center'}>
            <Spinner size='xl' />
          </Flex>
          :
          <PopularOrdersSlider orders={mostPopularOrders} />
      }
    </Box>
  );
}

export default PopularOrders;