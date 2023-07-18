import React from "react";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import Pricing from "../Pricing/Pricing";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClass></PopularClass>
      <PopularTeacher></PopularTeacher>
      <Pricing></Pricing>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
