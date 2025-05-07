import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth and professional from start to finish.",
    name: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Solutions",
  },
  {
    quote:
      "As a growing startup, being able to purchase discounted software licenses through SoftSell has helped us manage our budget effectively. Their verification process gives us confidence in every purchase.",
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "InnovateLab",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Join thousands of satisfied customers who trust SoftSell
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-4 left-4 text-blue-500 dark:text-blue-400 opacity-20">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
