import useFirebase from "../Hooks/useFirebase";

export default function Login() {
  const { signInWithGoogle, user, logout } = useFirebase();
  return (
    <div>
      <div className="flex justify-center">
        {user?.email ? (
          <span>Welcome {user?.displayName}</span>
        ) : (
          <button onClick={signInWithGoogle}>Login With Google</button>
        )}
      </div>
    </div>
  );
}
