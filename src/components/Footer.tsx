import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nganira Company Ltd</h3>
            <p className="text-gray-300">Professional sewage and waste removal services for homes and businesses.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>555-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@clearflowsolutions.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Service St, City, State</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Nganira Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;