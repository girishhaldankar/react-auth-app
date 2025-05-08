import { useState } from 'react';

const AuthForm = ({ type = 'login', onSubmit }) => {
  const isLogin = type === 'login';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
