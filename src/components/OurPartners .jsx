import Lottie from "lottie-react";
import nikeLogoAnimation from "../../public/lottie/nike-logo.json";
import adidasLogoAnimation from "../../public/lottie/adidas-logo.json";

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
      <h2 className="text-4xl font-bold text-center mb-12">Our Exclusive Partners</h2>
      <div className="flex justify-between items-center flex-wrap">
        <div className="w-32 h-16 flex justify-center items-center">
          <Lottie animationData={nikeLogoAnimation} loop={true} />
        </div>
        {partners.map((logo, index) => (
          <div key={index} className="w-32 h-16 flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
        <div className="w-32 h-16 flex justify-center items-center">          
          <Lottie animationData={adidasLogoAnimation} loop={true} />
        </div>

        
      </div>
    </section>
  );
};

export default OurPartners;
