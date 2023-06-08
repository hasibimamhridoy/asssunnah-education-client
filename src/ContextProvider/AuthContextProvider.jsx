import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/FirebaseConfig/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('hasib imam');
  const [loading, setLoading] = useState(true);

  const handleManualRegister = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleGoogleRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleManualLogin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const handleManualLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // if (currentUser) {
      //   const email = currentUser.email;
      //   fetch("https://cooking-light-server-hasibimamhridoy.vercel.app/jwt", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email }),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       localStorage.setItem("cooking-token", data.token);
      //     });
      // } else {
      //   localStorage.removeItem("cooking-token");
      // }

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    handleManualRegister,
    handleGoogleRegister,
    handleManualLogin,
    handleManualLogout,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
