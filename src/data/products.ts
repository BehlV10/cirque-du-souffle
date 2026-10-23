export interface ProductVariant {
  size?: string;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'merch' | 'confections' | 'experiences';
  price: number;
  description: string;
  badge?: string;
  image: string;
  hoverImage?: string;
  variants?: {
    sizes?: string[];
    colors?: { name: string; hex: string }[];
  };
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'artisan-bonbons-9',
    name: 'Artisanal Bonbon Collection (Box of 9)',
    category: 'confections',
    price: 38,
    badge: 'Signature Drop',
    description: 'Hand-cast, glossy jewel-finish cocoa shells hand-painted with colored cocoa butter. Filled with dual-layer ganaches and pralinés crafted from single-origin Valrhona and French fruit purees.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197254752-ELJGQHXE3QJVW10IWNYL/20230530104417_IMG_1271-01.jpeg',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196904750-XHZEMNAVELXN1I94YD4N/POUR+SHOT+less+bright+background.jpg',
    details: [
      '3x Smoked Tahitian Vanilla Ganache & Salted Caramel',
      '3x Passionfruit Reduction & Gianduja Praline',
      '3x Dark Raspberry Ganache with Gold Leaf',
      'Handcrafted by Certified Chocolatier Chef T',
      'Ships in insulated luxury gold-foil presentation box'
    ],
  },
  {
    id: 'macaron-patisserie-box',
    name: 'Masterclass Macaron Collection (12 pcs)',
    category: 'confections',
    price: 42,
    badge: 'Limited Run',
    description: 'Feather-light French almond meringue shells with precision pied, inspired by Chef T’s training under Chef Amaury Guichon. Balanced with rich emulsions and house fruit reductions.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1614643673778-QUUUTOK957SKI384MWQC/MacaronTitle2.jpeg',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686197330861-WVK5DMKFPQ4JSBFLITW3/LemonMeringueTart.jpeg',
    details: [
      'Pistachio Sicilian Crunch',
      'Yuzu White Chocolate Buttercream',
      'Dark Chocolate Espresso Truffle',
      'Lavender Honey Ganache',
      'Gluten-free almond flour base'
    ],
  },
  {
    id: 'hoop-tank',
    name: 'Cirque Hoop Aerialist Tank',
    category: 'merch',
    price: 26,
    badge: 'Bestseller',
    description: 'The official Cirque du Soufflé aerialist tank top. Soft, breathable tri-blend cut for movement, kitchen shifts, or aerial lyra training sessions.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686578170311-NK3EQICWPDJEN3JYEGQB/387760c238d41fe59e79404c988ae7b6?format=800w',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686578230644-JLJV0KUWPM6T97QCWGZP/67f36261420b811cb43b72709de6b483?format=800w',
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        { name: 'Black', hex: '#18181b' },
        { name: 'Aqua TriBlend', hex: '#0ea5e9' },
        { name: 'Navy', hex: '#1e3a8a' },
      ],
    },
    details: [
      '50% Polyester, 25% Combed Ringspun Cotton, 25% Rayon',
      'Raw edge seams and flattering racerback drape',
      'Screen printed with eco-friendly metallic shimmer inks',
      'Pre-shrunk for consistent fit'
    ],
  },
  {
    id: 'hoop-tee',
    name: 'Aerial Lyra Graphic Tee',
    category: 'merch',
    price: 26,
    description: 'Ultra-soft retail fit crewneck showcasing the intersection of aerial performance and confectionery balance.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686578230755-O2WB7VIC16Z0YWWUOC11/43819b3828295d7494860188d7931234?format=800w',
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        { name: 'Charcoal', hex: '#27272a' },
        { name: 'Vintage Black', hex: '#111827' },
      ],
    },
    details: [
      '100% Airlume combed and ring-spun cotton',
      'Tailored unisex silhouette with ribbed collar',
      'Durable double-needle stitched sleeves and hem'
    ],
  },
  {
    id: 'arabesque-t',
    name: 'Arabesque Whisk Tee',
    category: 'merch',
    price: 26,
    description: 'Custom illustration depicting the ballerina acrobat arabesque posed gracefully atop a balloon whisk.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'White', hex: '#f8fafc' },
        { name: 'Heather Grey', hex: '#94a3b8' },
      ],
    },
    details: [
      'Featherweight breathable combed cotton',
      'Water-based soft feel screenprint',
      'Tagless interior label for comfort'
    ],
  },
  {
    id: 'linen-kitchen-towel',
    name: 'Cirque Linen Kitchen Towel',
    category: 'merch',
    price: 18,
    description: 'Professional French bistro-grade culinary towel. High-absorbency herringbone weave finished with gold Cirque du Soufflé crest.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    details: [
      '100% Pure Unbleached French Flax Linen & Cotton',
      'Lint-free for glass polishing and pastry handling',
      'Hanging corner loop with reinforced bar-tack stitching'
    ],
  },
  {
    id: 't-tote',
    name: 'The Soufflé Heavy Canvas Tote',
    category: 'merch',
    price: 22,
    description: 'Generously sized heavyweight 12oz cotton canvas bag designed for bakery runs, farmers markets, and daily rehearsals.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    details: [
      'Heavyweight 12 oz. 100% Cotton Canvas',
      'Reinforced box-stitched webbing handles',
      'Gusseted bottom for extra capacity (18"W x 15"H x 4"D)'
    ],
  },
  {
    id: 'tasting-menu-experience',
    name: '5-Course Dessert Tasting Menu Reservation (Deposit)',
    category: 'experiences',
    price: 75,
    badge: 'Chef Experience',
    description: 'Reserve your seat for Chef T’s theatrical multi-course dessert dining experience in Somerville, MA. Full sensory exploration merging culinary theatrics and boundary-pushing patisserie.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686196904750-XHZEMNAVELXN1I94YD4N/POUR+SHOT+less+bright+background.jpg',
    details: [
      'Includes 5 progressive dessert courses & palate cleansers',
      'Optional beverage & champagne pairing available at seat',
      'Intimate private seating capped at 12 guests per evening',
      'Dietary restrictions accommodated with 72h advance notice'
    ],
  },
];
