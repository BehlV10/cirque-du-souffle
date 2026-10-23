import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    const { items, successUrl, cancelUrl } = await req.json();

    if (!items || !items.length) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;

    // If Stripe secret key is configured, create a real Stripe Checkout Session
    if (stripeKey && stripeKey !== 'sk_test_placeholder') {
      const stripe = new Stripe(stripeKey, {
        apiVersion: '2025-02-24.acacia' as any,
      });

      const lineItems = items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.product.name}${item.selectedSize ? ` - Size: ${item.selectedSize}` : ''}${
              item.selectedColor ? ` / Color: ${item.selectedColor}` : ''
            }`,
            description: item.product.description,
            images: item.product.image ? [item.product.image] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

      // Calculate shipping if applicable
      const subtotal = items.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
      const shippingAmount = subtotal >= 60 ? 0 : 795; // $7.95

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: shippingAmount,
                currency: 'usd',
              },
              display_name: shippingAmount === 0 ? 'Free Standard Shipping' : 'Standard Shipping',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 3 },
                maximum: { unit: 'business_day', value: 5 },
              },
            },
          },
        ],
        success_url: `${successUrl || 'http://localhost:3000'}/order-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl || 'http://localhost:3000',
      });

      return NextResponse.json({ url: session.url, mode: 'stripe' });
    }

    // Fallback Demo Mode (when STRIPE_SECRET_KEY is not yet added in .env)
    return NextResponse.json({
      demo: true,
      message: 'Demo mode active. Add STRIPE_SECRET_KEY in .env.local to activate real Stripe processing.',
      items,
    });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
