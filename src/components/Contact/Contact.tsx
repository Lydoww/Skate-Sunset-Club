import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Navbar from "../Bars/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar isProductDetailPage={false} scroll={true} />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get in touch with us for any questions about our products or
              services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="p-8">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black focus:border-2 transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black focus:border-2 transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black focus:border-2 transition-all duration-300 h-32"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className=" text-black hover:text-yellow-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-500 mr-4" />
                    <p className="text-gray-600">
                      123 Skate Street, Boardville, SK 90210
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-500 mr-4" />
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-500 mr-4" />
                    <p className="text-gray-600">info@skateshop.com</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Find Us
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332488949845!2d-122.41941548439496!3d37.77492797975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sca!4v1620176245566!5m2!1sen!2sca"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
