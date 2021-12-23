import BottomFooter from "./BottomFooter";
import MainFooter from "./MainFooter";
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#191919] px-6 py-12 mt-5">
        <div className=" max-w-screen-xl mx-auto px-6">
          <MainFooter />
          <BottomFooter />
        </div>
      </footer>
    </div>
  );
}
