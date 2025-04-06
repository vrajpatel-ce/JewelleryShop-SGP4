import { useState } from "react";
import { FiUser } from "react-icons/fi"; // Import user icon
import { useLogin } from "../context/LoginContext";
import LoginCard from "./LoginCard";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const { user, handleSignOut } = useLogin();
  let timeoutId; // Used to delay hiding the dropdown

  const categories = {
    JEWELLERY: [
      ['CHAIN', 'JEWELLERY SET', 'JHUMKA'],
      ['NECKLACE', 'RINGS', 'LOCKET'],
      ['BANGLES', 'EARRINGS', 'HARAM'],
      ['BRACELETS', 'PENDANT', 'KADA'],
      ['NOSE STUDS', 'ANKLETS', 'PAYAL'],
      ['CHOKER SET', 'PEARL', 'SECOND STUD'],
      ['DAILY WEAR', 'STUDS', ''],
      ['VADDANAM', 'MOTI SET', ''],
    ],
    METALS: [
      'GOLD',
      'DIAMOND',
      'SILVER',
      'PLATINUM',
      'GEMSTONE',
      'WHITE GOLD',
      'ROSE GOLD'
    ],
    WEDDING: [
      'BRIDAL SET',
      'MANGALSUTRA',
      'COUPLE RINGS',
      'ENGAGEMENT RINGS',
      'BRIDAL NATH',
      'MAANG TIKKA',
      'ANNIVERSARY'
    ],
    FOR: [
      'BABY',
      'KIDS',
      'GIRLS',
      'BOYS',
      'MEN',
      'WOMEN',
      'BRIDE',
      'GROOM'
    ],
    PURITY: [
      '18 CARAT',
      '20 CARAT',
      '22 CARAT',
      '24 CARAT'
    ]
  };

  // Function to handle product category clicks
  const handleProductClick = (category) => {
    setJewelleryOpen(false); // Close the dropdown
    // You can add additional logic here if needed
  };

  return (
    <>
      <nav className="bg-white p-4 md:p-6 shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Left Section */}
          <ul className="hidden md:flex space-x-8">
            <li
              className="relative"
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setJewelleryOpen(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(() => setJewelleryOpen(false), 300);
              }}
            >
              <a
                href="#"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Jewellery
              </a>

              {/* Mega Dropdown Menu */}
              {jewelleryOpen && (
                <div
                  className="absolute left-0 mt-2 w-[90vw] max-w-7xl bg-white shadow-xl border border-gray-200 rounded-lg transform -translate-x-1/4 transition-all duration-300 ease-in-out"
                  onMouseEnter={() => clearTimeout(timeoutId)}
                  onMouseLeave={() => setJewelleryOpen(false)}
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #f8f9fa)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="flex p-8">
                    {/* JEWELLERY Column */}
                    <div className="w-2/5 pr-8 border-r border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-500 inline-block">JEWELLERY</h3>
                      <div className="grid grid-cols-3 gap-6">
                        {categories.JEWELLERY.map((row, idx) => (
                          <div key={idx} className="space-y-3">
                            {row.map((item, index) => (
                              item && (
                                <Link
                                  key={index}
                                  to={item === 'CHAIN' ? '/chains' : item === 'RINGS' ? '/rings' : '#'}
                                  className="block text-sm text-gray-600 hover:text-red-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                                  onClick={() => handleProductClick(item)}
                                >
                                  {item}
                                </Link>
                              )
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* METALS Column */}
                    <div className="w-1/5 px-8 border-r border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-yellow-500 inline-block">METALS</h3>
                      <div className="space-y-3">
                        {categories.METALS.map((item, index) => (
                          <Link
                            key={index}
                            to={item === 'GOLD' ? '/gold' : '#'}
                            className="block text-sm text-gray-600 hover:text-yellow-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                            onClick={() => handleProductClick(item)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* WEDDING Column */}
                    <div className="w-1/5 px-8 border-r border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-pink-500 inline-block">WEDDING</h3>
                      <div className="space-y-3">
                        {categories.WEDDING.map((item, index) => (
                          <Link
                            key={index}
                            to="#"
                            className="block text-sm text-gray-600 hover:text-pink-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                            onClick={() => handleProductClick(item)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* FOR Column */}
                    <div className="w-1/5 px-8 border-r border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500 inline-block">FOR</h3>
                      <div className="space-y-3">
                        {categories.FOR.map((item, index) => (
                          <Link
                            key={index}
                            to="#"
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                            onClick={() => handleProductClick(item)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* PURITY Column */}
                    <div className="w-1/5 pl-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500 inline-block">PURITY</h3>
                      <div className="space-y-3">
                        {categories.PURITY.map((item, index) => (
                          <Link
                            key={index}
                            to="#"
                            className="block text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 transform transition-all duration-200 ease-in-out"
                            onClick={() => handleProductClick(item)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Section at Bottom */}
                  <div className="bg-gray-50 p-4 mt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Explore our latest collection</p>
                      <a href="#" className="text-sm text-red-600 hover:text-red-700 font-medium">View All →</a>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Offers
              </a>
            </li>
          </ul>

          {/* Logo Centered */}
          <h1 className="text-gray-800 text-2xl md:text-3xl font-bold tracking-wide mx-5">
            Logo
          </h1>

          {/* Right Section */}
          <ul className="hidden md:flex space-x-8">
            <li
              className="relative"
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setAboutOpen(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(() => setAboutOpen(false), 300);
              }}
            >
              <a
                href="#"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                About Us
              </a>

              {/* About Dropdown Menu */}
              {aboutOpen && (
                <ul
                  className="absolute left-0 mt-2 w-40 bg-white shadow-md border border-gray-200 rounded-md"
                  onMouseEnter={() => clearTimeout(timeoutId)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Vision
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Ambassador
              </a>
            </li>
          </ul>

          {/* User Profile/Login Button */}
          <div className="absolute right-4 md:right-6">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(timeoutId);
                  setProfileOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutId = setTimeout(() => setProfileOpen(false), 300);
                }}
              >
                <button className="cursor-pointer">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {profileOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white shadow-md border border-gray-200 rounded-md"
                    onMouseEnter={() => clearTimeout(timeoutId)}
                    onMouseLeave={() => setProfileOpen(false)}
                  >
                    <div className="p-3 border-b border-gray-200">
                      <p className="font-medium text-gray-800">{user.displayName || 'User'}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="cursor-pointer text-gray-700 text-2xl hover:text-gray-900"
                onClick={() => setLoginOpen(true)}
              >
                <FiUser />
              </button>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white w-full absolute left-0 top-16 shadow-md">
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setJewelleryOpen(!jewelleryOpen)}
                    className="flex items-center justify-between w-full text-left text-gray-600 text-lg font-medium hover:text-gray-900"
                  >
                    <span>Jewellery</span>
                    <span>{jewelleryOpen ? '−' : '+'}</span>
                  </button>
                  {jewelleryOpen && (
                    <div className="mt-2 pl-4 space-y-4">
                      {Object.entries(categories).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h3 className="font-bold text-gray-900">{category}</h3>
                          <div className="pl-4 space-y-2">
                            {Array.isArray(items[0]) 
                              ? items.flat().filter(Boolean).map((item, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    className="block text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {item}
                                  </a>
                                ))
                              : items.map((item, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    className="block text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {item}
                                  </a>
                                ))
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="block text-gray-600 text-lg font-medium hover:text-gray-900"
                >
                  Offers
                </a>
                <a
                  href="#"
                  className="block text-gray-600 text-lg font-medium hover:text-gray-900"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-600 text-lg font-medium hover:text-gray-900"
                >
                  Ambassador
                </a>
                {user && (
                  <>
                    <Link
                      to="/profile"
                      className="block text-gray-600 text-lg font-medium hover:text-gray-900"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left text-gray-600 text-lg font-medium hover:text-gray-900"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Card */}
      <LoginCard isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Navigation;
