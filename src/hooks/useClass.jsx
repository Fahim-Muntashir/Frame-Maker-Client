import { useEffect, useState } from "react";
const useCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return { courses, setCourses };
};
export default useCourse;
