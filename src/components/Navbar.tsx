import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">ClearFlow Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="#services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition duration-300">
              Call us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;