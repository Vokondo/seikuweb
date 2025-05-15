import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/seiku-logo.png"
              alt="Seiku Group" 
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : isScrolled
                    ? 'text-slate-500'
                    : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary-500 text-white rounded-full shadow-md hover:bg-primary-600 transition-colors duration-300 font-medium"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-sm mt-4 py-4 px-2 rounded-2xl shadow-lg"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 font-medium rounded-xl transition-colors duration-200 hover:bg-primary-50 hover:text-primary-500 ${
                      location.pathname === link.path
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-slate-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="block px-4 py-2 bg-primary-500 text-white text-center rounded-full hover:bg-primary-600 transition-colors duration-300 font-medium"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;