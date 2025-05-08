import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.email === data.email);

    if (userExists) {
      alert('User already registered!');
      return;
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');

    // ✅ Redirect to login page
    navigate('/login');
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;
