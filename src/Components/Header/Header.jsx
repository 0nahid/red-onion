import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Logo from "../Logo/Logo";
export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Logo />
          </Link>
          <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center ">
            <Link to="/cart" className="mr-5 mt-1 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </Link>
            {user?.email ? (
              <span className="mr-2 flex">
                <img
                  src={user?.photoURL}
                  className="w-6 h-6 rounded-full mr-1"
                  alt=""
                />
                <Link to="/profile">{user?.displayName}</Link>
              </span>
            ) : (
              <Link
                to="/login"
                className="mr-5 font-semibold hover:text-gray-900"
              >
                Login
              </Link>
            )}
          </nav>
          {user?.email ? (
            <button
              onClick={logout}
              className="inline-flex items-center bg-[#f91944] text-white border-0 py-1.5 px-4 focus:outline-none rounded-full text-base mt-4 md:mt-0"
            >
              Logout
            </button>
          ) : (
            <button className="inline-flex items-center bg-[#f91944] text-white border-0 py-1.5 px-4 focus:outline-none rounded-full text-base mt-4 md:mt-0">
              <Link to="/signup">Sign up</Link>
            </button>
          )}
        </div>
      </header>
    </>
  );
}
