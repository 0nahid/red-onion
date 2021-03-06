import React, { useEffect, useState } from "react";
import AboutItem from "./AboutItem";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);

  //fetching about us data
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl text-center pb-4 lg:text-left">Why you choose us</h1>
      <p className="text-gray-500 text-sm w-4/5 mx-auto lg:w-full">
        Barton waited twenty always repair in within we do. AN delighted
        offending curiosity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>

      {/* about us cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
        {aboutData.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
