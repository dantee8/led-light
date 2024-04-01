import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col m-auto w-full items-center mt-[20%]
    "
    >
      <div className="text-6xl mb-10 ">404 Not Found</div>
      <Link
        className="border-2 px-3 py-2 rounded hover:bg-teal-800 hover:text-white"
        to="/"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
