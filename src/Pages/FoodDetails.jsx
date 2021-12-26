import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";

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
    <div className="container mx-auto">
      <Header />
      <Link
        className="hover:underline poppins text-gray-700 mb-5 md:mb-1 select-none flex items-center space-x-2"
        to="/"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"></path>
        </svg>{" "}
        <span>Back</span>
      </Link>
      <div className="flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
              {foodDetails?.title}
            </h1>
            <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
              {" "}
              {foodDetails?.description}{" "}
            </p>
            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
              <h1 className="text-3xl font-bold text-black poppins select-none">
                $8.99
              </h1>
              <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-2xl bg-primary w-8 h-8 rounded-full bg-[#f91944]  text-white cursor-pointer p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
                <span className="text-lg text-gray-700 poppins select-none">
                  1
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  t="1551322312294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  className="text-2xl bg-primary w-8 h-8 rounded-full bg-[#f91944]  text-white cursor-pointer p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
              <button className="flex items-center space-x-3 bg-primary px-6 py-3 bg-[#f91944] text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 lg:order-2">
            <img
              className="w-3/4 md:w-3/4 lg:w-full mx-auto"
              src={foodDetails?.image}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Navigator Button */}
      <div className="inline-flex mt-3">
        <Link
          to={`/food/${
            Number(foodId) > 1 ? Number(foodId - 1) : Number(foodId)
          }`}
        >
          <button className="bg-[#f91944] hover:bg-[#33010b] text-gray-800 hover:text-white font-bold py-2 px-4 rounded mr-2">
            Prev
          </button>
        </Link>

        <Link
          to={`/food/${
            Number(foodId) <= 17 ? Number(foodId) + 1 : Number(foodId)
          }`}
        >
          <button className="bg-[#f91944] hover:bg-[#33010b] text-gray-800 hover:text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
