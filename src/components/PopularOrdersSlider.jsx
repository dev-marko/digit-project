import { Box, Image } from '@chakra-ui/react';
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize={'25px'}
      _hover={{ color: 'black' }} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize={'25px'}
      _hover={{ color: 'black' }} />
  );
}

const PopularOrdersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <Slider {...settings}>
        <Box>
          <Image src='./images/new_offer_burger.jpg' alt="placeholder image" style={{ margin: 'auto' }} />
        </Box>
        <Box>
          <Image src='./images/new_offer_burger.jpg' alt="placeholder image" style={{ margin: 'auto' }} />
        </Box>
        <Box>
          <Image src='./images/new_offer_burger.jpg' alt="placeholder image" style={{ margin: 'auto' }} />
        </Box>
      </Slider>
    </>
  );
}

export default PopularOrdersSlider;