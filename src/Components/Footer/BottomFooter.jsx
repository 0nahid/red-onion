export default function BootomFooter() {
  return (
    <div className="flex flex-wrap items-center -mx-6">
      <div className="flex flex-grow justify-center pb-4 w-full text-sm md:w-auto md:justify-start">
        <span className="text-gray-400 ">Made With 💖 by Nahid Hassan</span>
      </div>
      <div className="flex w-full justify-between items-center text-sm space-x-4 pb-4 sm:max-w-[440px] sm:mx-auto md:w-auto md:space-x-6 md:justify-end">
        <span className="text-gray-400 cursor-pointer">Privacy Policy</span>
        <span className="text-gray-400  cursor-pointer">Terms of Use</span>
        <span className="text-gray-400  cursor-pointer">Pricing</span>
      </div>
    </div>
  );
}
