import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Login() {
  const { signInWithGoogle, user, signInWithGithub } = useAuth();
  return (
    <div className="grid place-items-center h-screen">
      {user?.email ? (
        <span>
          Welcome {user?.displayName} <br />{" "}
          <Link className="underline" to="/">
            Go to Home
          </Link>{" "}
        </span>
      ) : (
        <div className="border-t mx-auto border-white bg-gray-50 mt-6 md:flex ">
          <div
            className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 px-4 cursor-pointer hover:bg-gray-100 mb-2 mr-2"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="w-6 h-6" />
            <span>Sign in With Google</span>
          </div>
          <div
            className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 px-4 cursor-pointer hover:bg-gray-100 mb-2 "
            onClick={signInWithGithub}
          >
            <GrGithub className="w-6 h-6" />
            <span>Sign in With Google</span>
          </div>
        </div>
      )}
    </div>
  );
}
