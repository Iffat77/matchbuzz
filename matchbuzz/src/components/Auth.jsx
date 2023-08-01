import React, { useEffect, useState } from 'react';
import { auth, provider } from '../config/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=''>
      {isUserAuthenticated ? (
        <button className='border rounded-lg py-2 px-4 text-md font-semibold' onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className='border rounded-lg py-2 px-4 text-md font-semibold' onClick={handleSignInWithGoogle}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Auth;
