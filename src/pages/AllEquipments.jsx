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
    return <Loading></Loading>
  }

  // if (!loadedEquipments) {
  //   return <Loading></Loading>; // Show loading spinner if data is not loaded yet
  // }

    if (loadedEquipments.length === 0) {
      return (
        <NoData></NoData>
      );
    }

  const handleSortByPrice = () => {
    const sortedEquipments = [...equipments].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setEquipments(sortedEquipments);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Helmet>
        <title>All Equipments | EquiSports</title>
      </Helmet>
      <div className="md:flex md:flex-row flex-col md:justify-between justify-center items-center mb-6">
        <h2 className="text-3xl font-bold text-center mb-6 md:mb-0">All Equipments</h2>
        <div className="flex justify-center">
          <button onClick={handleSortByPrice} className="btn btn-primary">
            Sort by Price {isAscending ? "(Low to High)" : "(High to Low)"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-base-300 text-left">
              <th className="border border-gray-300 px-4 py-2">Serial</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment, index) => (
              <tr key={equipment._id} className="hover:bg-gray-600">
                {/* Index */}
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                {/* Image */}
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                {/* Name */}
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.name}
                </td>
                {/* Category */}
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.category}
                </td>
                {/* Price */}
                <td className="border border-gray-300 px-4 py-2">
                  ${equipment.price}
                </td>
                {/* Stock */}
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.stock > 0 ? (
                    <span className="text-green-600">
                      In Stock ({equipment.stock})
                    </span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </td>
                {/* View Details Button */}
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to={`/equipments/${equipment._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipments;
