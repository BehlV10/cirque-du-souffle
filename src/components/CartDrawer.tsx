'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CheckoutModal } from './CheckoutModal';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingRemaining,
    freeShippingThreshold,
    shipping,
    total,
    clearCart,
  } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          successUrl: window.location.origin,
          cancelUrl: window.location.origin,
        }),
      });

      const data = await res.json();

      if (data.url) {
        // Real Stripe redirect
        window.location.href = data.url;
      } else {
        // Fallback to interactive Checkout Modal
        setShowCheckoutModal(true);
      }
    } catch (err) {
      console.error(err);
      setShowCheckoutModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const freeShippingProgress = Math.min(
    100,
    ((freeShippingThreshold - freeShippingRemaining) / freeShippingThreshold) * 100
  );

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-neutral-900 border-l border-neutral-800 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h2 className="font-serif text-lg font-bold text-white tracking-wide">
                  Your Cart ({items.length})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-3 bg-neutral-950/60 border-b border-neutral-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                {freeShippingRemaining > 0 ? (
                  <span className="text-neutral-300">
                    Add <strong className="text-amber-400">${freeShippingRemaining.toFixed(2)}</strong> more for Free Shipping
                  </span>
                ) : (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> You unlocked Free Shipping!
                  </span>
                )}
                <span className="text-neutral-500 font-mono text-[10px]">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400 py-12">
                  <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-neutral-600" />
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg mb-1">
                    Your bag is empty
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-xs mb-6">
                    Indulge in handcrafted bonbons, macarons, or official Cirque aerial merchandise.
                  </p>
                  <a
                    href="#shop"
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                  >
                    Start Shopping
                  </a>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex gap-4 p-3 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 items-center"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-800 shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate font-serif">
                        {item.product.name}
                      </h4>
                      {(item.selectedSize || item.selectedColor) && (
                        <p className="text-[11px] text-neutral-400">
                          {item.selectedSize && `Size: ${item.selectedSize}`}
                          {item.selectedSize && item.selectedColor && ' • '}
                          {item.selectedColor && `Color: ${item.selectedColor}`}
                        </p>
                      )}
                      <div className="text-xs font-bold text-amber-400 mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-700/60 rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-neutral-300 hover:text-white"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold px-1.5 text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-neutral-300 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-800 bg-neutral-950/80 space-y-3">
                <div className="space-y-1.5 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span className="text-white font-medium">
                      {shipping === 0 ? (
                        <span className="text-emerald-400 font-semibold">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-neutral-800 flex justify-between text-base font-bold text-white font-serif">
                    <span>Total</span>
                    <span className="text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:brightness-110 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Preparing Secure Checkout...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Checkout with Stripe • ${total.toFixed(2)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-neutral-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Encrypted 256-bit Stripe Payment Gateway
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCheckoutModal && (
        <CheckoutModal
          onClose={() => setShowCheckoutModal(false)}
          onSuccess={() => {
            clearCart();
            setShowCheckoutModal(false);
          }}
        />
      )}
    </>
  );
}
