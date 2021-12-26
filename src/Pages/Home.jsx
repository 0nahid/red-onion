import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import About from "./About";
import Foods from "./Foods";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Foods />
      <About />
      <Footer />
    </>
  );
}
