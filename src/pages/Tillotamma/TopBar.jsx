import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TillotammaTopBar() {
  return (
    <div className="bg-[#0e1a36] p-4 justify-between items-center hidden lg:flex">
      <div className="flex items-center space-x-4 text-white bg-[#A4163A] px-4 py-2 rounded-lg">
        <span className="font-bold">Follow us:-</span>
        <a href="#" className="text-xl hover:scale-125 transition-all duration-1000 text-white"><FaFacebookF /></a>
        <a href="#" className="text-xl hover:scale-125 transition-all duration-1000 text-white"><FaInstagram /></a>
        <a href="#" className="text-xl hover:scale-125 transition-all duration-1000 text-white"><FaTwitter /></a>
        <a href="#" className="text-xl hover:scale-125 transition-all duration-1000 text-white"><FaYoutube /></a>
      </div>
      <div className="text-white flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-orange-400" />
          <span>Call Now!</span>
          <span className="font-bold">+91 8249727709</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-orange-400" />
          <span>Email Now</span>
          <span className="font-bold">lcskalahandi@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
