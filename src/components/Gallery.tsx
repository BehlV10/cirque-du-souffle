'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  subtitle: string;
  category: 'pastry' | 'circus' | 'plating';
}

export function Gallery() {
  const [filter, setFilter] = useState<'all' | 'pastry' | 'circus' | 'plating'>('all');

  const galleryItems: GalleryItem[] = [
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196904750-XHZEMNAVELXN1I94YD4N/POUR+SHOT+less+bright+background.jpg',
      title: 'Table-Side Warm Caramel Pour',
      subtitle: '5-Course Tasting Signature Course',
      category: 'plating',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1583695051853-GWOR8M4H52DCGYRQ9G97/79988796_1456871671132268_8500130343418855424_n.jpg',
      title: 'Aerial Lyra Flight',
      subtitle: 'Chef T Performing in Aerial Lyra Hoop',
      category: 'circus',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1614643673778-QUUUTOK957SKI384MWQC/MacaronTitle2.jpeg',
      title: 'Masterclass French Macarons',
      subtitle: 'Almond Meringue & Delicate Ganache Emulsions',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197330861-WVK5DMKFPQ4JSBFLITW3/LemonMeringueTart.jpeg',
      title: 'Torched Lemon Meringue Tart',
      subtitle: 'Classical French Pâtisserie Precision',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197254752-ELJGQHXE3QJVW10IWNYL/20230530104417_IMG_1271-01.jpeg',
      title: 'Hand-Painted Chocolate Bonbons',
      subtitle: 'Single-Origin Valrhona Cocoa & Fruit Reductions',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1697032452558-O6DZJVD3XWV2CH2721PZ/BasqueCheesecake3%28betterlighting%29.jpeg',
      title: 'Burnt Basque Cheesecake',
      subtitle: 'San Sebastián Style Caramelized Custard',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196908647-483BDUWV7E6A5XW46QUJ/Clafoutis3.jpg',
      title: 'Rustic Cherry Clafoutis',
      subtitle: 'Baked French Custard with Fresh Cherries',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1614644204048-5PP5HXJSOU5XL7G8B7V5/154780055_488610748802032_4954952352028405528_n.jpg',
      title: 'Circus Acrobatic Balance',
      subtitle: 'Gravity-Defying Aerial Performance',
      category: 'circus',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1697033113582-4ODZDVVR9G4FPTY4S1MU/20231003095517_IMG_1672-02.jpeg',
      title: 'Theatrical Plating Showcase',
      subtitle: 'Dessert Artistry from the Somerville Kitchen',
      category: 'plating',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1583695057191-YUWDTYYPHRS159C5ACKR/Indegogo+Img+gallery+06.jpg',
      title: 'Cirque du Soufflé Vision',
      subtitle: 'The Marriage of Circus Big Top & Haute Patisserie',
      category: 'circus',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1614644293128-XH8K2CR20AB35VO0KKGF/received_347024099632731-01+%281%29.jpeg',
      title: 'Chocolate Sculpting Repertoire',
      subtitle: 'Mastering Edible Architecture with Amaury Guichon',
      category: 'pastry',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1626057426438-0O919FWL2NIQ2NHQJEXL/20210517_171946-03.jpeg',
      title: 'Intimate Dining Table Setting',
      subtitle: 'Curated 12-Guest Private Service in Somerville',
      category: 'plating',
    },
  ];

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-24 bg-neutral-900/40 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The Cirque Gallery
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Real confectionery showpieces, table-side pours, and aerial acrobatics from Chef T’s Somerville kitchen and performances.
          </p>
        </div>

        {/* Gallery Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos (12)' },
            { id: 'pastry', label: 'French Pâtisserie & Bonbons' },
            { id: 'circus', label: 'Aerial Circus Acrobatics' },
            { id: 'plating', label: 'Tasting Plating & Tables' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Uniform, Gap-Free Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-amber-500/40 bg-neutral-950 w-full h-72 sm:h-80 shadow-lg transition-all duration-300"
              style={{ minHeight: '280px', position: 'relative' }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {img.subtitle}
                </span>
                <h3 className="font-serif text-base font-bold text-white">
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
