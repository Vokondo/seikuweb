import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to optimize your supply chain?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Contact our experts today to discuss your commodity needs and get a customized quote for your manufacturing requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/seikuweb/contact" 
                    className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Request a Quote <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <a 
                    href="tel:+233597046360" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    <Phone size={18} className="mr-2" /> +233 597 046 360
                  </a>
                </div>
                <div className="text-gray-400">
                  <div className="flex items-center mb-2">
                    <Mail size={18} className="mr-2 text-accent-400" />
                    <a href="mailto:info@seikugroup.com" className="hover:text-accent-400 transition-colors">
                      info@seikugroup.com
                    </a>
                  </div>
                  <p>Our commodity experts will respond within 24 hours</p>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-full min-h-[300px] lg:min-h-[400px] overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/257704/pexels-photo-257704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Industrial warehouse" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;