import React, { useState } from "react";
import { FiMail, FiMessageSquare, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-backend-j3vm.onrender.com/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "Portfolio Contact",
          message: formData.message,
        }),
      });

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      data-aos="fadeup"
      data-aos-delay="250"
      className="py-20 px-4 bg-gradient-to-b"
    >
      <div className="max-w-lg mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Get In <span className="text-red-600">Touch</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100">
          <motion.dev whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </motion.dev>
          <motion.dev whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </motion.dev>
          <motion.dev whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Message</label>
            <div className="relative">
              <div className="absolute top-5 left-3">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                rows="4"
                className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="write your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </motion.dev>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full pl-10 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </div>
      <div className="mt-8 text-center text-gray-800">
        <p>
          Or email me directly at:{" "}
          <span className="text-gray-950 font-bold">anjalishgkp@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
