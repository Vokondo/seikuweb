import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images using dynamic imports
import blog1Img from '../assets/blog1.jpg?url';
import blog2Img from '../assets/blog2.jpg?url';
import blog3Img from '../assets/blog3.jpg?url';
import blog4Img from '../assets/blog4.jpg?url';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Global Metal Market Trends for 2025",
      excerpt: "An analysis of upcoming trends in the industrial metals market, focusing on supply chain challenges and opportunities for manufacturers.",
      image: blog3Img,
      author: "Michael Chen",
      date: "June 15, 2025",
      category: "Market Analysis"
    },
    {
      id: 2,
      title: "Sustainable Sourcing Practices in Commodities",
      excerpt: "How manufacturers can implement sustainable sourcing practices for raw materials while maintaining quality and controlling costs.",
      image: blog4Img,
      author: "Sarah Johnson",
      date: "May 28, 2025",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Navigating Supply Chain Disruptions",
      excerpt: "Strategic approaches to mitigate risk and ensure commodity supply continuity during global market disruptions.",
      image: blog1Img,
      author: "David Williams",
      date: "May 10, 2025",
      category: "Supply Chain"
    },
    {
      id: 4,
      title: "Innovations in Polymer Manufacturing",
      excerpt: "New technologies and processes that are revolutionizing polymer production and creating opportunities for manufacturing efficiency.",
      image: "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Jennifer Willis",
      date: "April 22, 2025",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Raw Material Price Forecasting Models",
      excerpt: "Advanced analytical approaches to forecasting commodity prices and optimizing procurement strategies for manufacturers.",
      image: blog2Img,
      author: "Robert Thompson",
      date: "April 5, 2025",
      category: "Market Analysis"
    },
    {
      id: 6,
      title: "Quality Control Standards for Industrial Chemicals",
      excerpt: "Best practices for ensuring consistent quality in industrial chemical sourcing for manufacturing applications.",
      image: "https://images.pexels.com/photos/268756/pexels-photo-268756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Amanda Richards",
      date: "March 18, 2025",
      category: "Quality Management"
    }
  ];

  const categories = [
    "Market Analysis", 
    "Supply Chain", 
    "Sustainability", 
    "Innovation", 
    "Quality Management"
  ];

  return (
    <div className="pt-16">
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
              Industry Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert analysis, market trends, and practical knowledge for 
              manufacturing commodities and supply chain management
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 hover:text-primary-500 transition-colors">
                        <a href="#">{post.title}</a>
                      </h3>
                      <p className="text-slate-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center">
                          <User size={16} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center font-medium text-primary-500 hover:text-primary-600 transition-colors mt-4"
                      >
                        Read more <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-slate-700 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    &laquo;
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-500 text-white">
                    1
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-slate-700 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    2
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-slate-700 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    3
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-slate-700 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    &raquo;
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-gray-200">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between py-2 text-slate-600 hover:text-primary-500 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-slate-700 px-2 py-1 rounded-full text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md p-6 mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-gray-200">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-slate-600 mb-4">
                  Stay up-to-date with the latest industry insights and market analysis.
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-gray-200">
                  Latest Market Report
                </h3>
                <div className="mb-4">
                  <img 
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Market report" 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Q2 2025 Commodity Market Outlook
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Comprehensive analysis of industrial commodity trends and price forecasts for the coming quarter.
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Download report <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;