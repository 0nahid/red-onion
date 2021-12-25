import Header from "../Components/Header/Header";
import useAuth from "../Hooks/useAuth";
export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <div className="grid place-items-center h-screen bg-gray-50">
        <figure className="md:flex bg-black text-white rounded-xl p-8 md:p-0  overflow-hidden ">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={user?.photoURL}
            alt={user?.displayName}
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore, dolorem!
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {user?.displayName}
              </div>
              <div className="text-gray-700 dark:text-gray-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
