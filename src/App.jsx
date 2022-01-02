import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Cart from "./Pages/Cart";
import FoodDetails from "./Pages/FoodDetails";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoMatch from "./Pages/NoMatch";
import Profile from "./Pages/Profile";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              {" "}
              <Home />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {" "}
              <Cart />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/food/:foodId"
          element={
            <PrivateRoute>
              {" "}
              <FoodDetails />{" "}
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}
