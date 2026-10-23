'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, ChefHat } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop & Sweets', href: '#shop' },
    { name: 'Tasting Experiences', href: '#experiences' },
    { name: 'Chef T & Press', href: '#bio' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3'
            : 'bg-gradient-to-b from-neutral-950/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="font-serif tracking-widest text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent block">
                CIRQUE DU SOUFFLÉ
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-medium block -mt-1 font-sans">
                Chef T Lawrence-Simon
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-200 hover:text-amber-300 transition-colors uppercase tracking-wider relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 hover:border-amber-400 text-neutral-200 hover:text-white transition-all shadow-md hover:shadow-amber-500/10 group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                Cart
              </span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-neutral-950 text-xs font-bold flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950/95 border-b border-amber-500/20 px-6 py-6 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Certified Chocolatier & Aerialist</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
