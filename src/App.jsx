import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/Signup';
import HomePage from './components/HomePage/HomePage'; // Correct import for HomePage

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
        <div>
            {loggedIn ? (
                <HomePage />  // Make sure this points to the imported component
            ) : isSignup ? (
                <SignupPage onToggle={handleToggle} />
            ) : (
                <LoginPage onToggle={handleToggle} onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
