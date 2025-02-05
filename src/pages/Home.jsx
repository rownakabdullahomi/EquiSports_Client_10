import { useLoaderData, useNavigation } from "react-router-dom";
import Slider from "../components/Slider";
import EquipmentCards from "../components/EquipmentCards";
import Loading from "./Loading";
import EquipmentCategories from "../components/EquipmentCategories";
import { useState } from "react";
import WhyChooseUs from "../components/WhyChooseUs ";
import OurPartners from "../components/OurPartners ";
import { JackInTheBox } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const equipments = useLoaderData();
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);
  const navigation = useNavigation(); // Track navigation state

  if (navigation.state === "loading") {
    return <Loading></Loading>
  }

  // if (!equipments) {
  //   return <Loading></Loading>; // Show loading spinner if data is not loaded yet
  // }

  // Handler to filter equipment by category
  const handleCategory = (category) => {
    if (category === "Featured") {
      setFilteredEquipments(equipments); // Show Six equipment limit(6) applied in mongoDB
    } else {
      const filtered = equipments.filter(
        (equipment) => equipment.category === category
      );
      setFilteredEquipments(filtered);
    }
  };

  return (
    <div>
       <Helmet>
        <title>Home | EquiSports</title>
      </Helmet>
      
      <section>
        <Slider></Slider>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-6">
        <div className="lg:col-span-1">
          <h1 className="text-3xl font-bold text-center mb-10">Categories</h1>
          <div className="bg-base-300 p-4 rounded-lg shadow-md">
            <EquipmentCategories
              handleCategory={handleCategory}
            ></EquipmentCategories>
          </div>
        </div>
        <div className="lg:col-span-3 ">
          <JackInTheBox>
            <h1 className="text-3xl font-bold text-center mb-10">
              Latest Products
            </h1>
          </JackInTheBox>
          <EquipmentCards equipments={filteredEquipments}></EquipmentCards>
        </div>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <OurPartners></OurPartners>
      </section>
    </div>
  );
};

export default Home;
