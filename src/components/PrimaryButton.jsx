import { Button, Text } from "@chakra-ui/react";

const PrimaryButton = (props) => {
  return (
    <Button
      colorScheme={"#171717"}
      variant={"outline"}
      _hover={{ bg: props.bg, color: props.color, border: props.noBorder }}
      px={4}
      py={2}
      rounded={"full"}
      onClick={() => { props.func(props.text) }}
    >
      <Text fontSize={props.size} fontWeight={400}>
        {props.text}
      </Text>
    </Button>
  );
};


PrimaryButton.defaultProps = {
  bg: "#313131",
  color: "#fffcf2"
}

export default PrimaryButton;
