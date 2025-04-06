import { useState } from "react";
import { FiUser } from "react-icons/fi"; // Import user icon
import LoginCard from "./LoginCard";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  let timeoutId; // Used to delay hiding the dropdown

  return (
    <>
      <nav className="bg-white p-4 md:p-6 shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Left Section */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"
              >
                Jewellery
              </a>
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

              {/* Dropdown Menu */}
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

          {/* Login Icon - Positioned absolutely in the right corner */}
          <button
            className="absolute cursor-pointer right-4 md:right-6 text-gray-700 text-2xl hover:text-gray-900"
            onClick={() => setLoginOpen(true)}
          >
            <FiUser />
          </button>

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
          <ul className="md:hidden bg-white w-full absolute left-0 top-16 shadow-md">
            <li>
              <a
                href="#"
                className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4"
              >
                Jewellery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4"
              >
                Offers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-600 text-lg font-medium hover:text-gray-900 transition duration-300 p-4"
              >
                Ambassador
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Login Card */}
      <LoginCard isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Navigation;
