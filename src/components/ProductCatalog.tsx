'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { ProductQuickView } from './ProductQuickView';
import { Sparkles } from 'lucide-react';

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'confections' | 'merch' | 'experiences'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'confections', label: 'Artisan Chocolates & Pastry' },
    { id: 'merch', label: 'Apparel & Cirque Merch' },
    { id: 'experiences', label: 'Tasting Experiences' },
  ];

  return (
    <section id="shop" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cirque Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Handcrafted Confections & Curated Merch
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Indulge in seasonal chocolate bonbon releases, French macarons, and limited edition circus aerialist apparel designed by Chef T.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-400/20'
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
