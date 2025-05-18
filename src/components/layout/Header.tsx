import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 20;
      const shouldBeScrolled = window.scrollY > scrollThreshold;
      
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

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
      className={`fixed w-full z-50 transition-all duration-200 ease-out ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Seiku" 
              className="h-8 md:h-10 w-auto"
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
                    ? 'text-slate-700'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary-500 text-white rounded-full shadow-sm hover:bg-primary-600 transition-colors duration-200 font-medium"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden bg-white/95 backdrop-blur-md mt-4 py-4 px-2 rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.07,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="space-y-1"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -10 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:bg-primary-50 hover:text-primary-500 ${
                        location.pathname === link.path
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-slate-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="pt-2 border-t border-gray-100"
                >
                  <Link
                    to="/contact"
                    className="block px-4 py-2 bg-primary-500 text-white text-center rounded-xl hover:bg-primary-600 transition-all duration-300 font-medium hover:shadow-md"
                  >
                    Get Quote
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;