import { Box } from '@chakra-ui/react';
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularOrderCard from './PopularOrderCard';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ChevronRightIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize={'35px'}
      _hover={{ color: 'black' }} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize={'35px'}
      _hover={{ color: 'black' }} />
  );
}

const PopularOrdersSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Box>
      <Slider {...settings}>
        {
          props.orders.map((item) => {
            return (
              <PopularOrderCard name={item.name} />
            );
          })
        }
      </Slider>
    </Box>
  );
}

export default PopularOrdersSlider;