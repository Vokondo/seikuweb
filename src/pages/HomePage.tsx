import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart3, TrendingUp, Scale, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ProductHighlight from '../components/sections/ProductHighlight';
import TestimonialSection from '../components/sections/TestimonialSection';
import CTASection from '../components/sections/CTASection';
import constructionImg from '../assets/construction.jpg';

const HomePage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-12 sm:pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight tracking-tight">
              Why Choose Seiku?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide the highest quality commodities to fuel your manufacturing processes, 
              with reliable delivery and competitive pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                icon: <BarChart3 size={40} className="text-primary-500" />,
                title: "Quality Assurance",
                description: "All our commodities undergo rigorous quality checks to ensure they meet industry standards.",
                metric: "99.8%",
                metricLabel: "Quality Rating"
              },
              {
                icon: <TrendingUp size={40} className="text-primary-500" />,
                title: "Market Intelligence",
                description: "Stay ahead with our expert market analysis and timely procurement strategies.",
                metric: "24/7",
                metricLabel: "Market Monitoring"
              },
              {
                icon: <Scale size={40} className="text-primary-500" />,
                title: "Competitive Pricing",
                description: "Benefit from our global network and bulk purchasing power for optimal pricing.",
                metric: "15%",
                metricLabel: "Avg. Cost Savings"
              },
              {
                icon: <Truck size={40} className="text-primary-500" />,
                title: "Reliable Delivery",
                description: "Count on our efficient logistics network for timely delivery of your commodities.",
                metric: "98%",
                metricLabel: "On-time Delivery"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-primary-400 rounded-t-2xl"></div>
                <div className="mb-4 sm:mb-6">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 flex-grow leading-relaxed">{feature.description}</p>
                <div className="pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mb-1 tracking-tight">{feature.metric}</div>
                  <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">{feature.metricLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductHighlight />

      {/* Industries We Serve */}
      <section className="py-12 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commodities power manufacturing excellence across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Automotive Manufacturing",
                description: "Providing essential metals and polymers for automotive component manufacturing."
              },
              {
                image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Electronics Production",
                description: "Supplying precision materials for electronic device manufacturing."
              },
              {
                image: constructionImg,
                title: "Construction Materials",
                description: "Delivering quality raw materials for construction product manufacturing."
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 tracking-tight">{industry.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">{industry.description}</p>
                  <Link 
                    to="/seikuweb/products" 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    View All Products <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;