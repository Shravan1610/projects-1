import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://hook.eu2.make.com/szkptb8xzss6nu5k1pm1m4okl6lbaqad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4"
    >
      <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-12 gradient-text">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border border-white/10 focus:border-neon-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border border-white/10 focus:border-neon-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border border-white/10 focus:border-neon-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border border-white/10 focus:border-neon-blue outline-none"
                ></textarea>
              </div>
              <button type="submit" className="neon-button w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-inter font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:shravan@ai-agency.solutions" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span>shravan@ai-agency.solutions</span>
                </a>
                <a href="tel:+917823844791" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+91 7823844791</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};