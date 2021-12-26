import { Link } from "react-router-dom";

export default function Food({ title, image, description, price, id, type }) {
  return (
    <div className="p-6 lg:w-1/3 transform transition duration-700 hover:scale-105 ">
      <div className="bg-white border border-gray-100  hover:shadow p-4 rounded-lg relative">
        <span className="bg-red-100 border border-[#f91944] rounded-full text-primary text-sm  px-4 py-1 inline-block mb-4 ">
          {type}
        </span>
        <img
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={image}
          alt=""
        />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-gray-900  text-lg">{title}</h1>
          <h2 className="text-gray-900  text-2xl font-bold">$ {price}</h2>
          <Link
            to={`food/${id}`}
            className="bg-primary text-white bg-[#f91944] px-8 py-2 focus:outline-none  rounded-full mt-24 transform transition duration-300 hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
