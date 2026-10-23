'use client';

import React from 'react';
import Image from 'next/image';
import { Tv, Award, Star, ExternalLink, Newspaper, Video, Heart, Calendar } from 'lucide-react';

export function BioAndPress() {
  const pressArticles = [
    {
      outlet: 'The Boston Globe',
      date: 'September 2024',
      title: 'Highlighting the Theatrical Tasting Menus',
      description: 'Feature highlighting Chef T’s immersive multi-course dessert dining experience in Somerville.',
      link: 'https://www.bostonglobe.com/2024/09/12/lifestyle/tables-southern-supper-parlor-porter-square-hotel/',
      type: 'Feature',
    },
    {
      outlet: 'Almond Board of California',
      date: 'June 2024',
      title: 'Masterclass Series: Technique & Texture',
      description: 'Exclusive video masterclass demonstration showcasing advanced macaron emulsion and almond patisserie skills.',
      link: 'https://www.youtube.com/watch?v=peUIktSWZkA',
      type: 'Video Masterclass',
    },
    {
      outlet: 'The Boston Globe',
      date: 'January 2022',
      title: 'Big-Top Kitchen: T Lawrence-Simon Takes Leaps of Faith',
      description: 'In-depth profile covering T’s journey from aerial circus coach to nationally televised dessert finalist and certified chocolatier.',
      link: 'https://www.bostonglobe.com/2022/01/18/lifestyle/big-top-kitchen-t-lawrence-simon-takes-leaps-faith/',
      type: 'Cover Story',
    },
    {
      outlet: 'Boston Globe Magazine',
      date: 'May 2021',
      title: 'VIP Lounge: Circus Performer, TV Baker, His Life is a Juggling Act',
      description: 'A deep look into the dual life of training aerialists while conquering high-pressure pastry competitions.',
      link: 'https://www.bostonglobe.com/2021/05/06/lifestyle/circus-performer-tv-baker-his-life-is-juggling-act/',
      type: 'VIP Profile',
    },
    {
      outlet: 'Reviewed.com',
      date: 'Valentine’s Day',
      title: 'Support Queer-Owned Businesses This Season',
      description: 'National gift guide spotlighting Cirque du Soufflé’s handcrafted seasonal artisan chocolate bonbon drops.',
      link: 'https://www.reviewed.com/lifestyle/features/heres-how-support-queer-owned-shops-valentines-day',
      type: 'Gift Guide',
    },
    {
      outlet: 'Somerville Arts Council',
      date: 'Live Broadcast',
      title: 'Mastering Macarons with Chef T (Facebook LIVE)',
      description: 'Interactive live baking masterclass breaking down the science of the French meringue pied and ganache.',
      link: 'https://www.facebook.com/SomervilleArts/posts/10157574012789585',
      type: 'Live Demo',
    },
    {
      outlet: 'Pastry Arts Magazine',
      date: 'Virtual Summit',
      title: 'Guest Presenter: S’mores Dumpling Showpiece',
      description: 'Selected as a featured presenter at the national summit for innovative pastry chefs and chocolatiers.',
      link: '#',
      type: 'Summit Presentation',
    },
    {
      outlet: 'Boston Spirit Magazine',
      date: 'Culinary Feature',
      title: 'Cirque Du Soufflé by Scott Kearnan',
      description: 'Celebrating Somerville’s most daring culinary venture merging circus theatrics with chocolate precision.',
      link: '#',
      type: 'Magazine Feature',
    },
  ];

  const supporters = [
    'Raphael Benjamin', 'Deirdre Benson', 'Julie Briselden', 'Josh Brody',
    'Samantha Brown', 'Melissa Buffer', 'Lanya Butler', 'Keith Cappello',
    'Zachary Casas', 'Liz Cooper', 'Jennie Crichlow', 'Stephanie Cryor',
    'Andy DeBergalis', 'Eliana Dunlap', 'Fallon Durant', 'Edrie Edrie',
    'Tim Ellis', 'Chelsea Errante', 'Molly Galler', 'Matt Gannon',
    'Nina Gershonowitz', 'Tamar Godel', 'Erica Goodman', 'Philip Gorski',
    'Ari Green', 'Eli & Sheri Gurock', 'Casey Hallen', 'Chris & Lauren Hallenbeck',
    'Ginnie Hopkins', 'Caroline Hu', 'Jennifer Koerber', 'Alexandra Levin',
    'Venessa Liang', 'Stephanie MacLeod', 'Marty McCabe', 'Rachel McKinley',
    'Thomas Nash', 'Eric Nelson', 'Melissa Neubek', 'Richard Nordin',
    'Janelle Peters', 'Michael Rhodes', 'Atara Rich-Shea', 'Emily Ruskowski',
    'Ellie Sabater', 'Jessica Sachs', 'Kathryn Sarken', 'Carolyn Sayre',
    'Sarah Selby', 'Gail Simon', 'Danna Solomon', 'Ron Thibodeau',
    'Emily Vincent', 'Ellen Waylonis', 'Dawn Wendell', 'Molly White',
    'Matthew Willner', 'Laura Witwer'
  ];

  return (
    <section id="bio" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chef Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative w-full">
            <div
              className="relative w-full h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
              style={{ aspectRatio: '4 / 5', minHeight: '380px', maxHeight: '520px', position: 'relative' }}
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1589333141650-CU40Q1KK58TC3WVFXSY0/IMG-20200219-WA0009-square.jpg"
                alt="Chef T Lawrence-Simon (Photo Credit: Jeremy Kohm)"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                  Pastry Chef & Certified Chocolatier
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  T Lawrence-Simon
                </h3>
                <p className="text-xs text-neutral-300 font-medium">Somerville, Massachusetts • Photo: Jeremy Kohm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              <span>Meet the Chef</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              A Symphony of Circus Acrobatics & Confectionery Precision
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-200 font-normal leading-relaxed">
              <p>
                Starting as a passionate home baker, <strong className="text-white font-medium">Chef T Lawrence-Simon</strong> discovered a devotion to classical French Pâtisserie. Scouted for Food Network Canada’s <em>Great Chocolate Showdown</em>, T competed his way into the finals, proving himself as a creative confectionery force.
              </p>
              <p>
                Soon after, T was cast on FOX / Hulu’s <em>Crime Scene Kitchen</em>, once again fighting his way to the finals with forensic dessert recreation praised by celebrity chef judges Curtis Stone and Yolanda Gampp.
              </p>
              <p>
                Following his television achievements, T graduated as a Certified Chocolatier through Ecole Chocolat’s Professional Chocolatier Program. He then completed a rigorous three-month residency in Las Vegas training directly under world-renowned pastry phenomenon <strong>Chef Amaury Guichon</strong> and <strong>Chef Michel Ernots</strong>, followed by elite training at <strong>L’Atelier de Joël Robuchon</strong> in the MGM Grand under Chef Gilbert Pena.
              </p>
              <p>
                Through <em>Cirque du Soufflé</em>, T merges the daring, gravity-defying aesthetics of aerial circus performance with the meticulous balance of fine pastry, creating unforgettable seasonal confections and private multi-course dining spectacles.
              </p>
            </div>
          </div>
        </div>

        {/* Television Headliners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Tv className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">
                FOX / HULU
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Crime Scene Kitchen Finalist
            </h3>
            <p className="text-sm text-neutral-200 font-normal leading-relaxed">
              Decoded forensic culinary clues and recreated masterwork desserts under high pressure, earning praise from celebrity chef judges Curtis Stone and Yolanda Gampp.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">
                Food Network Canada
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Great Chocolate Showdown Finalist
            </h3>
            <p className="text-sm text-neutral-200 font-normal leading-relaxed">
              Showcased mastery in chocolate tempering, sugar sculpture, and complex flavor profiles to battle through the grand finale of this prestigious competition.
            </p>
          </div>
        </div>

        {/* Complete Press & Appearances Archive */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-800 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Media Coverage & Interviews
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Press & Appearances
              </h3>
            </div>
            <span className="text-xs text-neutral-300 font-medium">
              Featured in national and regional publications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pressArticles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target={article.link !== '#' ? '_blank' : undefined}
                rel="noreferrer"
                className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:bg-neutral-900/80"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-300 mb-2 font-medium">
                    <span className="font-bold uppercase tracking-wider text-amber-400">
                      {article.outlet}
                    </span>
                    <span className="text-neutral-300 text-[10px] font-mono">{article.date}</span>
                  </div>

                  <h4 className="font-serif text-sm font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h4>

                  <p className="text-xs text-neutral-200 font-normal leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-200 font-medium group-hover:text-amber-300">
                  <span className="font-medium">{article.type}</span>
                  {article.link !== '#' && (
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Supporter Recognition Wall */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>Community Love</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Supporters of Cirque du Soufflé
          </h3>
          <p className="text-xs sm:text-sm text-neutral-200 max-w-xl mx-auto mb-8 font-normal">
            With eternal gratitude to the patrons, kickstarters, and friends who helped elevate the dream of combining the circus ring with culinary artistry:
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {supporters.map((name, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-neutral-950/70 border border-neutral-800 text-neutral-200 font-normal hover:text-amber-400 hover:border-amber-500/30 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
