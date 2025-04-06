import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useLogin } from '../context/LoginContext';

const CardLogin = () => {
  const { formData, handleChange, handleSubmit, signInWithGoogle, handleSignOut, user, error } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {user ? (
        <div className="text-center">
          <p className="text-gray-700 mb-4">Welcome, {user.displayName}!</p>
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent cursor-pointer"
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent cursor-pointer"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            <FiUser className="mr-2" />
            Login
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </>
      )}
    </form>
  );
};

export default CardLogin; 