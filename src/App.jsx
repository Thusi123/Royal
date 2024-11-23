import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/Signup';
import HomePage from './components/HomePage/HomePage';
import HotelDetailsPage from './components/HotelDetails';


function App() {
    const [isSignup, setIsSignup] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleToggle = () => {
        setIsSignup((prev) => !prev);
    };

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                {/* Login or Signup */}
                {!loggedIn && (
                    <Route
                        path="/"
                        element={
                            isSignup ? (
                                <SignupPage onToggle={handleToggle} />
                            ) : (
                                <LoginPage onToggle={handleToggle} onLogin={handleLogin} />
                            )
                        }
                    />
                )}

                {/* Authenticated Routes */}
                {loggedIn && (
                    <Route path="/" element={<HomePage />} />
                )}



                {/* Hotel Details Page */}
                <Route path="/hotel-details" element={<HotelDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
