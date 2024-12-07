import axios from 'axios';

// pages/api/process-payment.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const paymentDetails = req.body;
        try {
            const response = await fetch('http://localhost:8080/api/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(paymentDetails),
            });
            const data = await response.json();
            res.status(200).json({ message: data.message });
        } catch (error) {
            res.status(500).json({ message: 'Payment failed. Try again.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
