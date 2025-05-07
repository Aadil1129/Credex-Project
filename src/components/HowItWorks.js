import { motion } from "framer-motion";
import { FaUpload, FaCalculator, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="w-12 h-12" />,
    title: "Upload License",
    description: "Simply upload your software license details through our secure platform",
  },
  {
    icon: <FaCalculator className="w-12 h-12" />,
    title: "Get Valuation",
    description: "Receive an instant market-based valuation for your software license",
  },
  {
    icon: <FaMoneyBillWave className="w-12 h-12" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment through your preferred method",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Three simple steps to turn your unused licenses into cash
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
