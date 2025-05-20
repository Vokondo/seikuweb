import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CircleDollarSign, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <CircleDollarSign size={28} className="text-accent-400" />
              <span className="ml-2 text-xl font-bold">Seiku Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for high-quality commodities 
              and raw materials for manufacturing excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Industry Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Industrial Metals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Polymers & Plastics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Industrial Chemicals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Raw Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Specialty Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Trading Street, Industrial Park
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent-400 mr-2 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-gray-300 hover:text-accent-400 transition-colors">
                  +233597046360
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@seikugroup.com" className="text-gray-300 hover:text-accent-400 transition-colors">
                  info@seikugroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Seiku Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;