import { useEffect, useState } from "react";
const useCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://frame-maker-server-fahimmuntashir1.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return { courses, setCourses };
};
export default useCourse;
