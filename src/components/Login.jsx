import React from 'react';
import CardLogin from './CardLogin';
import LoginCardImage from './LoginCardImage';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Login Form Section */}
            <div className="w-full md:w-1/2 p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Welcome Back
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Please sign in to your account
                </p>
              </div>
              <CardLogin />
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

export default Login; 