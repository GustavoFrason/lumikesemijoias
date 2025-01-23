import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-500 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div>
          <span className="font-bold">Pedido mínimo R$1.000,00</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#quem-somos" className="hover:underline">
            QUEM SOMOS
          </a>
          <a href="#showroom" className="hover:underline">
            SHOWROOM
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">LUMIKE</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex flex-grow mx-4">
            <input
              type="text"
              placeholder="O que procura?"
              className="w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none px-2 py-1 text-sm"
            />
            <button className="text-gray-500 hover:text-pink-500 ml-2">
              <FaSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#favorites" className="text-gray-700 hover:text-pink-500">
              <FaHeart />
            </a>
            <a href="#cart" className="relative text-gray-700 hover:text-pink-500">
              <FaShoppingCart />
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full px-2">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-white border-t border-gray-300 md:block`}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm font-semibold">
            <a href="#liquida" className="text-yellow-500">
              PROMOÇÃO
            </a>
            <a href="#lancamento" className="hover:text-pink-500">
              LANÇAMENTO
            </a>
            <a href="#aneis" className="hover:text-pink-500">
              BRINCOS
            </a>
            <a href="#brincos" className="hover:text-pink-500">
              ANÉIS
            </a>
            <a href="#pulseiras" className="hover:text-pink-500">
              PULSEIRAS
            </a>
            <a href="#colares" className="hover:text-pink-500">
              COLARES
            </a>
            <a href="#tornozeleiras" className="hover:text-pink-500">
              CHOKERS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
