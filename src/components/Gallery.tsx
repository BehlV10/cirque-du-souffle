'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles } from 'lucide-react';

export function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      title: 'Hand-Painted Jewel Bonbons',
      subtitle: 'Single-origin cocoa & infused fruit reductions',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      title: 'Aerial Lyra Movement',
      subtitle: 'Precision circus acrobatics',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
      title: 'Haute Macarons',
      subtitle: 'French almond meringue & delicate ganache',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      title: 'The Soufflé Rise',
      subtitle: 'Table-side culinary presentation',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      title: 'Sugar Sculpture & Florals',
      subtitle: 'Intricate showpiece techniques',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-900/40 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The Gallery
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            A glimpse into the edible sculptures, circus arts, and tasting courses crafted by Chef T.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {img.subtitle}
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
