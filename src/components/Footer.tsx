'use client';

import { ChefHat, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 pt-16 pb-12 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
                  <ChefHat className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-serif tracking-widest text-lg font-bold text-white">
                CIRQUE DU SOUFFLÉ
              </span>
            </div>

            <p className="text-xs text-neutral-200 max-w-sm font-normal leading-relaxed">
              Pastry theatrics, artisanal single-origin chocolate collections, and multi-course dessert dining by Certified Chocolatier Chef T Lawrence-Simon. Somerville, Massachusetts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/cirquedusouffle"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 hover:border-amber-400 text-neutral-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-normal text-neutral-200">
              <li>
                <a href="#shop" className="hover:text-amber-400 transition-colors">
                  Artisan Bonbons & Merch
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  5-Course Tasting Menus
                </a>
              </li>
              <li>
                <a href="#bio" className="hover:text-amber-400 transition-colors">
                  Chef T & Accolades
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Bookings & Press
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Architecture */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif">
              Modern Architecture
            </h4>
            <p className="text-xs text-neutral-200 font-normal leading-relaxed">
              Engineered with <strong>Next.js 15</strong>, <strong>Tailwind CSS</strong>, and <strong>Stripe Checkout</strong>. Fully versioned on GitHub with automated continuous deployment.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>PCI-DSS Compliant Checkout</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <p>© {new Date().getFullYear()} Cirque du Soufflé / Chef T Lawrence-Simon. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-200 hover:text-amber-400 transition-colors text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
