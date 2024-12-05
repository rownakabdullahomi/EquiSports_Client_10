/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const EquipmentCategories = ({handleCategory}) => {
  const [categories, setCategories] = useState(["Best Six"]);

  useEffect(() => {
    fetch("http://localhost:5000/equipments/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const uniqueCategories = ["Best Six"];
        for (let item of data) {
          if (!uniqueCategories.includes(item.category)) {
            uniqueCategories.push(item.category);
          }
        }
        setCategories(uniqueCategories);
      });
  }, []);
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-center">Available Categories</h3>
      <ul className="space-y-3">
      {categories.map((category, index) => (
        <li key={index}>
          <button
            onClick={() => handleCategory(category)}
            className="btn btn-outline w-full text-lg font-medium text-gray-700 hover:text-white"
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default EquipmentCategories;
