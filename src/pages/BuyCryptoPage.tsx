import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51234567890');

const cryptoOptions = [
  { symbol: 'BTC', name: 'Bitcoin', price: 43250, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 2580, icon: 'Ξ' },
  { symbol: 'USDT', name: 'Tether', price: 1.00, icon: '₮' },
  { symbol: 'BNB', name: 'Binance Coin', price: 315, icon: 'BNB' },
  { symbol: 'ADA', name: 'Cardano', price: 0.52, icon: 'ADA' },
  { symbol: 'SOL', name: 'Solana', price: 98.5, icon: 'SOL' },
];

export default function BuyCryptoPage() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [amount, setAmount] = useState('500');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);

  const calculateTotal = () => {
    const baseAmount = parseFloat(amount) || 0;
    const fee = baseAmount * 0.05; // 5% fee
    return baseAmount + fee;
  };

  const handleStripePayment = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(calculateTotal() * 100), // Convert to cents
          currency: 'usd',
          crypto: selectedCrypto.symbol,
          quantity: (parseFloat(amount) / selectedCrypto.price).toFixed(8),
        }),
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // This would be replaced with Stripe Elements in production
          },
        },
      });

      if (result.error) {
        console.error('Payment failed:', result.error);
      } else {
        console.log('Payment succeeded:', result.paymentIntent);
        // Handle successful payment
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Buy Cryptocurrency
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Purchase crypto with your credit card, debit card, or bank transfer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Purchase Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Purchase Details
            </h2>

            {/* Crypto Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Cryptocurrency
              </label>
              <div className="grid grid-cols-2 gap-3">
                {cryptoOptions.map((crypto) => (
                  <button
                    key={crypto.symbol}
                    onClick={() => setSelectedCrypto(crypto)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedCrypto.symbol === crypto.symbol
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{crypto.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {crypto.symbol}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ${crypto.price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="500"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Minimum $500"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Minimum purchase: $500
              </p>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Payment Method
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-xl border-2 flex items-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                  }`}
                >
                  <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Credit/Debit Card
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Instant purchase with Visa, Mastercard
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('bank')}
                  className={`w-full p-4 rounded-xl border-2 flex items-center transition-all ${
                    paymentMethod === 'bank'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                  }`}
                >
                  <Wallet className="w-6 h-6 mr-3 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Bank Transfer
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Lower fees, 1-3 business days
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Purchase Summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Amount</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${parseFloat(amount || '0').toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Fee (5%)</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${((parseFloat(amount || '0') * 0.05)).toLocaleString()}
                </span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                  <span className="font-bold text-xl text-blue-600">
                    ${calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                You'll receive: {((parseFloat(amount || '0')) / selectedCrypto.price).toFixed(8)} {selectedCrypto.symbol}
              </div>
            </div>

            {/* Purchase Button */}
            <button
              onClick={handleStripePayment}
              disabled={loading || parseFloat(amount) < 500}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Buy {selectedCrypto.symbol}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </motion.div>

          {/* Security & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose BIANOTRADES?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Bank-Level Security
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Your funds and data are protected with industry-leading security measures
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Instant Processing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Credit card purchases are processed instantly to your wallet
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Competitive Rates
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Low fees and real-time market prices for the best value
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                New to Crypto?
              </h3>
              <p className="mb-4 opacity-90">
                Start your crypto journey with confidence. Our platform is designed for beginners with easy-to-use tools and 24/7 support.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}