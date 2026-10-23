'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Award, ArrowRight, Star, ShoppingBag, Calendar, ChefHat } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center overflow-hidden bg-neutral-950">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-700/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle circus pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* TV Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur-md shadow-lg shadow-amber-950/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>FOX Crime Scene Kitchen Finalist</span>
              <span className="text-amber-500/60">•</span>
              <span>Food Network Finalist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.1]">
              Aerial Circus Artistry Meets{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent block mt-1">
                French Haute Pâtisserie
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 max-w-2xl font-normal leading-relaxed">
              Founded by aerial acrobat and Certified Chocolatier <strong className="text-white font-medium">Chef T Lawrence-Simon</strong>. Trained under Chef Amaury Guichon in Las Vegas and Robuchon at the MGM Grand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Confections & Merch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#experiences"
                className="px-7 py-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>5-Course Dessert Tastings</span>
              </a>
            </div>

            {/* Credentials Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80">
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">Trained By</span>
                <p className="text-xs font-semibold text-white mt-0.5">Chef Amaury Guichon</p>
                <span className="text-[10px] text-neutral-300 font-medium">Las Vegas Pastry Academy</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">Michelin Standard</span>
                <p className="text-xs font-semibold text-white mt-0.5">Robuchon, MGM Grand</p>
                <span className="text-[10px] text-neutral-300 font-medium">Pastry Mastery</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">Certified</span>
                <p className="text-xs font-semibold text-white mt-0.5">Ecole Chocolat</p>
                <span className="text-[10px] text-neutral-300 font-medium">Professional Chocolatier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Framed Showcase of Signature Dessert Pour */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md w-full rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 via-neutral-800 to-amber-500/10 shadow-2xl shadow-amber-950/40">
              <div
                className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800"
                style={{ aspectRatio: '4 / 5', minHeight: '380px', maxHeight: '500px', position: 'relative' }}
              >
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196904750-XHZEMNAVELXN1I94YD4N/POUR+SHOT+less+bright+background.jpg"
                  alt="Cirque du Soufflé - The Signature Chocolate Sphere Caramel Pour"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Theatrical Dessert Artistry</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-amber-500/30 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                        Signature Course 02
                      </span>
                      <h3 className="font-serif text-base font-bold text-white">
                        The Smoked Caramel Sphere
                      </h3>
                      <p className="text-[11px] text-neutral-200 font-medium">
                        Table-side hot caramel theatrics • Somerville, MA
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center shrink-0">
                      <ChefHat className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
