import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-800 animate-bounce">404!</h1>
        <h2 className="text-4xl font-bold text-gray-600 mt-4 ">Page Not Found</h2>
        <p className="text-lg text-gray-500 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-error btn-outline text-lg px-8 mt-4 animate-pulse">
          Go to Homepage
        </Link>
      </div>
    </div>
    );
};

export default Error404;