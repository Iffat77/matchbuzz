import React, { useEffect, useState } from "react";
import { auth, provider } from "../config/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import googleSvg from "../assets/google.svg";

const Auth = () => {
  const navigate = useNavigate();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // Function to check if the user is authenticated
  const checkUserAuthentication = () => {
    const user = auth.currentUser;
    setIsUserAuthenticated(!!user);
  };

  useEffect(() => {
    // Add the authentication listener when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
      {isUserAuthenticated ? (
        <Button
          size="md"
          variant="outlined"
          color="white"
          className="flex items-center gap-3"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
          onClick={handleSignInWithGoogle}
        >
          <img src={googleSvg} alt="metamask" className="h-6 w-6" />
          Continue with Google
        </Button>
      )}
    </div>
  );
};

export default Auth;
