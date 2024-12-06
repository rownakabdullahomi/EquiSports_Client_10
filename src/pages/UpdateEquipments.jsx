import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipments = () => {
  const { user } = useContext(AuthContext);
  const equipment = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userName = e.target.userName.value;
    // const userEmail = e.target.userEmail.value;
    const image = e.target.image.value;
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stock = e.target.stock.value;
    const description = e.target.description.value;

    const updatedEquipments = {
      // userName,
      // userEmail,
      image,
      name,
      category,
      price,
      rating,
      customization,
      processingTime,
      stock,
      description,
    };

    // Send data to the Server
    fetch(`https://b10-a10-equi-sports-server.vercel.app/equipments/${equipment._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipments),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Equipments updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });

          // Clear the form fields
          // e.target.reset();
          navigate("/my_equipments");
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold text-center mb-6 lg:mb-14">
        Update Equipment : {equipment.name}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image */}
        <div>
          <label className="block font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={equipment.image}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
            required
          />
        </div>
        {/* Item Name */}
        <div>
          <label className="block font-medium mb-2">Item Name</label>
          <input
            type="text"
            name="name"
            defaultValue={equipment.name}
            className="input input-bordered w-full"
            placeholder="Enter item name"
            required
          />
        </div>
        {/* Category Name */}
        <div>
          <label className="block font-medium mb-2">Category Name</label>
          <input
            type="text"
            name="category"
            defaultValue={equipment.category}
            className="input input-bordered w-full"
            placeholder="Enter category name"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={equipment.price}
            className="input input-bordered w-full"
            placeholder="Enter price"
            required
          />
        </div>
        {/* Rating */}
        <div>
          <label className="block font-medium mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={equipment.rating}
            className="input input-bordered w-full"
            placeholder="Enter rating (1-5)"
            min="1"
            max="5"
            required
          />
        </div>
        {/* Customization */}
        <div>
          <label className="block font-medium mb-2">Customization</label>
          <input
            type="text"
            name="customization"
            defaultValue={equipment.customization}
            className="input input-bordered w-full"
            placeholder="Enter customization details"
          />
        </div>
        {/* Processing Time */}
        <div>
          <label className="block font-medium mb-2">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            defaultValue={equipment.processingTime}
            className="input input-bordered w-full"
            placeholder="Enter processing/delivery time"
            required
          />
        </div>
        {/* Stock Status */}
        <div>
          <label className="block font-medium mb-2">Stock Status</label>
          <input
            type="number"
            name="stock"
            defaultValue={equipment.stock}
            className="input input-bordered w-full"
            placeholder="Enter available quantity"
            required
          />
        </div>
        {/* User Email */}
        <div>
          <label className="block font-medium mb-2">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={user.email}
            className="input input-bordered w-full"
            placeholder="Enter user email"
            required
            readOnly
          />
        </div>
        {/* User Name */}
        <div>
          <label className="block font-medium mb-2">User Name</label>
          <input
            type="text"
            name="userName"
            value={user.displayName}
            className="input input-bordered w-full"
            placeholder="Enter user name"
            required
            readOnly
          />
        </div>
        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={equipment.description}
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn btn-secondary btn-outline w-full"
          >
            Update Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipments;
