import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EquipmentCards = ({ equipments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipments.map((equipment) => (
        <div
          key={equipment._id}
          className="card bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col"
        >
          {/* Image */}
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-full h-48 object-contain rounded-md mb-4"
          />
          {/* Others */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
            <p className="text-gray-700 mb-1">
              <strong>Category:</strong> {equipment.category}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Price:</strong> ${equipment.price}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Rating:</strong> {equipment.rating}/5
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Stock:</strong>{" "}
              {equipment.stock > 0 ? equipment.stock : "Out of Stock"}
            </p>
          </div>
          {/* View Details Button */}
          <Link to={`/equipments/${equipment._id}`} className="btn btn-outline btn-neutral mt-4">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EquipmentCards;
