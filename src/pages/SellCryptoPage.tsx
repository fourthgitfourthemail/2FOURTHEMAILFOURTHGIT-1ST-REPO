import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Upload, DollarSign, ArrowRight } from 'lucide-react';

export default function SellCryptoPage() {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [payoutMethod, setPayoutMethod] = useState('paypal');

  const cryptoOptions = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250, balance: '0.05432' },
    { symbol: 'ETH', name: 'Ethereum', price: 2580, balance: '1.2345' },
    { symbol: 'USDT', name: 'Tether', price: 1.00, balance: '500.00' },
    { symbol: 'BNB', name: 'Binance Coin', price: 315, balance: '2.1' },
  ];

  const selectedCoin = cryptoOptions.find(c => c.symbol === selectedCrypto);
  const usdValue = parseFloat(amount || '0') * (selectedCoin?.price || 0);
  const fee = usdValue * 0.05; // 5% fee
  const netAmount = usdValue - fee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sell Cryptocurrency
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Convert your crypto to cash with competitive rates
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Sell Order
            </h2>

            {/* Crypto Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Cryptocurrency to Sell
              </label>
              <div className="grid grid-cols-2 gap-3">
                {cryptoOptions.map((crypto) => (
                  <button
                    key={crypto.symbol}
                    onClick={() => setSelectedCrypto(crypto.symbol)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedCrypto === crypto.symbol
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {crypto.symbol}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Balance: {crypto.balance}
                    </div>
                    <div className="text-sm text-green-600">
                      ${crypto.price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount to Sell ({selectedCrypto})
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                max={selectedCoin?.balance}
                step="0.00000001"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder={`Max: ${selectedCoin?.balance || '0'}`}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Available: {selectedCoin?.balance || '0'} {selectedCrypto}
              </p>
            </div>

            {/* Payout Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Payout Method
              </label>
              <div className="space-y-3">
                {[
                  { id: 'paypal', name: 'PayPal', desc: 'Available on request' },
                  { id: 'cashapp', name: 'CashApp', desc: 'Available on request' },
                  { id: 'wire', name: 'Wire Transfer', desc: '1-3 business days' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPayoutMethod(method.id)}
                    className={`w-full p-4 rounded-xl border-2 flex items-center transition-all ${
                      payoutMethod === method.id
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                    }`}
                  >
                    <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {method.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {method.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sale Summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Sell Amount</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {amount || '0'} {selectedCrypto}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Market Value</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${usdValue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Fee (5%)</span>
                <span className="font-semibold text-red-600">
                  -${fee.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">You'll Receive</span>
                  <span className="font-bold text-xl text-green-600">
                    ${netAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Sell Button */}
            <button
              disabled={!amount || parseFloat(amount) <= 0}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              Sell {selectedCrypto}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              How to Sell
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-2 mr-4">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Select Cryptocurrency
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Choose which crypto you want to sell from your portfolio
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-2 mr-4">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Enter Amount
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Specify how much crypto you want to sell
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-2 mr-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Choose Payout Method
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Select how you want to receive your funds
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-2 mr-4">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Confirm Sale
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Review details and confirm your sell order
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Notice
              </h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                All sell orders are processed within 24 hours. You'll receive an email confirmation once your payout is initiated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}