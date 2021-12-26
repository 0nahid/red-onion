import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FoodDetails() {
  const { foodId } = useParams();
  // Food Details
  const [foodDetails, setFoodDetails] = useState({});
  useEffect(() => {
    axios(`/foods.json`).then((data) =>
      setFoodDetails(data.data?.[foodId - 1])
    );
  }, [foodId]);
  return (
    <h1>This is food details of {foodId} </h1>
  );
}
