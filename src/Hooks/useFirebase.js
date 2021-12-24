import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();
export default function useFirebase() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }
    const logout = () => {
        signOut(auth).then(result => { }).then(error => { }).finally(() => setIsLoading(false));
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
        });
        setIsLoading(false);
    }, [auth])
    return { signInWithGoogle, logout, user, setIsLoading, isLoading };
}