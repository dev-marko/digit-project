import { Container, VStack, Flex, Heading, Text, Box, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const AboutPage = () => {
    return (
        <VStack bg="background.200">
            <Container maxW="container.xl" p="5" mt='8'>
                <Flex flexDirection={'column'} gap='4'>
                    <Heading>
                        OUR STORY
                    </Heading>
                    <Text fontSize={'lg'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </Text>
                    <Flex justify={'center'}>
                        <Box maxW='xl'>
                            <Image src='./images/placeholder.jpg' />
                        </Box>
                    </Flex>
                </Flex>
                <Flex flexDirection={'row'} mt='8'>
                    <Box>
                        <Heading>Contact</Heading>
                        <Stack mt='4' gap='4'>
                            <Box>
                                <Text>new york, usa</Text>
                                <Text>02/ 45 56 89 52</Text>
                            </Box>
                            <Box>
                                <Text>london, uk</Text>
                                <Text>02/ 45 56 89 52</Text>
                            </Box>
                            <Box>
                                <Text>paris, fr</Text>
                                <Text>02/ 45 56 89 52</Text>
                            </Box>
                            <Box>
                                <Text>email</Text>
                                <Text>jollybyte@contact.com</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box ms='20rem'>
                        <Heading>Location</Heading>
                        <Box>
                            map placeholder
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </VStack>
    );
}

export default AboutPage;