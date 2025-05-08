import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('loggedInUser')
  );

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/login"
          element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
