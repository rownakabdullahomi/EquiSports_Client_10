import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import EquipmentCards from "../components/EquipmentCards";

const Home = () => {
  const equipments = useLoaderData();

  return (
    <div>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <EquipmentCards equipments={equipments} />;
      </section>
    </div>
  );
};

export default Home;
