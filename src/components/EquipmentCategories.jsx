/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const EquipmentCategories = ({handleCategory}) => {
  const [categories, setCategories] = useState(["Featured"]);

  useEffect(() => {
    fetch("https://b10-a10-equi-sports-server.vercel.app/equipments/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const uniqueCategories = ["Featured"];
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
            className="btn btn-outline w-full text-lg font-medium  hover:text-white"
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
