import { Link, useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  const {
    image,
    name,
    category,
    price,
    rating,
    stock,
    description,
    customization,
    processingTime,
  } = equipment;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <img
        src={image}
        alt={name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Price:</strong> ${price}
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Rating:</strong> {rating}/5
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Stock:</strong> {stock > 0 ? stock : "Out of Stock"}
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Customization:</strong> {customization}
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Processing Time:</strong> {processingTime}
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <strong>Description:</strong> {description}
      </p>

      {/* Go Back Button */}
      <div className="flex justify-center mt-6">
        <Link to={"/"} className="btn btn-secondary btn-outline w-6/12">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default EquipmentDetails;
