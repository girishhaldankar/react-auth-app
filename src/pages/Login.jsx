import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === data.email && u.password === data.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login successful!');
      onLoginSuccess();              // ✅ trigger UI update
      navigate('/dashboard');        // ✅ redirect
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      {error && (
        <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
      )}
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;

