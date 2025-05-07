import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Transform Your Unused Software Licenses into Cash
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-blue-100"
        >
          The secure, efficient marketplace for software license resale
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-block"
          >
            Get a Quote Today
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}
