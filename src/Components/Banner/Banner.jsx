import "./Banner.css";
export default function Banner() {
  return (
    <>
      <section className="text-gray-600 banner md:mt-5 body-font">
        <div className="flex flex-col items-center justify-center h-full w-full px-3">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl ins font-semibold text-gray-700">
            Best food waiting for your belly
          </h1>
          <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden shadow-md shadow-white/50 ring-[#f91944] focus:ring-4 w-4/5 max-w-96 flex items-center">
            <input
              type="text"
              className=" rounded-full px-4 focus:outline-none w-full bg-transparent"
              placeholder="Search food items"
            />
            <button className="text-sm bg-primary py-3 px-6 rounded-full text-white bg-[#f91944] ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
