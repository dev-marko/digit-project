import { Heading, Container, Flex, Box, VStack, Spinner, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import PrimaryButton from "../components/PrimaryButton";

import categoriesObject from "../assets/data/categories.json";
import menuObject from "../assets/data/menu.json";
import MenuItemCard from "../components/MenuItemCard";

const MenuPage = () => {
    const [menu, setMenu] = useState();
    const [categories, setCategories] = useState();
    const [filteredMenu, setFilteredMenu] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCategories(categoriesObject.data);
        setMenu(menuObject.data);
        setFilteredMenu(menuObject.data);

        if (categories) {
            setLoading(false);
        }
    }, [categories]);

    const handleCategoryClick = (category) => {
        const filtered = menu.filter(entity => entity.category === category);
        setFilteredMenu(filtered);
    }

    return (
        <>
            {
                loading ?
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Spinner size='xl' />
                    </Flex>
                    :
                    <VStack bg="background.200">
                        <Container maxW="container.xl" p="5" mt='8'>
                            <Flex flexDirection={'column'} gap='8'>
                                <Box>
                                    <Heading>
                                        BROWSE OUR KITCHEN!
                                    </Heading>
                                </Box>
                                <Flex gap='12'>
                                    <Flex flexDir={'column'} gap='4'>
                                        {
                                            categories.map((item) => {
                                                return (
                                                    <ButtonGroup size='sm'>
                                                        <PrimaryButton func={handleCategoryClick} text={item} />
                                                    </ButtonGroup>
                                                );
                                            })
                                        }
                                    </Flex>
                                    <SimpleGrid columns={3} spacing={10}>
                                        {
                                            filteredMenu.map((item) => {
                                                return (
                                                    <MenuItemCard obj={item} />
                                                );
                                            })
                                        }
                                    </SimpleGrid>
                                </Flex>
                            </Flex>
                        </Container>
                    </VStack>
            }
        </>
    );
}

export default MenuPage;