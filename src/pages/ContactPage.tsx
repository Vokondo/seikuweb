import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import callImg from '../assets/call.jpg';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our commodity specialists to discuss your requirements
              or request a custom quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below, and our team will get back to you
                within 24 hours.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Reach out to us directly or visit our headquarters.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800 mb-1">Main Office</h3>
                    <p className="text-slate-600">
                      123 Trading Street<br />
                      Industrial Park<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">
                      <a href="tel:+12125551234" className="hover:text-primary-500 transition-colors">+1 (212) 555-1234</a> (Main)<br />
                      <a href="tel:+12125555678" className="hover:text-primary-500 transition-colors">+1 (212) 555-5678</a> (Support)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">
                      <a href="mailto:info@seiku.com" className="hover:text-primary-500 transition-colors">info@seiku.com</a> (General Inquiries)<br />
                      <a href="mailto:sales@seiku.com" className="hover:text-primary-500 transition-colors">sales@seiku.com</a> (Sales)<br />
                      <a href="mailto:support@seiku.com" className="hover:text-primary-500 transition-colors">support@seiku.com</a> (Support)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="text-primary-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800 mb-1">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 8am - 6pm EST<br />
                      Saturday: 9am - 1pm EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={callImg}
                  alt="Location map" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              With locations around the world, we're always close to your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "London",
                address: "45 Commerce Road\nCanary Wharf\nLondon, E14 9GE\nUnited Kingdom",
                phone: "+44 20 7946 0582",
                email: "london@seiku.com"
              },
              {
                city: "Singapore",
                address: "78 Trade Center\nRaffles Place\nSingapore 048617",
                phone: "+65 6438 5302",
                email: "singapore@seiku.com"
              },
              {
                city: "Shanghai",
                address: "120 Commerce Tower\nPudong District\nShanghai, 200120\nChina",
                phone: "+86 21 5049 1977",
                email: "shanghai@seiku.com"
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{office.city} Office</h3>
                <div className="flex items-start mb-4">
                  <MapPin size={20} className="text-primary-500 mt-1 mr-3" />
                  <p className="text-slate-600 whitespace-pre-line">{office.address}</p>
                </div>
                <div className="flex items-center mb-3">
                  <Phone size={20} className="text-primary-500 mr-3" />
                  <a href={`tel:${office.phone}`} className="text-slate-600 hover:text-primary-500 transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-primary-500 mr-3" />
                  <a href={`mailto:${office.email}`} className="text-slate-600 hover:text-primary-500 transition-colors">
                    {office.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;