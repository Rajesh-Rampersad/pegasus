"use client"
import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold tracking-wide">
          PegasusSportware
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <a href="#features" className="hover:text-gray-200 transition">
            Features
          </a>
          <a href="#products" className="hover:text-gray-200 transition">
            Products
          </a>
          <a href="#about" className="hover:text-gray-200 transition">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-200 transition">
            Contact
          </a>
          <div className="flex items-center space-x-4">
          <ToggleTheme />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <nav className="space-y-4 px-6 py-4">
            <a href="#features" className="block hover:text-indigo-500">
              Features
            </a>
            <a href="#products" className="block hover:text-indigo-500">
              Products
            </a>
            <a href="#about" className="block hover:text-indigo-500">
              About Us
            </a>
            <a href="#contact" className="block hover:text-indigo-500">
              Contact
            </a>
          </nav>
          <div className="flex justify-center space-x-6 p-4 border-t">            
          
          </div>
          
        </div>
      )}
    </header>
  );
}
