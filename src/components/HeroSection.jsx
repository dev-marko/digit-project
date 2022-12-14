import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import PrimaryButton from "./PrimaryButton.jsx";

const HeroSection = () => {
    return (<Flex h="100%" flexDir={"row"} alignItems={"center"} gap={"36px"}>
        <Box>
            <Heading as='h1' size='3xl' noOfLines={1} my={"4px"}>THE GODMOTHER</Heading>
            <Text fontSize='xl' mb={"24px"}>grilled onion, smoked BBQ sauce, picles, blah blah..</Text>
            <PrimaryButton size={"20px"} text={"order now"} />
        </Box>
        <Box>
        <Image borderRadius='10px'  w='65vh' h='65vh' objectFit='cover' src='./images/main-photo.png' alt="placeholder image" />
        </Box>
    </Flex>)
}

export default HeroSection;