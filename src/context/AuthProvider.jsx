import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
      const loggedUser = { email: user?.email };
      const response = await fetch("http://localhost:4000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loggedUser),
      });

      const result = await response.json();
      localStorage.setItem("access_token", result.token);
    });

    return () => unscribe();
  }, []);

  const value = {
    user,
    loading,
    signInWithGoogle,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
