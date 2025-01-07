import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import NoData from "../components/NoData";
import Loading from "./Loading";
import Rating from "react-rating"; // Import the Rating component
import { FaStar, FaRegStar } from "react-icons/fa"; // Icons for filled and empty stars

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://b10-a10-equi-sports-server.vercel.app/equipments/user/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (_id) => {
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
        fetch(
          `https://b10-a10-equi-sports-server.vercel.app/equipments/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });

              // Update the UI
              const remaining = equipments.filter(
                (equipment) => equipment._id !== _id
              );
              setEquipments(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-4 lg:px-6 mb-10">
      <Helmet>
        <title>My Equipments | EquiSports</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center my-10">My Equipments</h2>

      {equipments?.length === 0 ? (
        <NoData></NoData>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Stock</th>
                <th className="border px-4 py-2">Rating</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipments.map((equipment) => (
                <tr key={equipment._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-16 h-16 object-cover rounded-lg mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2">{equipment.name}</td>
                  <td className="border px-4 py-2">{equipment.category}</td>
                  <td className="border px-4 py-2">${equipment.price}</td>
                  <td className="border px-4 py-2">
                    {equipment.stock > 0 ? equipment.stock : "Out of Stock"}
                  </td>
                  <td className="border px-4 py-2">
                    <Rating
                      readonly
                      initialRating={equipment.rating}
                      emptySymbol={<FaRegStar className="text-yellow-400" />}
                      fullSymbol={<FaStar className="text-yellow-400" />}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2 justify-center">
                      <Link
                        to={`/update_equipment/${equipment._id}`}
                        className="btn btn-secondary btn-sm btn-outline"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(equipment._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEquipments;
