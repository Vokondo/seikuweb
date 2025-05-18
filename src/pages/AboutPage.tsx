import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield, Truck, Users, Award } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import meetingImg from '../assets/meeting.jpg';
import ceoImg from '../assets/ceo.png';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                About Seiku
              </h1>
              <div className="h-1 w-20 bg-accent-500 mb-6"></div>
              <p className="text-xl text-gray-300 mb-8">
                A global leader in commodity sourcing and supply for manufacturing 
                industries, with over two decades of market expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Seiku Headquarters" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white px-6 py-4 rounded-lg shadow-lg">
                <p className="font-semibold">Founded in 2019</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At Seiku, we are dedicated to reliably providing high-quality commodities 
                to manufacturing businesses worldwide. We strive to be a strategic partner in 
                your supply chain, not just a vendor.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our commitment to quality, reliability, and customer service drives everything we do. 
                We invest in sustainable sourcing practices and leverage our global network to ensure 
                competitive pricing and consistent supply.
              </p>
              <div className="flex items-center mt-8">
                <img 
                  src={ceoImg}
                  alt="CEO" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-slate-800">Opoku Aseidu</p>
                  <p className="text-slate-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img 
                src={meetingImg}
                alt="Seiku team meeting" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide our business and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} className="text-primary-500" />,
                title: "Quality Assurance",
                description: "We maintain the highest standards for all commodities, with rigorous testing and quality control."
              },
              {
                icon: <Truck size={40} className="text-primary-500" />,
                title: "Reliability",
                description: "Our customers count on consistent delivery and supply stability, even in challenging market conditions."
              },
              {
                icon: <Globe size={40} className="text-primary-500" />,
                title: "Global Reach",
                description: "Our worldwide sourcing network ensures the best materials from the most efficient sources."
              },
              {
                icon: <TrendingUp size={40} className="text-primary-500" />,
                title: "Market Intelligence",
                description: "We provide insights and forecasting to help customers make informed procurement decisions."
              },
              {
                icon: <Users size={40} className="text-primary-500" />,
                title: "Customer Partnership",
                description: "We build long-term relationships based on trust, transparency, and mutual success."
              },
              {
                icon: <Award size={40} className="text-primary-500" />,
                title: "Innovation",
                description: "We continuously improve our processes and seek new solutions to industry challenges."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Global Reach
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                With operations on six continents and partnerships with leading producers, 
                we deliver commodities to manufacturing centers worldwide.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Headquarters in New York with regional offices in London, Singapore, and Shanghai",
                  "Supplier relationships across 40+ countries",
                  "Logistics network optimized for timely global delivery",
                  "Local support teams for regional customer service"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 bg-primary-500 rounded-full p-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global operations" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;