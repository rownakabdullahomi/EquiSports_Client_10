const WhyChooseUs = () => {
  const features = [
    {
      image: "https://i.ibb.co.com/FH4pBx0/w1.png",
      title: "Widest Selection",
      description:
        "Several lines of equipment for all different exercise goals.",
    },
    {
      image: "https://i.ibb.co.com/XLPWYwd/w2.png",
      title: "Unparalleled Biomechanics",
      description:
        "Decades of research and testing keep our products unrivalled in quality.",
    },
    {
      image: "https://i.ibb.co.com/kxhy7gV/w3.png",
      title: "Expert Installation",
      description:
        "Extensive experience in making purchasing and installation easy.",
    },
    {
      image: "https://i.ibb.co.com/p33z14b/w4.png",
      title: "Club-Inspired Home Fitness",
      description:
        "Our home fitness products are just like those you'd see at the club.",
    },
    {
      image: "https://i.ibb.co.com/8z8ZMdr/w5.png",
      title: "Trusted History",
      description: "Built on trusted heritage and known quality.",
    },
    {
      image: "https://i.ibb.co.com/CKyt77P/w6.png",
      title: "Professional Preferred",
      description:
        "Preferred in the fitness industry by trainers and athletes.",
    },
  ];

  return (
    <section className="mx-auto py-12 px-4 lg:px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white"
          >
            <div className="text-5xl mb-4">
              <img src={feature.image} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
