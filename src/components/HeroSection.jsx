import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import PrimaryButton from "./PrimaryButton.jsx";

const HeroSection = () => {
    return (
        <Flex textAlign={{base: 'center', md: 'inerhit'}} h="100%" flexDir={{base: 'column', md: 'row'}} alignItems={"center"} gap={"36px"}>
            <Box>
                <Heading as='h1' size={{base: 'xl', md: '3xl'}}  my={"4px"}>THE GODMOTHER</Heading>
                <Text fontSize={{base: 'md', md: 'xl'}} mb={"24px"}>beef, bacon, cheddar cheese, diced onions and garlic sauce</Text>
                <PrimaryButton size={{base: 'sm', md: 'lg'}} noBorder={'none'} color={'#171717'} bg={'#ccf736'} text={"order now"} />
            </Box>
            <Box>
                <Image borderRadius='10px' w={{base: "xs", md: '65vh'}} h={{base: "xs", md: '65vh'}} objectFit='cover' src='./images/main-photo.png' alt="Hand reaching fries with burger in the background" />
            </Box>
        </Flex>
    );
}

export default HeroSection;