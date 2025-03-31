import { Link } from "react-router-dom";

const LPSNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/lps-logo.png" alt="LPS Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li><Link to="/lps-home" className="hover:underline">Home</Link></li>
        <li><Link to="/lps-admissions" className="hover:underline">Admissions</Link></li>
        <li><Link to="/lps-departments" className="hover:underline">Departments</Link></li>
        <li><Link to="/lps-contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default LPSNavbar;
