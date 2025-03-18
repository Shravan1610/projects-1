import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Zap className="w-8 h-8 text-neon-blue transition-all duration-300 group-hover:text-neon-purple" />
              <span className="text-xl font-inter font-bold">ai-agency</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="hover:text-neon-blue transition-all duration-300">Home</Link>
              <a href="#services" className="hover:text-neon-blue transition-all duration-300">Services</a>
              <Link to="/contact" className="hover:text-neon-blue transition-all duration-300">Contact</Link>
              <Link to="/contact" className="neon-button">Get Started</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:text-neon-blue transition-all duration-300">Home</Link>
            <a href="#services" className="block px-3 py-2 hover:text-neon-blue transition-all duration-300">Services</a>
            <Link to="/contact" className="block px-3 py-2 hover:text-neon-blue transition-all duration-300">Contact</Link>
            <Link to="/contact" className="neon-button w-full mt-4">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};