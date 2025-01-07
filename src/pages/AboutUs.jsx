import AboutUsImage from "../assets/AboutUs.png";

const AboutUs = () => {
  return (
    <div className="px-4 lg:px-6 pb-10 bg-base-200">
      <h1 className="text-4xl font-bold  text-center py-10">
        About EquiSports
      </h1>
      <div className="lg:flex lg:gap-20 w-full">
      <div className="w-1/2 hidden lg:block">
        <img
          src={AboutUsImage}
          alt="Login Illustration"
          className="w-full h-[600px] object-contain mx-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2">
        <p className="text-lg mb-6">
          Welcome to <strong>EquiSports</strong> – your trusted destination for
          high-quality sports equipment! Whether you're a professional athlete
          or just starting your fitness journey, we offer a wide range of gear
          to meet your needs. Our mission is to provide athletes of all levels
          with top-notch products that help them perform at their best.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold  mb-4">Our Values</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong className="">Quality:</strong> We believe in providing
              only the best products for our customers.
            </li>
            <li>
              <strong className="">Customer Focus:</strong> Your satisfaction is
              our top priority. We offer excellent customer service.
            </li>
            <li>
              <strong className="">Innovation:</strong> We stay ahead of the
              curve by offering the latest and most advanced equipment.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold  pb-4">Our Team</h2>
          <p className="text-lg">
            At EquiSports, we're more than just a team – we're a family of
            sports enthusiasts who are passionate about helping you succeed. Our
            team members bring years of experience in the sports industry and
            are committed to supporting your athletic journey.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
