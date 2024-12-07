'use client';
import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './checkoutPage.module.scss';

const cx = classNames.bind(styles);

function CheckoutPage() {
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        holderName: '',
    });

    const handleChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/process-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paymentDetails),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Payment Page</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            name="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                            name="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                            name="cvv"
                            type="text"
                            placeholder="123"
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                        <input
                            name="holderName"
                            type="text"
                            placeholder="John Doe"
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutPage;
