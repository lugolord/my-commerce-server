const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const app = express();
const BASE_URL = 'https://my-commerce-front-psi.vercel.app/';

app.use(express.static('public'));

app.use(cors({
  origin: BASE_URL,
  credentials: true
}))

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cart } = req.body;

  const lineItems = cart.map(product => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.title,
        images: [product.thumbnail]
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${BASE_URL}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${BASE_URL}/cart`,
  });

  res.json({ url: session.url });
});

app.listen(4242, () => console.log('Running on port 4242'));