import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebase";

const AuthContaxt = createContext();

export const AuthContaxtProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUsear) => {
      setUser(currentUsear);
      console.log("User", currentUsear);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContaxt.Provider
      value={{
        googleSignIn,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContaxt.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContaxt);
};
