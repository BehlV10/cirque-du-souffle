export interface ProductVariant {
  size?: string;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'merch' | 'apparel' | 'accessories';
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
    id: 'hoop-tank',
    name: 'Cirque Hoop Aerialist Tank',
    category: 'apparel',
    price: 26,
    badge: 'Bestseller',
    description: 'Whimsical portrait illustration by Caroline Hu (@hudrewthis). Soft, breathable cut perfect for movement, kitchen shifts, or aerial training.',
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
      'Artwork by Caroline Hu (@hudrewthis)',
      '100% Airlume combed and ring-spun cotton / TriBlend',
      'Extra light fabric (3.8 oz/yd² (110 g/m²))',
      'Unisex retail fit, runs true to size'
    ],
  },
  {
    id: 'hoop-t',
    name: 'Aerial Lyra Graphic Tee',
    category: 'apparel',
    price: 28,
    description: 'Features the whimsical portrait by Caroline Hu (@hudrewthis) in a premium crewneck silhouette.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686578230755-O2WB7VIC16Z0YWWUOC11/43819b3828295d7494860188d7931234?format=800w',
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        { name: 'Charcoal', hex: '#27272a' },
        { name: 'Vintage Black', hex: '#111827' },
        { name: 'Berry', hex: '#831843' },
      ],
    },
    details: [
      'Artwork by Caroline Hu (@hudrewthis)',
      '100% Airlume combed and ringspun cotton',
      'Light fabric (4.2 oz/yd² (142 g/m²))',
      'Tear away label, runs true to size (unisex)'
    ],
  },
  {
    id: 'arabesque-t',
    name: 'Arabesque Whisk Tee',
    category: 'apparel',
    price: 28,
    badge: 'Popular',
    description: 'Gorgeous custom illustration by Jun (@perc19) depicting the ballerina acrobat arabesque posed gracefully atop a balloon whisk.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686884482331-6Z14G9O1TW7RQRUX2L9O/9b65b5f53ee3725021c970b8a9069d56?format=800w',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686884482363-WGKB4GSHMHBQPRQ7OG8N/70ce534821411a089cebf28af4372887?format=800w',
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        { name: 'White', hex: '#f8fafc' },
        { name: 'Heather Grey', hex: '#94a3b8' },
      ],
    },
    details: [
      'Illustration by Jun (@perc19)',
      '100% Airlume combed and ringspun cotton',
      'Light fabric (4.2 oz/yd² (142 g/m²))',
      'Retail fit, runs true to size'
    ],
  },
  {
    id: 'kitchen-towel',
    name: 'Cirque du Soufflé "T-Towel"',
    category: 'accessories',
    price: 20,
    badge: 'Kitchen Essential',
    description: 'Official tea towels from Cirque du Soufflé. Helpful for baking, bread proofing, dish drying, and cleaning up messes in style.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686884403932-IC479046UPSQWYYKQR5U/5f874a5236c12adcf6ca3ef7a4e7c30f?format=800w',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686884407363-2TU9UELF72INVG9LTLIE/a3ac90d9893abc5d5c947f2d7d11e8ee?format=800w',
    details: [
      '100% Cotton Twill',
      'One size: 18" × 30" (45.72cm × 76.2cm)',
      'One-sided Cirque logo print',
      'Lightweight and absorbent'
    ],
  },
  {
    id: 't-tote',
    name: 'The Soufflé "T-Tote"',
    category: 'accessories',
    price: 20,
    description: 'Durable 100% cotton canvas tote bag featuring the original acrobat & pastry illustration by Jun (@perc19).',
    image: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686577781255-EIJEPE794C7RQU8R6PSH/5d5cacef5bee4fc8042923951b77ffcb?format=800w',
    hoverImage: 'https://images.squarespace-cdn.com/content/v1/5e0962d434a3db0ec475f876/1686577786540-EKUJ65UF4HTU2SDO8QV6/bcd69767106c442127ca27aa5cf4c4ba?format=800w',
    details: [
      'Illustration by Jun (@perc19)',
      '100% Cotton Canvas',
      'Heavy fabric: 12 oz/yd² (406.9 g/m²)',
      'Dimensions: 15" x 16" with 20" reinforced canvas handles',
      'Sewn-in label, built to last for years'
    ],
  },
];
