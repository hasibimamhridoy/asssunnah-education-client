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
  const [user, setUser] = useState(null);
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
    setLoading(true);


    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);

      // get and set token
      if(currentUser){
          axios.post('http://localhost:5000/jwt', {email: currentUser.email})
          .then(data =>{
              console.log(data.data.token)
              localStorage.setItem('access-token', data.data.token)
              setLoading(false);
          })
      }
      else{
          localStorage.removeItem('access-token')
      }

      
  });
  return () => {
      return unsubscribe();
  }
}, [])

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
