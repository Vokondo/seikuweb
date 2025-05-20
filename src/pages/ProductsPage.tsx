import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import aluminiumImg from '../assets/aluminium.jpg';
import chemindImg from '../assets/chemind.jpg';
import petroImg from '../assets/petro.jpg';
import mineImg from '../assets/mine.png';
import plasImg from '../assets/plas.jpg';
import scrapsImg from '../assets/scraps.jpg';
import woodImg from '../assets/wood.jpg';
import addImg from '../assets/add.jpg';
import metalImg from '../assets/metal.jpg';

const ProductsPage: React.FC = () => {
  const categories = ["All", "Metals", "Polymers", "Chemicals", "Raw Materials"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Industrial Solvents",
      image: chemindImg,
      description: "Industrial-grade solvents for pharmaceutical, cleaning, degreasing, and manufacturing processes",
      category: "Chemicals"
    },
    {
      id: 2,
      name: "Mineral Resources",
      image: mineImg,
      description: "Essential minerals including silica, limestone, and clay for various industrial applications.",
      category: "Metals"
    },
    {
      id: 3,
      name: "Petroleum Products",
      image: petroImg,
      description: "Naphtha, fuel oils, lubricants, and petrochemical feedstocks for chemical manufacturing, energy production, etc"
    },
    {
      id: 4,
      name: "Commodity Plastics",
      image: plasImg,
      description: "Widely used polymers such as PE, PP, PS, and PVC for general manufacturing applications.",
      category: "Polymers"
    },
    {
      id: 5,
      name: "Scrap Metals",
      image: scrapsImg,
      description: "High-quality scrap metals for recycling, smelting, and industrial manufacturing applications.",
      category: "Metals"
    },
    {
      id: 6,
      name: "Processing Additives",
      image: addImg,
      description: "Chemical additives to enhance manufacturing processes and product properties.",
      category: "Chemicals"
    },
    {
      id: 7,
      name: "Metals",
      image: metalImg,
      description: "Top-tier metals and custom alloys engineered for precision machining, structural fabrication, and demanding industrial uses.",
      category: "Metals"
    },
    {
      id: 8,
      name: "Wood & Fiber Materials",
      image: woodImg,
      description: "Processed wood products and natural fibers for construction and manufacturing.",
      category: "Raw Materials"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Products
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive range of high-quality commodities
              for manufacturing excellence
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap items-center gap-4 justify-center">
            <Filter size={20} className="text-slate-500 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">No products found matching your criteria.</p>
              <button 
                className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Request Custom Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Need Custom Solutions?
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Can't find exactly what you're looking for? Our commodity specialists can 
                  source custom materials to your exact specifications and quality requirements.
                </p>
                <a 
                  href="/seikuweb/contact" 
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Custom sourcing" 
                  className="rounded-lg shadow-md w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;