import { useLogin } from '../context/LoginContext';

const LoginCardImage = () => {
  const { isLogin } = useLogin();

  return (
    <div className="w-1/2 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-gray-900/50 z-10" />
      <img
        src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="Jewellery"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
        <p className="text-gray-200">
          {isLogin 
            ? "Login to explore our exclusive collection of jewellery"
            : "Join us to discover the finest jewellery collection"}
        </p>
      </div>
    </div>
  );
};

export default LoginCardImage; 