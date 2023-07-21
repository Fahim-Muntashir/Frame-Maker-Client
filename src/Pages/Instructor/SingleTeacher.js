import React from "react";

const SingleTeacher = ({ teacher }) => {
  console.log(teacher);
  return (
    <div>
      <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 h-80">
          <img
            className="object-center object-cover w-full h-full"
            src={teacher.image}
            alt="photo"
          />
        </div>
        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
          <p className="text-xl text-white font-bold">{teacher.name}</p>
          <p className="text-base text-gray-400 font-normal">
            {teacher.profession}
          </p>
          <p className="text-base leading-relaxed text-gray-500 font-normal">
            {teacher.about}
          </p>
          <p className="text-gray-300">{teacher.email}</p>
          <div className="flex justify-start space-x-2">
            <a href="#" className="text-gray-500 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.056-.06-1.4-.06-4.043v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.04 2.525c.636-.247 1.363-.416 2.427-.465 1.023-.047 1.377-.06 3.807-.06zM12 4a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 110 14 7 7 0 010-14zm5 4a1 1 0 11-2 0 1 1 0 012 0zm1 8a1 1 0 100-2 1 1 0 000 2zm-9 0a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-.002-14c2.209 0 3.974 1.785 3.974 3.987 0 2.206-1.785 3.974-3.974 3.974-2.206 0-3.974-1.785-3.974-3.974 0-2.202 1.768-3.987 3.974-3.987zm2.41 5.606l.975 1.99c.156.307.027.684-.294.84-.086.043-.177.063-.267.063-.236 0-.459-.132-.568-.354l-.923-1.878h-1.494c-.294 0-.546-.216-.587-.51-.024-.232.12-.454.352-.535.285-.09.574-.146.894-.146h.684L9.43 8.418c-.166-.33-.028-.74.3-.915.255-.134.55-.084.756.122l1.585 1.532 1.598-1.532c.27-.274.676-.31 1.004-.095.326.215.41.633.194.944l-.92 1.003h1.85l.99 2.006c.106.214.055.47-.138.646-.089.095-.198.166-.316.206-.106.037-.222.055-.33.055h-1.814l-.506-.966-.515.966H9.88l-.915-1.003c-.215-.236-.17-.603.073-.83a.621.621 0 01.842-.073l1.544 1.454 1.566-1.455c.25-.237.646-.236.895-.003zm2.79 2.78a1 1 0 10-1.998-.004 1 1 0 001.998.004z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
