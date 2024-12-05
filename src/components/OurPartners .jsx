import Lottie from "lottie-react";
import nikeLogoAnimation from "../../public/lottie/nike-logo.json";
import adidasLogoAnimation from "../../public/lottie/adidas-logo.json";
import { Zoom } from "react-awesome-reveal";

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
    <section className="mx-auto px-6 lg:px-10 py-12">
      <Zoom>
        <h2 className="text-4xl font-bold text-center lg:mb-20 mb-10">
          Our Exclusive Partners
        </h2>
      </Zoom>
      <div className="grid grid-cols-1 lg:flex lg:justify-between  items-center gap-6">
        <div className="w-32 h-16 flex justify-center items-center mx-auto">
          <Lottie animationData={nikeLogoAnimation} loop={true} />
        </div>

        <div className="w-32 h-16 flex justify-center items-center mx-auto">
          <Lottie animationData={adidasLogoAnimation} loop={true} />
        </div>

        {partners.map((logo, index) => (
          <div
            key={index}
            className="w-32 h-16 flex justify-center items-center mx-auto"
          >
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
