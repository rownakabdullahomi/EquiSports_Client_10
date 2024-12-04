import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const {userRegister, setUser, googleLogin} = useContext(AuthContext);

  const handleRegister = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    userRegister(email, password)
    .then(res => {
      // console.log(res.user);
      const user = res.user;
      setUser(user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }


  const handleGoogleLogin = () => {
    googleLogin()
    .then((res) => {
      const user = res.user;
      setUser(user);
      alert("Google login successful!");
      navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  return (
    <div className=" bg-base-300 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Create Your Account
        </h2>
        <p className="text-sm text-center text-gray-500">
          Join us to enjoy all the features!
        </p>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            {/* Name Input */}
            {/* <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                required
              />
            </div> */}

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
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
                type="password"
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-secondary btn-outline w-full mt-6"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-sm text-gray-400">OR</div>

        {/* Social Register */}
        <div className="space-y-3">
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center justify-center">
            <FcGoogle size={24} />
            Register With Google
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
