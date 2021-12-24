import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import Banner from "./Pages/Banner";
import Login from "./Pages/Login";
export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Login />
      <Banner />
      <Footer />
    </AuthProvider>
  );
}
