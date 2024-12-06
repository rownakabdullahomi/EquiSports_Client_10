import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  // console.log(user.email);

  useEffect(() => {
    fetch(`https://b10-a10-equi-sports-server.vercel.app/equipments/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEquipments(data);
      });
  }, [user.email]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-equi-sports-server.vercel.app/equipments/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);


            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment been deleted.",
                icon: "success",
              });
            }

            // Update the UI
            const remaining = equipments.filter((equipment) => equipment._id !== _id);
            // console.log(remaining);
            setEquipments(remaining);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Equipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.length === 0 ? (
          <p>No equipment found. Add some equipment!</p>
        ) : (
          equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card bg-base-200 shadow-lg rounded-lg p-4 border border-gray-200"
            >
              {/* Equipment Image */}
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              {/* Equipment Details */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
                <p className=" mb-1">
                  <strong>Category:</strong> {equipment.category}
                </p>
                <p className=" mb-1">
                  <strong>Price:</strong> ${equipment.price}
                </p>
                <p className=" mb-4">
                  <strong>Stock:</strong> {equipment.stock}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                {/* Update Button */}
                <Link
                  to={`/update_equipment/${equipment._id}`}
                  className="btn btn-secondary btn-sm btn-outline"
                >
                  Update
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(equipment._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyEquipments;
