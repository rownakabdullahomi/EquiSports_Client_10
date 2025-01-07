import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import icons for stars

/* eslint-disable react/prop-types */
const EquipmentCards = ({ equipments }) => {
  const renderStars = (rating) => {
    const totalStars = 5; // Define the total number of stars
    return (
      <div className="flex items-center">
        {Array.from({ length: totalStars }, (_, index) => {
          return index < rating ? (
            <FaStar key={index} className="text-yellow-500" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipments.map((equipment) => (
        <div
          key={equipment._id}
          className="card shadow-lg rounded-lg p-4 bg-base-200 flex flex-col"
        >
          {/* Image */}
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-full h-48 object-contain rounded-lg mb-4"
          />

          {/* Others */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
            <p className="mb-1">{equipment.category}</p>
            <p className="mb-1">${equipment.price}</p>
            <div className="mb-1">{renderStars(equipment.rating)}</div>
            <p className="mb-4">
              <strong>Stock Available:</strong>{" "}
              {equipment.stock > 0 ? equipment.stock : "Out of Stock"}
            </p>
          </div>

          {/* View Details Button */}
          <Link
            to={`/equipments/${equipment._id}`}
            className="btn btn-outline btn-neutral mt-4"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EquipmentCards;
