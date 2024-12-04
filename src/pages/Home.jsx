import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import EquipmentCards from "../components/EquipmentCards";
import Loading from "./Loading";

const Home = () => {
  const equipments = useLoaderData();

  if (!equipments) {
    return <Loading></Loading>; // Show loading spinner if data is not loaded yet
  }

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
