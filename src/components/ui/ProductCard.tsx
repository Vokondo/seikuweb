import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>
      <div className="p-4 sm:p-6 relative">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{product.description}</p>
        <Link 
          to={`/products`} 
          className="inline-flex items-center text-sm sm:text-base font-medium text-primary-400 hover:text-primary-300 transition-colors"
        >
          Explore category <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;