import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import PrimaryButton from "./PrimaryButton.jsx";

const PopularOrderCard = (props) => {
    return (
        <Flex ms='10' mb='8' flexDir={"column"} gap={"4px"} w="325px" h={"475px"} p={4} borderRadius='10px' bg="background.100" boxShadow='lg'>
            <Box>
                <Image borderRadius='10px' w='300px' h='300px' objectFit='cover' src='./images/new_offer_burger.jpg' alt="placeholder image" />
            </Box>
            <Box>
                <Heading as='h1' size='lg' noOfLines={1} pl={2} mt={4}>{props.name}</Heading>
                <Text pl={2}>most popular orders</Text>
            </Box>
            <Box w={"200px"} pl={2} mt={4}>
                <PrimaryButton text={"order now"} />
            </Box>
        </Flex>
    );
}

export default PopularOrderCard;