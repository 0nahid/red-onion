export default function BootomFooter() {
  return (
    <div className="flex items-center pt-8">
      <div className="flex flex-grow">
        <span className=" text-white">Made With 💖 by Nahid Hassan</span>
      </div>

      <div className="flex justify-end items-center space-x-6">
        <span className=" text-white cursor-pointer">Privacy Policy</span>
        <span className=" text-white cursor-pointer">Terms of Use</span>
        <span className=" text-white cursor-pointer">Pricing</span>
      </div>
    </div>
  );
}
