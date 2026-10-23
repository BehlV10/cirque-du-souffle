'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.variants?.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.variants?.colors?.[0]?.name
  );
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div
      className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-950/20 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div
        className="relative w-full h-64 sm:h-72 overflow-hidden bg-neutral-950 cursor-pointer"
        style={{ aspectRatio: '1 / 1', minHeight: '260px', position: 'relative' }}
        onClick={() => onQuickView(product)}
      >
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          style={{ objectFit: 'cover' }}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500/90 text-neutral-950 text-xs font-bold tracking-wide uppercase shadow-md backdrop-blur-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 border border-neutral-700/60 transition-all opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              onClick={() => onQuickView(product)}
              className="font-serif text-lg font-semibold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
            <span className="font-sans font-bold text-lg text-amber-400 shrink-0">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <p className="text-xs text-neutral-200 line-clamp-2 mb-4 font-normal leading-relaxed">
            {product.description}
          </p>

          {/* Variants Selector (if any) */}
          {product.variants && (
            <div className="space-y-3 mb-4 pt-2 border-t border-neutral-800/80">
              {/* Size Selector */}
              {product.variants.sizes && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium w-10">
                    Size:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {product.variants.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-all ${
                          selectedSize === size
                            ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-sm'
                            : 'bg-neutral-900 text-neutral-200 border-neutral-700 hover:border-neutral-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.variants.colors && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium w-10">
                    Color:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {product.variants.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-5 h-5 rounded-full border transition-all ${
                          selectedColor === color.name
                            ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-neutral-950 scale-110'
                            : 'border-neutral-700 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    {selectedColor && (
                      <span className="text-[10px] text-neutral-300 font-medium ml-1">
                        {selectedColor}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Add to Cart CTA */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            justAdded
              ? 'bg-emerald-500 text-white'
              : 'bg-neutral-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-neutral-200 hover:text-neutral-950 border border-neutral-700 hover:border-transparent'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
