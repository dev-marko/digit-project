import { Container, VStack } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection.jsx";

import NewOffer from "../components/NewOffer";
import NewOfferReversed from "../components/NewOfferReversed";
import PopularOrders from "../components/PopularOrders";

const HomePage = () => {
  return (
    <>
      <VStack w="100%" h="calc(100vh - 107.19px)" bg="background.100">
        <HeroSection />
      </VStack>
      <VStack bg="background.200">
        <Container maxW="container.xl" p="5" mb={32}>
          <PopularOrders/>
          <NewOffer />
          <NewOfferReversed />
        </Container>
      </VStack>
    </>
  );
};

export default HomePage;
