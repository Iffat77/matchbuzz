
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC_ff5H38Ct_fgxTzGdIFCOJbbodkDsTcU",
  authDomain: "matchbuzz-680c5.firebaseapp.com",
  projectId: "matchbuzz-680c5",
  storageBucket: "matchbuzz-680c5.appspot.com",
  messagingSenderId: "828816668355",
  appId: "1:828816668355:web:86422467806506caa9d476",
  measurementId: "G-04MQ8EYB6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
