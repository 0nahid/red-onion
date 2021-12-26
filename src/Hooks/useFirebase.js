import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();
export default function useFirebase() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                navigator(-1); // -1 is the default value for the history.goBack()
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                navigator(-1); // -1 is the default value for the history.goBack()
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return { signInWithGoogle, logout, user, isLoading, signInWithGithub };
}