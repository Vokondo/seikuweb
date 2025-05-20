import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = useCallback(() => {
    const scrollThreshold = 20;
    const shouldBeScrolled = window.scrollY > scrollThreshold;
    
    if (shouldBeScrolled !== isScrolled) {
      window.requestAnimationFrame(() => {
        setIsScrolled(shouldBeScrolled);
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    let timeoutId: number;
    
    const debouncedScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      timeoutId = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/seikuweb/' },
    { name: 'Products', path: '/seikuweb/products' },
    { name: 'About', path: '/seikuweb/about' },
    { name: 'Blog', path: '/seikuweb/blog' },
    { name: 'Contact', path: '/seikuweb/contact' },
  ];

  // Custom link component for mobile navigation
  const MobileNavLink = ({ to, children, className }: { to: string; children: React.ReactNode; className: string }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsMenuOpen(false);
      // Wait for the menu fade out animation to complete before navigating
      setTimeout(() => {
        navigate(to);
      }, 300); // Match this with the exit animation duration
    };

    return (
      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  };

  return (
    <header
      className={`fixed w-full z-50 will-change-transform ${
        isScrolled
          ? 'shadow-sm'
          : ''
      }`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
      }}
    >
      <div 
        className={`w-full bg-white transition-all duration-200 ease-out transform-gpu py-3`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-10">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Seiku" 
                className="h-8 w-auto"
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
            <motion.button
              className="md:hidden text-slate-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ marginTop: '64px' }}
                />
                
                {/* Menu */}
                <motion.nav
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ 
                    opacity: 0, 
                    y: -10, 
                    scale: 0.95,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 1, 1]
                    }
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0, 0, 0.2, 1],
                  }}
                  className="md:hidden bg-white mt-4 py-4 px-2 rounded-2xl shadow-lg relative z-50"
                >
                  <motion.ul
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.1,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.03,
                          staggerDirection: -1,
                          when: "afterChildren",
                        },
                      },
                    }}
                    className="space-y-1"
                  >
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.name}
                        variants={{
                          open: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              ease: [0, 0, 0.2, 1],
                              duration: 0.2,
                            }
                          },
                          closed: { 
                            opacity: 0, 
                            y: -8,
                            transition: {
                              ease: [0.4, 0, 1, 1],
                              duration: 0.15,
                            }
                          },
                        }}
                      >
                        <MobileNavLink
                          to={link.path}
                          className={`block px-4 py-2 font-medium rounded-xl transition-all duration-200 hover:bg-primary-50 hover:text-primary-500 ${
                            location.pathname === link.path
                              ? 'text-primary-500 bg-primary-50'
                              : 'text-slate-700'
                          }`}
                        >
                          {link.name}
                        </MobileNavLink>
                      </motion.li>
                    ))}
                    <motion.li
                      variants={{
                        open: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            ease: [0, 0, 0.2, 1],
                            duration: 0.2,
                          }
                        },
                        closed: { 
                          opacity: 0, 
                          y: -8,
                          transition: {
                            ease: [0.4, 0, 1, 1],
                            duration: 0.15,
                          }
                        },
                      }}
                      className="pt-2 border-t border-gray-100"
                    >
                      <MobileNavLink
                        to="/contact"
                        className="block px-4 py-2 bg-primary-500 text-white text-center rounded-xl hover:bg-primary-600 transition-all duration-200 font-medium"
                      >
                        Get Quote
                      </MobileNavLink>
                    </motion.li>
                  </motion.ul>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;