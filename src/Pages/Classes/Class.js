import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import useCart from "../../hooks/useCart";

const Class = ({ courses }) => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const {
    _id,
    image,
    name,
    instructorName,
    price,
    classBackground,
    availableSeats,
  } = courses;

  // Set the initial available seats count
  // Add a function to handle the button click
  const handleCart = (course) => {
    // Check if the user is logged in and available seats are greater than 0
    if (user && availableSeats > 0) {
      const orderItem = {
        classId: _id,
        name,
        image,
        price,
        instructorName,
        email: user.email,
      };
      console.log(course);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Successfully Login!!");
          }
        });
    } else if (!user) {
      // Display a message if the user is not logged in
      console.log("Please log in before selecting the course.");
    } else if (availableSeats === 0) {
      // Disable the button if there are no available seats
      console.log("Sorry, no available seats for this lesson.");
    }
  };
  return (
    <div className="bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <Toaster position="top-center" reverseOrder={false} />

      <h3 className="mb-3 text-xl font-bold text-indigo-600">
        Beginner Friendly
      </h3>
      <div className="relative">
        <img className="w-full rounded-xl" src={image} alt="Colors" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          FREE
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        Javascript Bootcamp for Absolute Beginners
      </h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p>1:34:23 Minutes</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>3 Parts</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <p>Vanilla JS</p>
        </div>
        <button
          className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
          onClick={() => handleCart(courses)}
          disabled={!user || availableSeats === 0}
        >
          Buy Lesson
        </button>
      </div>
    </div>
  );
};

export default Class;
