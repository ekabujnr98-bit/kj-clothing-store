import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-08-01' })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { items, successUrl, cancelUrl } = req.body
  const line_items = items.map((it: any) => ({
    price_data: {
      currency: 'usd',
      product_data: { name: it.name },
      unit_amount: Math.round(it.unit_price * 100)
    },
    quantity: it.quantity
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl
    })
    res.status(200).json({ url: session.url })
  } catch (err: any) {
    console.error('stripe error', err)
    res.status(500).json({ error: err.message })
  }
}
