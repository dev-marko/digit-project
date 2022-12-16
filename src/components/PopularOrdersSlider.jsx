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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <Slider {...settings}>
        {
          props.orders.map((item) => {
            return (
              <PopularOrderCard obj={item} />
            );
          })
        }
      </Slider>
  );
}

export default PopularOrdersSlider;