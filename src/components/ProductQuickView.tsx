'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, ShoppingBag, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.variants?.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.variants?.colors?.[0]?.name
  );
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Column */}
        <div
          className="relative md:w-1/2 aspect-square md:aspect-auto min-h-[300px] h-72 md:h-auto bg-neutral-950"
          style={{ minHeight: '300px', position: 'relative' }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
          {product.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-xs font-bold tracking-wide uppercase shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{product.badge}</span>
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {product.category}
            </span>
            <h2 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
              {product.name}
            </h2>
            <div className="text-xl font-bold text-amber-400 mb-4">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-sm text-neutral-200 font-normal leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Options */}
            {product.variants?.sizes && (
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase text-neutral-200 block mb-2">
                  Select Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-amber-400 text-neutral-950 border-amber-400'
                          : 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.variants?.colors && (
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase text-neutral-200 block mb-2">
                  Color: <strong className="text-white">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {product.variants.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-7 h-7 rounded-full border transition-all ${
                        selectedColor === color.name
                          ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-neutral-900 scale-110'
                          : 'border-neutral-700'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Product Feature Highlights */}
            {product.details && product.details.length > 0 && (
              <div className="pt-4 border-t border-neutral-800 space-y-1.5 mb-6">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="pt-4 border-t border-neutral-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-neutral-700 rounded-xl overflow-hidden bg-neutral-800">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700"
                >
                  -
                </button>
                <span className="px-4 text-sm font-semibold text-white">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 shadow-lg shadow-amber-500/20'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • ${(product.price * qty).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-300 font-medium pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Worldwide / Domestic Shipping
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Secure Stripe Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
