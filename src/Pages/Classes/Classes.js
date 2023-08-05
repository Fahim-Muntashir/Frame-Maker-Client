import React from "react";
import Class from "./Class";
import useCourse from "../../hooks/useClass";

const Classes = () => {
  // imported course from custom hooks
  const { courses, setCourses } = useCourse();
  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-6 sm:px-4 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-[#365CCE]">
            Find Your Next Course
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Explore Our Awesome Courses
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Class key={course._id} courses={course}></Class>
          ))}{" "}
        </div>
      </section>
    </div>
  );
};

export default Classes;
