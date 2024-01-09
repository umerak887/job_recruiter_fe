import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";

const Listing = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...sliderSettings}>
        <div className="flex justify-center items-center">
          <ReviewCard />
        </div>
        <div className="flex justify-center items-center">
          <ReviewCard />
        </div>
        {/* Add more ReviewCard components for additional slides */}
      </Slider>
    </div>
  );
};

export default Listing;
