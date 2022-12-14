import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  // google sign up
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // email pass sign in
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //email pass login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user info
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // logout function
  const logout = () => {
    localStorage.removeItem("pmToken");
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authinfo = {
    user,
    loading,
    googleSingIn,
    login,
    logout,
    setLoading,
    register,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
