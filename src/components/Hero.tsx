'use client';

import React from 'react';
import { Sparkles, Award, ArrowRight, Star, ShoppingBag, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle decorative circus grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Accolade pill badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-amber-950/40">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>FOX / HULU Crime Scene Kitchen Finalist</span>
          <span className="text-amber-500/60">•</span>
          <span>Food Network Great Chocolate Showdown Finalist</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Where Aerial Circus Artistry Meets{' '}
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            French Haute Pâtisserie
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Founded by Certified Chocolatier and aerial performer <strong className="text-white font-medium">Chef T Lawrence-Simon</strong>.
          Trained under Chef Amaury Guichon in Las Vegas and Robuchon at the MGM Grand.
          Experience theatrical 5-course dessert tasting menus and handcrafted artisanal chocolates shipped worldwide.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#shop"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Merch & Confections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experiences"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white font-semibold text-sm uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>5-Course Dessert Tastings</span>
          </a>
        </div>

        {/* Credential Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Trained Under</span>
            </div>
            <p className="text-sm font-medium text-white">Chef Amaury Guichon & Michel Ernots</p>
            <span className="text-xs text-neutral-400">Las Vegas Pastry Academy</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Star className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Michelin Standard</span>
            </div>
            <p className="text-sm font-medium text-white">Robuchon, MGM Grand</p>
            <span className="text-xs text-neutral-400">Mastered under Chef Gilbert Pena</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Certified</span>
            </div>
            <p className="text-sm font-medium text-white">Professional Chocolatier</p>
            <span className="text-xs text-neutral-400">Ecole Chocolat Graduate</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">TV Finalist</span>
            </div>
            <p className="text-sm font-medium text-white">FOX & Food Network</p>
            <span className="text-xs text-neutral-400">Crime Scene Kitchen & Chocolate Showdown</span>
          </div>
        </div>
      </div>
    </section>
  );
}
