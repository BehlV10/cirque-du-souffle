'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Wine, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

export function TastingExperience() {
  const { addToCart } = useCart();
  const [booked, setBooked] = useState(false);

  const tastingProduct = PRODUCTS.find((p) => p.id === 'tasting-menu-experience')!;

  const handleBookDeposit = () => {
    if (tastingProduct) {
      addToCart(tastingProduct, undefined, undefined, 1);
      setBooked(true);
      setTimeout(() => setBooked(false), 2000);
    }
  };

  const courses = [
    {
      course: 'Course 01',
      title: 'The Flying Trapezist',
      description: 'Airy passionfruit cloud, dehydrated coconut meringue, yuzu gelée, and sparkling champagne pearls.',
    },
    {
      course: 'Course 02',
      title: 'Aerial Lyra Golden Ring',
      description: 'Smoked single-origin Madagascar dark chocolate sphere, hazelnut feuilletine crunch, warm salted caramel pour.',
    },
    {
      course: 'Course 03',
      title: 'Fire Breather Intermezzo',
      description: 'Blood orange and Thai chili granita with mint chlorophyll mist to cleanse the palate.',
    },
    {
      course: 'Course 04',
      title: 'Cirque Signature Soufflé',
      description: 'Hot Grand Marnier soufflé with edible 24k gold dust and house-churned crème fraîche gelato.',
    },
    {
      course: 'Course 05',
      title: 'The Grand Finale Mignardises',
      description: 'Trio of hand-painted jewel bonbons: pistachio praline, raspberry reduction, and Tahitian smoked vanilla.',
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-neutral-900/60 border-y border-neutral-800/80 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Booking */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Somerville, MA • Private Dining</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              5-Course Theatrical Dessert Tasting
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Cirque du Soufflé redefines dessert dining into an immersive sensory performance. Combining French pastry technique with acrobatic theatricality, each evening hosts an intimate party of twelve guests.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Intimate seating limited to 12 guests per service</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Wine className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Curated dessert wine and artisan mocktail pairings</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Selected weekend evenings throughout the season</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBookDeposit}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:brightness-110 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all"
              >
                {booked ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Deposit Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Book Tasting Deposit • $75</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
              >
                Inquire for Private Events
              </a>
            </div>
          </div>

          {/* Right Column: Menu Accordion / Preview */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <h3 className="font-serif text-lg font-bold text-amber-400 uppercase tracking-wider">
                Sample Tasting Menu
              </h3>
              <span className="text-xs text-neutral-400 font-sans">
                Chef T Lawrence-Simon
              </span>
            </div>

            <div className="space-y-4">
              {courses.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white font-serif">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono text-amber-400/80">
                      {item.course}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
