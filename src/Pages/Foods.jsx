import axios from "axios";
import { useEffect, useState } from "react";
import Food from "./Food";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios("https://mocki.io/v1/4f80f483-536f-4233-b29f-f93beaf49803").then(
      (data) => setFoods(data.data)
    );
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto  ">
        <div class="flex flex-wrap -m-4 justify-center">
          {foods.map((food) => (
            <Food key={food.id} {...food} />
          ))}
        </div>
      </div>
    </section>
  );
}
