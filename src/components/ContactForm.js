import { useState } from "react";
import { motion } from "framer-motion";

const licenseTypes = [
  "Enterprise Software",
  "Cloud Services",
  "Development Tools",
  "Security Software",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your License Valuation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 dark:bg-green-800 p-4 rounded-lg text-green-700 dark:text-green-100 text-center mb-8"
          >
            Thank you for your submission! We'll be in touch soon.
          </motion.div>
        ) : null}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.company ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
            />
            {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
          </div>

          <div>
            <label
              htmlFor="licenseType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              License Type *
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.licenseType ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
            >
              <option value="">Select a license type</option>
              {licenseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
