import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Logo from "../Logo/Logo";
import { FiLogOut } from 'react-icons/fi';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="text-gray-600 body-font mb-0 md:mb-32">
        <div className="relative mx-auto flex flex-wrap py-5 px-2 sm:p-5 sm:z-50 flex-col sm:fixed sm:top-0 sm:shadow-md sm:w-[100vw] sm:bg-white sm:flex-nowrap sm:justify-between sm:flex-row items-center">
          <Link to="/" className="mb-4 sm:mb-0">
            <Logo />
          </Link>
          <nav className="z-50 bg-white border-slate-200 fixed bottom-0 left-0 border-t py-3 w-full text-base sm:border-t-0 sm:w-96 sm:relative md:border-0">
            <div className="flex flex-nowrap w-1/2 items-center justify-between mx-auto sm:justify-right sm:mr-0 sm:ml-auto">
              <Link to="/cart" className="mr-5 mt-1 hover:text-gray-900 md:mr-6">
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
                <span className="mr-5 flex">
                  <Link to="/profile">
                    <img
                    src={user?.photoURL}
                    className="w-6 h-6 rounded-full md:mr-2"
                    alt=""
                    />
                  </Link>
                  {/* <Link to="/profile" className="hidden md:block">{user?.displayName}</Link> */}
                </span>
              ) : (
                <Link
                  to="/login"
                  className="mr-5 font-semibold hover:text-gray-900"
                >
                  Login
                </Link>
              )}
            
            {user?.email ? (
              <FiLogOut className="cursor-pointer w-6 h-6 text-[#f91944]" onClick={logout} />
            ) : (
              <button className="inline-flex bg-[#f91944] text-white border-0 py-1.5 px-4 focus:outline-none rounded-full text-base mt-4 md:mt-0">
                <Link to="/signup">Sign up</Link>
              </button>
            )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
