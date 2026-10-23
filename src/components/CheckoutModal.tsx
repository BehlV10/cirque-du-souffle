'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, ShieldCheck, Sparkles, ArrowRight, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CheckoutModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function CheckoutModal({ onClose, onSuccess }: CheckoutModalProps) {
  const { items, total, shipping, subtotal } = useCart();
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane@example.com',
    address: '123 Highland Ave',
    city: 'Somerville',
    state: 'MA',
    zip: '02143',
    cardNumber: '•••• •••• •••• 4242',
    exp: '12/28',
    cvc: '123',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber] = useState(() => `CDS-${Math.floor(100000 + Math.random() * 900000)}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <h3 className="font-serif text-lg font-bold text-white">
              {step === 'checkout' ? 'Complete Your Order' : 'Order Confirmed!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'checkout' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Stripe Note Banner */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-semibold block">
                  Stripe Checkout Demo Mode
                </strong>
                When you connect your live or test Stripe API key in <code className="bg-neutral-800 px-1 py-0.5 rounded text-amber-300">.env.local</code>, this directs straight to the hosted Stripe Checkout interface. You can test this form right now!
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Contact & Shipping Details
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">ZIP</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                <span>Payment Method</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-normal lowercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> 256-bit encrypted
                </span>
              </h4>

              <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Credit / Debit Card (Stripe Test)</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    readOnly
                    className="col-span-2 px-3 py-1.5 bg-neutral-900 border border-neutral-700/60 rounded text-xs text-neutral-300"
                  />
                  <input
                    type="text"
                    value={formData.exp}
                    readOnly
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-700/60 rounded text-xs text-neutral-300 text-center"
                  />
                  <input
                    type="text"
                    value={formData.cvc}
                    readOnly
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-700/60 rounded text-xs text-neutral-300 text-center"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary Line */}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-sm">
              <span className="text-neutral-400">Total Charged</span>
              <span className="font-bold text-lg text-amber-400">${total.toFixed(2)}</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:brightness-110 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Simulating Stripe Authorization...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize & Pay ${total.toFixed(2)}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Payment Succeeded
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mb-1">
                Thank you, {formData.name}!
              </h2>
              <p className="text-xs text-neutral-400">
                Order <strong className="text-amber-400 font-mono">{orderNumber}</strong> has been received and sent to Chef T’s Somerville kitchen.
              </p>
            </div>

            {/* Receipt Summary */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Recipient:</span>
                <span className="text-white font-medium">{formData.name} ({formData.email})</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Shipping to:</span>
                <span className="text-white font-medium">{formData.address}, {formData.city}, {formData.state} {formData.zip}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Items:</span>
                <span className="text-white font-medium">{items.length} product(s)</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Shipping:</span>
                <span className="text-white font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="pt-2 border-t border-neutral-800 flex justify-between font-bold text-sm">
                <span className="text-neutral-300">Amount Paid:</span>
                <span className="text-amber-400">${total.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={onSuccess}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Done & Return to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
