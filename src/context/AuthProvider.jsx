import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../config/firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unscribe();
  }, []);

  const value = {
    user,
    loading,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
