import axios from "axios";
import React, { useEffect, useState } from "react";
import Food from "./Food";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios("./foods.json").then((data) => setFoods(data.data));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="flex items-center justify-center space-x-6">
        <p className="text-gray-500 text-lg cursor-pointer underline decoration-[#f91944] ">
          Breakfast
        </p>
        <p className="text-gray-500 text-lg cursor-pointer ">Lunch</p>
        <p className="text-gray-500 text-lg cursor-pointer ">Dinner</p>
      </div>

      <div className="container px-5 py-5 mx-auto  ">
        <div className="flex flex-wrap -m-4 justify-center">
          {foods.map((food) => (
            <Food key={food.id} {...food} />
          ))}
        </div>
      </div>
    </section>
  );
}
