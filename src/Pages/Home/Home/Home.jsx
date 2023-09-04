import React from "react";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import Pricing from "../Pricing/Pricing";
import NewsLetter from "../NewsLetter/NewsLetter";
import OurOffer from "../OurOffer/OurOffer";
import Trust from "../Trust/Trust";
import Faq from "../Faq/Faq";
import FreeCourse from "../FreeCourse/FreeCourse";
import Blog from "../Blog/Blog";
import TrustBy from "../TrustBy/TrustBy";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClass></PopularClass>
      {/* <PopularTeacher></PopularTeacher> */}
      <Trust></Trust>
      <OurOffer></OurOffer>
      <Pricing></Pricing>
      <FreeCourse></FreeCourse>
      <TrustBy></TrustBy>
      <Blog></Blog>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
