import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Landing from './screens/Landing';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up the authentication listener once when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    // You can show a loading spinner or skeleton while the authentication state is being checked
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Use the user state to determine if the user is authenticated */}
      <Route
        path="/home"
        element={user ? <PrivateRoute>{<Home user={user} />}</PrivateRoute> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;











