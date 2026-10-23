'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles } from 'lucide-react';

export function Gallery() {
  const images = [
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196904750-XHZEMNAVELXN1I94YD4N/POUR+SHOT+less+bright+background.jpg',
      title: 'The Sphere Caramel Pour',
      subtitle: 'Table-side 5-course tasting theatrics',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1583695051853-GWOR8M4H52DCGYRQ9G97/79988796_1456871671132268_8500130343418855424_n.jpg',
      title: 'Aerial Lyra Flight',
      subtitle: 'Circus performer Chef T in motion',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1614643673778-QUUUTOK957SKI384MWQC/MacaronTitle2.jpeg',
      title: 'Masterclass Macarons',
      subtitle: 'French almond meringue & delicate ganache',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197330861-WVK5DMKFPQ4JSBFLITW3/LemonMeringueTart.jpeg',
      title: 'Torched Lemon Meringue Tart',
      subtitle: 'Classical French patisserie method',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197254752-ELJGQHXE3QJVW10IWNYL/20230530104417_IMG_1271-01.jpeg',
      title: 'Hand-Painted Chocolate Bonbons',
      subtitle: 'Glossy jewel shells & infused ganache',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1697032452558-O6DZJVD3XWV2CH2721PZ/BasqueCheesecake3%28betterlighting%29.jpeg',
      title: 'Burnt Basque Cheesecake',
      subtitle: 'San Sebastián caramelized custard',
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
            The Cirque Gallery
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Real confectionery showpieces, table-side pours, and aerial acrobatics from Chef T’s Somerville kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 w-full h-64 sm:h-72 md:h-full ${img.span}`}
              style={{ minHeight: '260px', position: 'relative' }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-1 group-hover:translate-y-0 transition-transform">
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
