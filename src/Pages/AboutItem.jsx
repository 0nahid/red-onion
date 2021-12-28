import React from "react";

const AboutItem = ({ id, image, icon, title, description }) => {
  return (
    <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
      {/* image  */}
      <div className="overflow-hidden rounded-2xl flex flex-grow justify-center lg:max-h-[266px]">
        <img
          className="transform transition duration-700 w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      {/* other info  */}
      <div className="flex mt-6 space-x-3 ">
        {/* icon  */}
        <div>
          <img src={icon} alt={title} className="w-36" />
        </div>
        {/* description  */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl text-gray-800 ">{title}</h1>
          <p className="text-sm text-gray-500 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
