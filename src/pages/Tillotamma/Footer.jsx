import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function TillotammaFooter() {
  return (
    <footer className="bg-[#0e1a36] text-white py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-red-600 text-3xl font-bold">▣</div>
            <div>
              <h2 className="text-xl font-semibold">Tilottama College Of Science</h2>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-6">
            Ullamcorper inceptos platea mollis nunc quam interdum eleifend turpis etiam fermentum. Rutrum facilisi elit est pharetra mattis mus.
          </p>
          <div className="flex space-x-4">
            <div className="bg-[#1c2a4a] p-3 rounded-md cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-[#1c2a4a] p-3 rounded-md cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-[#1c2a4a] p-3 rounded-md cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#1c2a4a] p-3 rounded-md cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">Edupreme University, 789 Oak St, Smalltown, TX 23456</p>
          <p className="text-sm text-gray-300 mt-2">Tel: +91 8249727709</p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <FaEnvelope className="text-red-500" />
              <span className="text-gray-300">lcskalahandi@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Connected</h3>
          <p className="text-sm text-gray-300 mb-6">
            Get the latest insights and news from the Edupreme School of Education.
          </p>
          <button className="border-2 border-yellow-400 text-white py-2 px-6 hover:bg-yellow-400 hover:text-[#0e1a36] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
