import { Container, VStack, Flex, Heading, Text, Box, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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
                        {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer> */}
                        <Box mt='4'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11859.356690774566!2d21.39479!3d42.003727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd885169619e42643!2sAxeltra!5e0!3m2!1sen!2smk!4v1671122530442!5m2!1sen!2smk" width="640" height="260" style={{border: 0,}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </VStack>
    );
}

export default AboutPage;