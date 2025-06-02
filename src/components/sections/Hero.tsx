import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const phrases = [
  "Manufacturing Excellence  ",
  "Mankind's Development  ",
  "Customer Satisfaction  ",
  "Superior Products  "
];

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);
  const [typedLength, setTypedLength] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Function to get a slightly randomized typing speed
  const getTypingSpeed = React.useCallback(() => {
    // Base speed between 70-90ms with some randomization
    return Math.floor(Math.random() * 20) + 70;
  }, []);

  // Handle typing animation
  React.useEffect(() => {
    if (!isInView || !isTyping || isPaused) return;
    
    const typeNextChar = () => {
      if (typedLength < phrases[currentPhrase].length) {
        setTypedLength(prev => prev + 1);
        
        // Calculate next typing speed based on character context
        let nextSpeed = getTypingSpeed();
        
        // Slow down at the end of words (spaces)
        if (phrases[currentPhrase][typedLength] === ' ') {
          nextSpeed += 100; // Pause longer at spaces
        }
        
        timeoutRef.current = setTimeout(typeNextChar, nextSpeed);
      } else {
        // Pause at the end of the phrase before erasing
        setIsPaused(true);
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, 1500); // Pause for 1.5 seconds at the end of each phrase
      }
    };
    
    timeoutRef.current = setTimeout(typeNextChar, getTypingSpeed());
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPhrase, typedLength, isInView, isTyping, isPaused, getTypingSpeed]);

  // Handle erasing animation
  React.useEffect(() => {
    if (!isInView || isTyping || isPaused) return;
    
    const eraseNextChar = () => {
      if (typedLength > 0) {
        setTypedLength(prev => prev - 1);
        // Erase a bit faster than typing, but still with some variation
        timeoutRef.current = setTimeout(eraseNextChar, Math.floor(Math.random() * 10) + 40);
      } else {
        // Move to the next phrase
        setIsTyping(true);
        setCurrentPhrase(prev => (prev + 1) % phrases.length);
      }
    };
    
    timeoutRef.current = setTimeout(eraseNextChar, 50);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInView, isTyping, typedLength, isPaused]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Industrial manufacturing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Premium Commodities for <div ref={containerRef}>
                <motion.span
                  className="text-accent-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {phrases[currentPhrase].slice(0, typedLength)}
                  {typedLength < phrases[currentPhrase].length && <span className={styles.animateBlink}></span>}
                </motion.span>
              </div>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Sourcing high-quality raw materials and commodities to power your manufacturing 
              processes with reliability and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/seikuweb/products" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                Explore Products <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/seikuweb/contact" 
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Industrial Metals", value: "25+ Types" },
                  { label: "Polymers", value: "40+ Varieties" },
                  { label: "Global Sourcing", value: "30+ Countries" },
                  { label: "On-time Delivery", value: "99.8%" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-white/5 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  >
                    <p className="text-accent-400 font-semibold text-lg">{stat.value}</p>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary-500/20 rounded-xl">
                <p className="text-white text-center">Trusted by 500+ manufacturers worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -left-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;