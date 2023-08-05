import React from "react";
import img from "../../../assest/Banner/banner.png";
import img1 from "../../../assest/Banner/banner.jpg";
import img2 from "../../../assest/Banner/banner1.png";
import img3 from "../../../assest/Banner/banner3.png";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  const data = [
    {
      image: `${img3}`,
    },
    {
      image: `${img1}`,
    },
    {
      image: `${img2}`,
    },
    {
      image: `${img}`,
    },
  ];

  const slideNumberStyle = {
    fontSize: "10px",
    fontWeight: "bold",
  };
  return (
    <div className="bg-gray-800" style={{ textAlign: "center" }}>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Carousel
          className="flex items-center justify-center"
          data={data}
          time={2000}
          width="100%"
          height="500px"
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "500px",
            margin: "0px auto",
            padding: "40px 0",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
