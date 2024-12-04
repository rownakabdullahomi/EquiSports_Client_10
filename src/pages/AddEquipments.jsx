import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";

const AddEquipments = () => {

    const {user} = useContext(AuthContext);
    // console.log(user.displayName);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const image = e.target.image.value;
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stock = e.target.stock.value;
    const description = e.target.description.value;

    const newEquipments = {userName, userEmail, image, name, category, price, rating, customization, processingTime, stock, description};

    console.log(newEquipments);

    // Send data to the Server
    fetch("http://localhost:5000/equipments", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newEquipments)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Equipments added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
    
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Equipment</h2>
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
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary btn-outline w-full">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipments;
