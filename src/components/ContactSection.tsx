'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiryType: 'Private Tasting Experience',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', inquiryType: 'Private Tasting Experience', message: '' });
    }, 4000);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Let’s Craft Something Unforgettable
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Inquire about private dessert tastings, bespoke wedding and showpiece orders, corporate demonstrations, or media and television appearances.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Based in</span>
                  <span className="text-sm font-semibold text-white">Somerville, Massachusetts</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Direct Inquiries</span>
                  <span className="text-sm font-semibold text-white">cheft@chef-t.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Social</span>
                  <a
                    href="https://instagram.com/cirquedusouffle"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    @cirquedusouffle
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 mt-8">
              <h4 className="font-serif text-base font-bold text-white mb-1">
                The Sweet Cirque Club
              </h4>
              <p className="text-xs text-neutral-400 font-light mb-4">
                Be the first to hear about seasonal chocolate drops, tasting menu seat releases, and macaron masterclasses.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Welcome to the club! We will keep you updated.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-700/80 rounded-xl text-xs text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Form column */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Message Dispatched to Chef T
                </h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Thank you for reaching out! We typically respond within 24–48 hours regarding tasting availability and custom commissions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Send an Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Audrey Hepburn"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. audrey@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Private Tasting Experience">Private Tasting Experience (12 guests)</option>
                    <option value="Custom Bonbon & Chocolate Orders">Custom Bonbon & Chocolate Orders</option>
                    <option value="Event Catering & Performance">Event Catering & Live Pastry Showpiece</option>
                    <option value="Masterclass Booking">Masterclass (Macarons / Chocolate Work)</option>
                    <option value="Press / Media">Press / Television / Media</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Details / Dates
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your event, desired dates, or chocolate ideas..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
