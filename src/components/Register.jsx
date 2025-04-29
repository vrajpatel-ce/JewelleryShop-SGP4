import React, { useState } from 'react';
import { useLogin } from '../context/LoginContext';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import LoginCardImage from './LoginCardImage';

const Register = () => {
  const { signInWithGoogle, error } = useLogin();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle registration logic here
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Register Form Section */}
            <div className="w-full md:w-1/2 p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Create Account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Join us to explore our amazing collection
                </p>
              </div>

              {error && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Register
                </button>

                <div className="flex items-center my-4">
                  <hr className="flex-grow border-gray-300" />
                  <span className="px-2 text-gray-500">or</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                <button
                  type="button"
                  onClick={signInWithGoogle}
                  className="w-full border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Register with Google
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{' '}
                  <a href="/login" className="text-gray-900 hover:underline">
                    Sign in
                  </a>
                </p>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-1/2">
              <LoginCardImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 