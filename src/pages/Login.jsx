
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-base-300 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-500">
          Please login to your account.
        </p>

        {/* Login Form */}
        <form>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-primary"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-primary"
                required
              />
            </div>


          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-outline btn-primary w-full mt-6"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-sm text-gray-400">OR</div>

        {/* Social Login */}
        <div className="space-y-3">
          <button
            className="btn btn-outline w-full flex items-center justify-center"
          >
            <FcGoogle size={24} />
            Login With Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-secondary font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
