import { Container, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NewOffer from "../components/NewOffer";
import NewOfferReversed from "../components/NewOfferReversed";

const HomePage = () => {

  return (
    <>
      <VStack bg='background.200'>
        <Container maxW='container.xl' p='5'>
          <NewOffer />
          <NewOfferReversed/>
        </Container>
      </VStack>
    </>
  );
}

export default HomePage;