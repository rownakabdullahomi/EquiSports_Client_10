import { useLoaderData, Link, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NoData from "../components/NoData";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);
  const [isAscending, setIsAscending] = useState(true);
  const navigation = useNavigation(); // Track navigation state

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  if (loadedEquipments.length === 0) {
    return <NoData></NoData>;
  }

  const handleSortByPrice = () => {
    const sortedEquipments = [...equipments].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setEquipments(sortedEquipments);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  return (
    <div className="px-4 lg:px-6">
      <Helmet>
        <title>All Equipments | EquiSports</title>
      </Helmet>
      <div className="md:flex md:flex-row flex-col md:justify-between justify-center items-center mb-6 mt-10">
        <h2 className="text-3xl font-bold text-center ">All Equipments</h2>
        <div className="flex justify-center">
          <button onClick={handleSortByPrice} className="btn btn-primary">
            Sort by Price {isAscending ? "(Low to High)" : "(High to Low)"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {equipments.map((equipment) => (
          <div
            key={equipment._id}
            className="bg-base-200 rounded-lg shadow-md p-4 flex flex-col space-y-1 h-full"
          >
            {/* Image */}
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-48 object-contain rounded"
            />

            <div className="flex-grow">
              {/* Name */}
              <h3 className="text-xl font-bold pt-3">{equipment.name}</h3>

              {/* Category */}
              <p className="text-sm text-gray-500">{equipment.category}</p>

              {/* Price */}
              <p className="text-lg font-semibold text-primary">
                ${equipment.price}
              </p>

              {/* Stock */}
              <p
                className={
                  equipment.stock > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {equipment.stock > 0
                  ? `In Stock (${equipment.stock})`
                  : "Out of Stock"}
              </p>
            </div>

            {/* View Details Button */}
            <div className="mt-auto w-full">
              <Link
                to={`/equipments/${equipment._id}`}
                className="btn btn-primary btn-outline w-full text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;
