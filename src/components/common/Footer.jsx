import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* College Name & Logo */}
        <div>
          <img src={logo} alt="College Logo" className="h-12 mb-3" />
          <h2 className="text-2xl font-bold">Lambodar Higher Secondary School Of Science</h2>
          <p className="text-gray-400 mt-2">Shaping the future with quality education.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/About/about-lcs" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/Gallery/lcs-gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
            <li><a href="/Academics" className="text-gray-400 hover:text-white">Academics</a></li>
            <li><a href="/Organisations" className="text-gray-400 hover:text-white">Organisations</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-gray-400 mt-2">Chichaiguda, Kalahandi, Orissa, Odisha 766014</p>
          <p className="text-gray-400">Email: lcskalahandi@gmail.com</p>
          <p className="text-gray-400">Phone: +91 9583587565<br></br> +91 8249727709<br></br>+91 7854991773<br></br>+91 9337409176</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LCS Group Of Institutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
