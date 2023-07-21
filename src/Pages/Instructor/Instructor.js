import React, { useEffect, useState } from "react";
import SingleTeacher from "./SingleTeacher";

const Instructor = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);
  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-[#365CCE]">
            Find Your Next Genius Teacher
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Meet our awesome Teacher
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <SingleTeacher key={teacher.id} teacher={teacher}></SingleTeacher>
          ))}{" "}
        </div>
      </section>
    </div>
  );
};

export default Instructor;
