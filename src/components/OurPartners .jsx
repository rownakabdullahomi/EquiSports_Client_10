import Lottie from "lottie-react";
import nikeLogoAnimation from "../lottie/nike-logo.json";
import adidas2 from "../lottie/adidas2.json";
import { Zoom } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const OurPartners = () => {
  const partners = [
    // "https://frasersdev.a.bigcontent.io/v1/static/nike-logo-black-svg",
    // "https://frasersdev.a.bigcontent.io/v1/static/adidas-logo-black-svg",
    "https://frasersdev.a.bigcontent.io/v1/static/underarmour-logo-black-svg",
    "https://frasersdev.a.bigcontent.io/v1/static/puma-logo-black-svg",
    "https://i.ibb.co.com/Q9PpQvX/5on-running-1.png",
    "https://frasersdev.a.bigcontent.io/v1/static/the-north-face-logo-black",
  ];

  return (
    <section className="mx-auto px-4 lg:px-6 mb-10">
      <Zoom>
        <h2 className="text-4xl font-bold text-center my-10">
          Our Exclusive Partners
        </h2>
      </Zoom>
      <Marquee
        speed={50}
        pauseOnHover={true}
        //  gradient={false}
        className="py-4"
      >
        <div className="flex md:gap-x-24 gap-x-8 items-center">
          {/* Nike Logo Animation */}
          <div className="w-24 h-16 flex items-center ml-6">
            <Lottie
              animationData={nikeLogoAnimation}
              loop={true}
              className="mx-auto min-h-full"
            />
          </div>

          {/* Adidas Logo Animation */}
          <div className="w-24 h-16 flex items-center ">
            <Lottie
              animationData={adidas2}
              loop={true}
              className="mx-auto min-h-full "
            />
          </div>

          {partners.map((logo, index) => (
            <div
              key={index}
              className="w-24 h-16 flex items-center rounded-lg shadow-md p-2 dark:bg-gray-500"
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="object-contain max-h-full max-w-full mx-auto"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default OurPartners;
