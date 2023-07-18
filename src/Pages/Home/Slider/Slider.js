import React from "react";
import img1 from "../../../assest/Banner/banner.jpg";
import img2 from "../../../assest/Banner/banner1.jpg";
import img3 from "../../../assest/Banner/banner3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
