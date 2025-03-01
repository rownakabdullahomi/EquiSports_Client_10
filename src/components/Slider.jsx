// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageUrls = [
      "https://i.ibb.co.com/rmhb2Q6/1.png",
      "https://i.ibb.co.com/YtLKGc1/2.jpg",
      "https://i.ibb.co.com/JdXBz3B/3.jpg",
      "https://i.ibb.co.com/jVgpZkv/4.jpg",
      "https://i.ibb.co.com/J5L88Rh/5.jpg",
    ];

    setImages(imageUrls);
  }, []);

  return (
    <div className="my-10 px-4 lg:px-6">
      <Slide>
        <h1 className="text-3xl font-bold text-center my-10">
          Welcome to EquiSports
        </h1>
      </Slide>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation // Enables navigation arrows
        pagination={{ clickable: true }} // Enables pagination dots
        autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        spaceBetween={30} // Spacing between slides
        slidesPerView={1} // Display one slide at a time
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[400px] h-36 rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
