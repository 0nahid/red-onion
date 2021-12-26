import { Link } from "react-router-dom";

export default function Food({ title, image, description, price, id, type }) {
  return (
    <div class="p-6 lg:w-1/3 transform transition duration-700 hover:scale-105 ">
      <div class="h-full  hover:shadow bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <div className="flex justify-center ">
          <img src={image} className="w-52" alt="" />
        </div>
        <button className="text-gray-500 mt-2">{type}</button>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {title}
        </h1>
        <Link
          to={`${id}`}
          class="text-white px-4 py-2 rounded-full bg-[#f91944] inline-flex items-center"
        >
          Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
