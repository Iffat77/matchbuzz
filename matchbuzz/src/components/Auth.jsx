import React from 'react';
import { auth, provider } from '../config/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

const Auth = () => {
  const navigate = useNavigate(); 

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
      {auth.currentUser ? (
        <button className='border rounded-lg py-2 px-4 text-md font-semibold' onClick={handleLogout}>Logout</button>
      ) : (
        <button className='border rounded-lg py-2 px-4 text-md font-semibold' onClick={handleSignInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;
