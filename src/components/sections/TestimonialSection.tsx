import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Seiku has been an invaluable partner in our supply chain. Their ability to source high-quality metals consistently has improved our product quality and manufacturing reliability.",
      author: "Sarah Johnson",
      position: "Procurement Director",
      company: "AutoTech Manufacturing",
      rating: 5
    },
    {
      id: 2,
      quote: "We've reduced procurement costs by 15% while improving material quality since partnering with Seiku. Their market insights have been critical to our strategic sourcing decisions.",
      author: "Michael Chen",
      position: "Supply Chain Manager",
      company: "ElectroPro Industries",
      rating: 5
    },
    {
      id: 3,
      quote: "The technical support and quality assurance from Seiku has been exceptional. They don't just supply commodities - they provide complete material solutions.",
      author: "Jennifer Willis",
      position: "Operations Executive",
      company: "Precision Components Co.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-primary-500">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            We're proud to partner with leading manufacturers across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-accent-500 fill-accent-500" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-slate-800">{testimonial.author}</p>
                <p className="text-slate-600 text-sm">{testimonial.position}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white text-lg mb-2">Trusted by manufacturing leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {["Automotive", "Electronics", "Aerospace", "Construction", "Medical"].map((industry, index) => (
              <div key={index} className="text-primary-200 font-semibold">
                {industry} Manufacturing
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;