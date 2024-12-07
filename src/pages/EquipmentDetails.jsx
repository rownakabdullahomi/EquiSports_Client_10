import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  const navigate = useNavigate();
  
  const {
    userName,
    userEmail,
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
    <div className="max-w-4xl mx-auto p-6 bg-base-200 shadow-lg rounded-lg my-10">
      <img
        src={image}
        alt={name}
        className="md:w-7/12 w-full mx-auto h-96 object-center rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <p className="text-lg mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-lg mb-2">
        <strong>Price:</strong> ${price}
      </p>
      <p className="text-lg mb-2 flex items-center gap-1">
        <strong>Rating:</strong> 
        <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`text-yellow-500 ${
                      i < rating ? "" : "opacity-50"
                    }`}
                  />
                ))}
                </div> 
                <span>({rating}/5)</span>
      </p>
      <p className="text-lg mb-2">
        <strong>Stock:</strong> {stock > 0 ? stock : "Out of Stock"}
      </p>
      <p className="text-lg mb-2">
        <strong>Customization:</strong> {customization}
      </p>
      <p className="text-lg mb-2">
        <strong>Processing Time:</strong> {processingTime}
      </p>
      <p className="text-lg mb-2">
        <strong>Added by:</strong> {userName} (Email : {userEmail})
      </p>
      <p className="text-lg mb-4">
        <strong>Description:</strong> {description}
      </p>

      {/* Go Back Button */}
      <div className="flex justify-center mt-8">
      <button
        onClick={() => navigate("/")} // Navigate to the previous page
        className="btn btn-secondary btn-outline w-8/12"
      >
        Back to Home
      </button>
      </div>
    </div>
  );
};

export default EquipmentDetails;
