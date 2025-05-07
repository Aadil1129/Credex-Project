import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const mockResponses = {
  "how do i sell my license":
    "To sell your license, simply fill out our contact form with your license details. Our team will evaluate your license and provide a competitive quote within 24 hours.",
  "what types of licenses do you buy":
    "We purchase various types of software licenses including Enterprise Software, Cloud Services, Development Tools, and Security Software. Each license is evaluated individually for the best possible value.",
  "how long does it take":
    "The process typically takes 24-48 hours from submission to payment. Once we agree on a price, payment is processed immediately.",
  "is it safe":
    "Yes, absolutely! We use bank-level security protocols and secure escrow services to ensure safe and legitimate license transfers.",
  default:
    "Thank you for your question! Please fill out our contact form for specific information about your license, and our team will get back to you promptly.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: input,
    };

    // Find response
    const response = {
      type: "bot",
      text: findResponse(input.toLowerCase()),
    };

    setMessages((prev) => [...prev, userMessage, response]);
    setInput("");
  };

  const findResponse = (query) => {
    for (const [key, value] of Object.entries(mockResponses)) {
      if (query.includes(key)) {
        return value;
      }
    }
    return mockResponses.default;
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
        onClick={() => setIsOpen(true)}
      >
        <FaComments className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
              <h3 className="font-semibold">SoftSell Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
