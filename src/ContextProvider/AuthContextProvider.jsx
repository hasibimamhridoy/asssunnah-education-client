import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/FirebaseConfig/firebaseConfig";
import axios from "axios";

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

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const email = currentUser.email;
        axios.post(`http://localhost:5000/jwt`,{email})
          .then((data) => {
            console.log(data);
            localStorage.setItem("ass-sunnah-token", data.data.token);
          });
      } else {
        localStorage.removeItem("ass-sunnah-token");
      }

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
    handleUpdateProfile
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
