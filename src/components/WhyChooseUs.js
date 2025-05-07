import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaHandshake, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Secure Transactions",
    description: "Bank-level security protocols and escrow service for safe license transfers",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Fast Processing",
    description: "Get valuations instantly and complete transactions within 24 hours",
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Expert Support",
    description: "24/7 dedicated customer support team to assist you every step of the way",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Best Market Rates",
    description: "Competitive pricing and market analysis to ensure maximum value",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Industry-leading features that set us apart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 inline-block mb-4">
                <div className="text-blue-600 dark:text-blue-300">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
