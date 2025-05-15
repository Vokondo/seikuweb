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
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">{product.name}</h3>
        <p className="text-slate-600 mb-4">{product.description}</p>
        <Link 
          to={`/products`} 
          className="inline-flex items-center font-medium text-primary-500 hover:text-primary-600 transition-colors"
        >
          Explore category <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;