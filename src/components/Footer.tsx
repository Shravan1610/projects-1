import React from 'react';
import { Twitter, Phone, MessageCircle, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="glass-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Zap className="w-8 h-8 text-neon-blue transition-all duration-300 group-hover:text-neon-purple" />
              <span className="text-xl font-inter font-bold">ai-agency</span>
            </Link>
            <p className="text-gray-300">
              Supercharge your business with cutting-edge AI automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-blue transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-neon-blue transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-neon-blue transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shravan@ai-agency.solutions"
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>shravan@ai-agency.solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917823844791"
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 7823844791</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/shravan_chumble"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 hover:text-neon-blue transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/qr/K6PWDSW72TA2H1"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 hover:text-neon-blue transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Agency Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};