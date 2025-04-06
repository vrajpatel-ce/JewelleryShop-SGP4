import { FiX } from 'react-icons/fi';
import { LoginProvider, useLogin } from '../context/LoginContext';
import LoginCardImage from './LoginCardImage';
import CardLogin from './CardLogin';
import CardSignup from './CardSignup';

const LoginCardContent = ({ onClose }) => {
  const { isLogin, setIsLogin } = useLogin();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-xl w-[800px] h-[500px] flex overflow-hidden">
        <LoginCardImage />
        
        <div className="w-1/2 p-8 flex flex-col">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <FiX size={24} />
          </button>

          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 text-lg font-medium ${isLogin ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 text-lg font-medium ${!isLogin ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? <CardLogin /> : <CardSignup />}
        </div>
      </div>
    </div>
  );
};

const LoginCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <LoginProvider>
      <LoginCardContent onClose={onClose} />
    </LoginProvider>
  );
};

export default LoginCard; 