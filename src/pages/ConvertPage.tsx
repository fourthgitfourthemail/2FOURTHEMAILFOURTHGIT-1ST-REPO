import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight, TrendingUp } from 'lucide-react';

export default function ConvertPage() {
  const [fromCrypto, setFromCrypto] = useState('USDT');
  const [toCrypto, setToCrypto] = useState('BTC');
  const [amount, setAmount] = useState('');

  const cryptoOptions = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250, balance: '0.05432' },
    { symbol: 'ETH', name: 'Ethereum', price: 2580, balance: '1.2345' },
    { symbol: 'USDT', name: 'Tether', price: 1.00, balance: '500.00' },
    { symbol: 'BNB', name: 'Binance Coin', price: 315, balance: '2.1' },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, balance: '1000' },
    { symbol: 'SOL', name: 'Solana', price: 98.5, balance: '5.5' },
  ];

  const fromCoin = cryptoOptions.find(c => c.symbol === fromCrypto);
  const toCoin = cryptoOptions.find(c => c.symbol === toCrypto);
  
  const fromValue = parseFloat(amount || '0') * (fromCoin?.price || 0);
  const fee = fromValue * 0.01; // 1% fee
  const netValue = fromValue - fee;
  const toAmount = netValue / (toCoin?.price || 1);

  const swapCryptos = () => {
    setFromCrypto(toCrypto);
    setToCrypto(fromCrypto);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Convert Cryptocurrency
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Swap between different cryptocurrencies with low fees
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Crypto Converter
            </h2>

            {/* From Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                From
              </label>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <select
                    value={fromCrypto}
                    onChange={(e) => setFromCrypto(e.target.value)}
                    className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
                  >
                    {cryptoOptions.map((crypto) => (
                      <option key={crypto.symbol} value={crypto.symbol}>
                        {crypto.symbol} - {crypto.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Balance</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {fromCoin?.balance} {fromCrypto}
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  max={fromCoin?.balance}
                  step="0.00000001"
                  className="w-full bg-transparent text-2xl font-bold text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                  placeholder="0.00"
                />
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ≈ ${fromValue.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={swapCryptos}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
              >
                <RefreshCw className="w-6 h-6" />
              </button>
            </div>

            {/* To Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                To
              </label>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <select
                    value={toCrypto}
                    onChange={(e) => setToCrypto(e.target.value)}
                    className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
                  >
                    {cryptoOptions.filter(c => c.symbol !== fromCrypto).map((crypto) => (
                      <option key={crypto.symbol} value={crypto.symbol}>
                        {crypto.symbol} - {crypto.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Balance</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {toCoin?.balance} {toCrypto}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {toAmount.toFixed(8)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ≈ ${netValue.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Conversion Details */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Exchange Rate</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  1 {fromCrypto} = {((toCoin?.price || 1) / (fromCoin?.price || 1)).toFixed(8)} {toCrypto}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300">Fee (1%)</span>
                <span className="font-semibold text-purple-600">
                  ${fee.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-purple-200 dark:border-purple-700 pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">You'll Receive</span>
                  <span className="font-bold text-lg text-purple-600">
                    {toAmount.toFixed(8)} {toCrypto}
                  </span>
                </div>
              </div>
            </div>

            {/* Convert Button */}
            <button
              disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > parseFloat(fromCoin?.balance || '0')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              Convert {fromCrypto} to {toCrypto}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    Low Conversion Fees
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Only 1% fee for all crypto-to-crypto conversions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}