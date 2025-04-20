import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SummerCourseBanner from "../Banner/SummerCourseBanner";
import logo from "../../assets/images/logo.png";
import '../../assets/css/mobile.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const desktopNavRef = useRef(null);

  // Close mobile menu & dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  // Close on outside click (Mobile & Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      // Close dropdowns if clicked outside (Only for desktop)
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Dropdown toggle function
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <>
      <nav className="bg-[#014b8f] text-white shadow-md p-1 flex justify-between items-center relative">
        <Link to="/" className="flex items-center">
          <img src={import.meta.env.VITE_SERVICE_URL + '/siteimages/logo.png'}
            style={{ filter: "drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 5px white)" }}
            alt="College Logo" className="h-20" />
        </Link>

        {/* Desktop Menu */}
        <ul
          ref={desktopNavRef}
          className="hidden md:flex space-x-5 text-sm font-medium items-center"
        >
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              HOME
            </Link>
          </li>
          <Link to='/About/about-lcs'>
            <li className="relative group dropdown-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(0);
                }}
                className="text-white focus:outline-none text-sm"
              >
                ABOUT
              </button>
              {/* {dropdownOpen === 0 && (
              <div className="absolute left-0 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                <Link to="/About/about-lcs" className="block px-3 py-1">About LCS</Link>
                <Link to="/About/staf-details" className="block px-3 py-1">Staf Details</Link>
              </div>
            )} */}
            </li>
          </Link>
          <li className="relative group dropdown-container">
            <button onClick={(e) => { e.stopPropagation(); toggleDropdown(5); }} className="text-white focus:outline-none text-sm">
              GALLERY ▾
            </button>
            {dropdownOpen === 5 && (
              <div className="absolute left-0 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                <Link to="/Gallery/lcs-gallery" className="block px-3 py-1">LCS Gallery</Link>
                <Link to="/Gallery/lcs-events" className="block px-3 py-1">LCS Events</Link>
              </div>
            )}
          </li>
          <li className="relative group dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(3);
              }}
              className="text-white focus:outline-none text-sm"
            >
              ACADEMICS ▾
            </button>
            {dropdownOpen === 3 && (
              <div className="absolute left-0 mt-2 w-48 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                <Link to="/programmes" className="block px-3 py-1">
                  Programmes
                </Link>
                <Link to="/examination" className="block px-3 py-1">
                  Examination
                </Link>
                <Link to="/Academics/staff/staf-details" className="block px-3 py-1">
                  Staff
                </Link>
                <Link to="/notification" className="block px-3 py-1">
                  Notification
                </Link>
              </div>
            )}
          </li>

          <li className="relative group dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(4);
              }}
              className="text-white focus:outline-none text-sm"
            >
              ORGANISATIONS ▾
            </button>
            {dropdownOpen === 4 && (
              <div className="absolute left-0 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                <a
                  href="/lps-home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/lps-home", "_blank");
                  }}
                  className="block px-3 py-1"
                >
                  LPS
                </a>
                <a
                  href="/tillotamma-home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/tillotamma-home", "_blank");
                  }}
                  className="block px-3 py-1"
                >
                  Tilottama
                </a>
              </div>
            )}
          </li>


          <Link to='/contact' className="relative group dropdown-container">
            <button className="text-white focus:outline-none text-sm">
              CONTACT
            </button>
          </Link>

          {/* Added Login Button */}
          <Link to="/admin/login">
            <button className="bg-white text-[#014b8f] px-3 py-1 rounded-sm text-sm font-medium mr-2 hover:bg-gray-200">
              Login
            </button>
          </Link>

          {/* <button
            onClick={() => setIsBannerVisible(true)}
            className="bg-orange-500 text-black px-3 py-1 rounded-sm text-sm font-medium"
          >
            Apply
          </button> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          id="mobileMenulist"
          ref={buttonRef}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={20} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            id="menulist"
            ref={menuRef}
            className="absolute top-14 left-0 w-full bg-sky-900 shadow-md md:hidden flex flex-col space-y-2 p-4 text-sm font-medium z-50"
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <Link to='/About/about-lcs'>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(0);
                  }}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                >
                  ABOUT
                </button>
                {/* {dropdownOpen === 0 && (
                <div className="absolute left-4 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                  <Link to="/About/about-lcs" className="block px-3 py-1">About LCS</Link>
                  <Link to="/About/staf-details" className="block px-3 py-1">Staf Details</Link>
                </div>
              )} */}
              </li>
            </Link>
            <li className="relative group dropdown-container gallerycont">
              <button onClick={(e) => { e.stopPropagation(); toggleDropdown(5); }} className="text-white focus:outline-none text-sm">
                GALLERY ▾
              </button>
              {dropdownOpen === 5 && (
                <div className="absolute left-0 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                  <Link to="/Gallery/lcs-gallery" className="block px-3 py-1">LCS Gallery</Link>
                  <Link to="/Gallery/lcs-events" className="block px-3 py-1">LCS Events</Link>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(3);
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
              >
                ACADEMICS ▾
              </button>
              {dropdownOpen === 3 && (
                <div className="absolute left-4 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                  <Link to="/programmes" className="block px-3 py-1">
                    Programmes
                  </Link>
                  <Link to="/examination" className="block px-3 py-1">
                    Examination
                  </Link>
                  <Link to="/Academics/staff/staf-details" className="block px-3 py-1">
                    Staff
                  </Link>
                  <Link to="/notification" className="block px-3 py-1">
                    Notification
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(4);
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
              >
                ORGANISATIONS ▾
              </button>
              {dropdownOpen === 4 && (
                <div className="absolute left-4 mt-2 w-36 bg-sky-900 shadow-lg py-2 rounded-md z-50 text-sm">
                  <a href="/lps-home" className="block px-3 py-1">LPS</a>
                  <a href="/tillotamma-home" className="block px-3 py-1">Tillotamma</a>
                </div>
              )}
            </li>

            {/* Contact link (without dropdown) */}
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </li>

            <div className="flex space-x-2 mt-2">
              <Link to="/admin/login">
                <button className="bg-white text-[#014b8f] px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200">
                  Login
                </button>
              </Link>
              {/* <button
                onClick={() => setIsBannerVisible(true)}
                className="bg-orange-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md text-sm font-medium"
              >
                Apply
              </button> */}
            </div>
          </ul>
        )}
      </nav>

      {/* Summer Course Banner Popup */}
      <SummerCourseBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
    </>
  );
};

export default Navbar;