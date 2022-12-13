import { Button, Text } from "@chakra-ui/react";

const PrimaryButton = (props) => {
  return (
    <Button
      colorScheme={"#171717"}
      variant={"outline"}
      _hover={{ bg: "#313131", color: "#fffcf2" }}
      px={4}
      py={2}
      rounded={"full"}
    >
      <Text fontSize={"24px"} fontWeight={400}>
        {props.text}
      </Text>
    </Button>
  );
};

export default PrimaryButton;
