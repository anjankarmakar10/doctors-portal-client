import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtL0vp1rRvqgb78mLs95p2oaPCwki2gp4",
  authDomain: "doctors-portal-client-e355a.firebaseapp.com",
  projectId: "doctors-portal-client-e355a",
  storageBucket: "doctors-portal-client-e355a.appspot.com",
  messagingSenderId: "737206552800",
  appId: "1:737206552800:web:d282100cc7c6575b6a2885",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
