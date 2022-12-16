import { Flex, Box, Heading, Text, VStack, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

import PrimaryButton from "../components/PrimaryButton.jsx"

const AppPage = () => {
    return (
        <VStack w="100%" h="calc(100vh - 107.19px)" bg="background.200">
        <Spacer />
        <Flex textAlign={{base: 'center', md: 'inerhit'}} h="50%" flexDir={{base: 'column', md: 'row'}} px={8} alignItems={"center"} gap={"36px"} bgGradient='linear(background.200, background.100)' borderRadius={"10px"}>
            <Box>
                <Heading as='h2' size={{base: 'xl', md: '2xl'}}  my={"4px"}>MAKE THINGS EASIER</Heading>
                <Text fontSize={{base: 'md', md: 'xl'}} mb={"24px"}>download our phone app, available for both android & ios</Text>
                <PrimaryButton size={{base: 'sm', md: 'lg'}} text={"download app"} />
            </Box>
            <Box>
                <Image w={{base: "full", md: 'auto'}} h={{base: "xs", md: 'xl'}} objectFit='cover' src='./images/app_properties.png' alt="Phone screen with the landing page of the mobile app" />
            </Box>
        </Flex>
        <Spacer />
        </VStack>
    );
}

export default AppPage;