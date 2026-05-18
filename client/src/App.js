import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Listings from './components/Listings';
import SignUp from './components/SignUp';
import { Snackbar } from '@mui/material';
import './App.css';

function AppContent({ showNotification, notification, handleClose }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      <NavBar />
      <main
        style={{
          paddingTop: isLanding ? 0 : 'var(--navbar-height)',
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home showNotification={showNotification} />} />
          <Route path="/listings" element={<Listings showNotification={showNotification} />} />
          <Route path="/signup" element={<SignUp showNotification={showNotification} />} />
        </Routes>
      </main>
      <Snackbar
        open={notification.open}
        onClose={handleClose}
        message={notification.message}
        autoHideDuration={3000}
      />
    </>
  );
}

function App() {
  const [notification, setNotification] = useState({ open: false, message: '' });

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  const showNotification = (message) => {
    setNotification({ open: true, message });
  };

  return (
    <Router>
      <AppContent
        showNotification={showNotification}
        notification={notification}
        handleClose={handleClose}
      />
    </Router>
  );
}


export default App;

