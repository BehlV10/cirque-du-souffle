'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Users, Wine, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export function TastingExperience() {

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

            <p className="text-neutral-200 text-sm sm:text-base font-normal leading-relaxed">
              Cirque du Soufflé redefines dessert dining into an immersive sensory performance. Combining French pastry technique with acrobatic theatricality, each evening hosts an intimate party of twelve guests.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-medium">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Intimate seating limited to 12 guests per service</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-medium">
                <Wine className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Curated dessert wine and artisan mocktail pairings</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-medium">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Selected weekend evenings throughout the season</span>
              </div>
            </div>

            {/* Visual Dining Atmosphere Card */}
            <div
              className="relative w-full h-44 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl my-2"
              style={{ minHeight: '170px', position: 'relative' }}
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1626057426438-0O919FWL2NIQ2NHQJEXL/20210517_171946-03.jpeg"
                alt="Cirque du Souffle Tasting Dining Room in Somerville"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-serif font-semibold text-amber-300">
                The Intimate Tasting Parlor • Somerville, MA
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:brightness-110 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all group"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Tasting Experience (Inquire)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Private Party Inquiry (Up to 12)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Menu Accordion / Preview */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <h3 className="font-serif text-lg font-bold text-amber-400 uppercase tracking-wider">
                Sample Tasting Menu
              </h3>
              <span className="text-xs text-neutral-300 font-sans font-medium">
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
                  <p className="text-xs text-neutral-200 font-normal leading-relaxed">
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
