import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../../Components/Container";
import useCourse from "../../../hooks/useClass";
import SingleClass from "./SingleClass";

const PopularClass = () => {
  const { courses, setCourses } = useCourse();
  const topStudent = courses.sort((a, b) => b.totalStudent - a.totalStudent);

  // Get the top 6 classes
  const top6class = topStudent.slice(0, 6);
  console.log(top6class);
  return (
    <Container>
      <h1 className="text-white pt-24 text-center text-3xl">
        Most Popular Curses
      </h1>
      <p className="text-center text-gray-500">
        <small>Explore more Courses to boast your creativity</small>
      </p>
      <div className="py-20 grid text-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {top6class.map((item) => (
          <SingleClass data={item} key={item._id} />
        ))}{" "}
        {}
      </div>
    </Container>
  );
};

export default PopularClass;
