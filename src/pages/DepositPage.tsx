import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, QrCode, CreditCard, Building, Smartphone } from 'lucide-react';

export default function DepositPage() {
  const [selectedMethod, setSelectedMethod] = useState('crypto');
  const [copiedAddress, setCopiedAddress] = useState('');

  const bankAccounts = [
    {
      name: 'Bilal Munirudeen',
      bank: 'Moniepoint MFB',
      number: '8039790297',
      type: 'Savings'
    },
    {
      name: 'Bilal Munirudeen',
      bank: 'Chipper Cash',
      number: '2348039790297',
      type: 'Wallet'
    },
    {
      name: 'BIANOTRADES Ltd',
      bank: 'First Bank Nigeria',
      number: '3045678901',
      type: 'Current'
    },
    {
      name: 'BIANOTRADES Ltd',
      bank: 'GTBank',
      number: '0123456789',
      type: 'Current'
    }
  ];

  const cryptoWallets = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      network: 'Bitcoin Network'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      address: '0x742d35Cc6634C0532925a3b8D4C9db96590b5c8e',
      network: 'ERC-20'
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      address: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK',
      network: 'TRC-20'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      address: 'bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2',
      network: 'BSC'
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(type);
    setTimeout(() => setCopiedAddress(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Deposit Funds
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Add money to your BIANOTRADES account using multiple payment methods
          </p>
        </motion.div>

        {/* Payment Method Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
            <div className="flex space-x-2">
              {[
                { id: 'crypto', label: 'Cryptocurrency', icon: QrCode },
                { id: 'bank', label: 'Bank Transfer', icon: Building },
                { id: 'card', label: 'Card Payment', icon: CreditCard },
                { id: 'mobile', label: 'Mobile Money', icon: Smartphone }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedMethod(id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedMethod === id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Crypto Deposits */}
        {selectedMethod === 'crypto' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {cryptoWallets.map((wallet) => (
              <div key={wallet.symbol} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {wallet.symbol}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {wallet.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">{wallet.network}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Wallet Address
                  </label>
                  <div className="flex items-center">
                    <code className="flex-1 text-sm bg-white dark:bg-gray-800 p-2 rounded border font-mono break-all">
                      {wallet.address}
                    </code>
                    <button
                      onClick={() => copyToClipboard(wallet.address, wallet.symbol)}
                      className="ml-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copiedAddress === wallet.symbol && (
                    <p className="text-green-600 text-sm mt-1">Address copied!</p>
                  )}
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Important Notice
                  </h4>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                    <li>• Only send {wallet.symbol} to this address</li>
                    <li>• Minimum deposit: $50 equivalent</li>
                    <li>• Funds will appear after 3 confirmations</li>
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Bank Transfer */}
        {selectedMethod === 'bank' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {bankAccounts.map((account, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {account.bank}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">{account.type} Account</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Account Name
                    </label>
                    <p className="font-semibold text-gray-900 dark:text-white">{account.name}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Account Number
                    </label>
                    <div className="flex items-center">
                      <p className="font-mono text-lg font-semibold text-gray-900 dark:text-white flex-1">
                        {account.number}
                      </p>
                      <button
                        onClick={() => copyToClipboard(account.number, `bank-${index}`)}
                        className="ml-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    {copiedAddress === `bank-${index}` && (
                      <p className="text-green-600 text-sm mt-1">Account number copied!</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Transfer Instructions
                  </h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Use your registered email as reference</li>
                    <li>• Minimum deposit: ₦10,000</li>
                    <li>• Funds reflect within 30 minutes</li>
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Card Payment */}
        {selectedMethod === 'card' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Credit/Debit Card Deposit
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Instant deposits with Visa, Mastercard, and other major cards
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deposit Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="50"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Minimum $50"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                  Proceed to Payment
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Instant</h4>
                  <p className="text-green-600 dark:text-green-300 text-sm">Funds available immediately</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">Secure</h4>
                  <p className="text-blue-600 dark:text-blue-300 text-sm">256-bit SSL encryption</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Money */}
        {selectedMethod === 'mobile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
              <Smartphone className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Mobile Money Deposits
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['PayPal', 'CashApp', 'Zelle', 'Venmo'].map((service) => (
                  <div key={service} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service}</h4>
                    <p className="text-orange-600 font-medium">Available on Request</p>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  How to Request Access
                </h4>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  Contact our support team to enable mobile money deposits for your account
                </p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}