import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) => {
    try {
        const { tokenId, amount } = req.body;

        if (!tokenId || amount <= 0) {
            return res.status(400).json({ error: 'Invalid token or amount' });
        }

        const charge = await stripe.charges.create({
            source: tokenId,
            amount: Math.round(amount),
            currency: 'usd',
        });

        res.status(200).json(charge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
