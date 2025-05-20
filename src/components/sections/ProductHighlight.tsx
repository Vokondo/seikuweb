import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import metalsImg from '/src/assets/metals.jpg';
import polymersImg from '/src/assets/polymers.jpg';

const ProductHighlight: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Industrial Metals",
      image: metalsImg,
      description: "High-grade metals including steel alloys, aluminum, copper, and specialty metals for industrial applications.",
      featured: true
    },
    {
      id: 2,
      name: "Polymers & Plastics",
      image: polymersImg,
      description: "Engineering and commodity polymers for various manufacturing applications, including ABS, PC, PP, and specialty compounds.",
      featured: true
    },
    {
      id: 3,
      name: "Industrial Chemicals",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Process chemicals, additives, and specialty formulations for manufacturing processes across industries.",
      featured: true
    },
    {
      id: 4,
      name: "Raw Materials",
      image: "https://images.pexels.com/photos/162534/architecture-building-workshop-interior-design-162534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Essential raw materials including silica, limestone, clay, wood pulp, and other base components for manufacturing.",
      featured: false
    }
  ];

  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Premium Product Categories
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              We source the highest quality commodities from around the globe to 
              ensure your manufacturing processes run smoothly and efficiently.
            </p>
          </div>
          <Link 
            to="/seikuweb/products"
            className="mt-4 md:mt-0 inline-flex items-center font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            View all products <ArrowRight size={18} className="ml-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;