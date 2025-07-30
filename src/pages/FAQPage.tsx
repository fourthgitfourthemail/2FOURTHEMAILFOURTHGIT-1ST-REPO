import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'account', name: 'Account & KYC' },
    { id: 'trading', name: 'Trading' },
    { id: 'deposits', name: 'Deposits & Withdrawals' },
    { id: 'security', name: 'Security' },
    { id: 'fees', name: 'Fees & Limits' }
  ];

  const faqs = [
    {
      category: 'account',
      question: 'How do I create an account on BIANOTRADES?',
      answer: 'Creating an account is simple! Click the "Register" button, provide your email address, create a secure password, and verify your email. You can also sign up using your Google account for faster registration.'
    },
    {
      category: 'account',
      question: 'What is KYC verification and why is it required?',
      answer: 'KYC (Know Your Customer) is a verification process required by law to prevent fraud and money laundering. You\'ll need to provide a government-issued ID and take a selfie. This helps us keep the platform secure for everyone.'
    },
    {
      category: 'account',
      question: 'What are the different KYC tiers?',
      answer: 'We have two KYC tiers: Tier 1 allows trading up to $20,000 with basic verification, while Tier 2 offers unlimited trading with enhanced verification including proof of address.'
    },
    {
      category: 'trading',
      question: 'What cryptocurrencies can I trade?',
      answer: 'We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Binance Coin (BNB), Cardano (ADA), Solana (SOL), and many more. Our list is constantly expanding.'
    },
    {
      category: 'trading',
      question: 'What is the minimum amount I can buy?',
      answer: 'The minimum purchase amount is $500 for all cryptocurrencies. This helps ensure cost-effective transactions while maintaining platform security.'
    },
    {
      category: 'trading',
      question: 'How do I sell my cryptocurrency?',
      answer: 'Go to the "Sell" page, select the cryptocurrency you want to sell, enter the amount, choose your payout method (PayPal, CashApp, or wire transfer), and confirm the transaction.'
    },
    {
      category: 'deposits',
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards (Visa, Mastercard), bank transfers, wire transfers, and cryptocurrency deposits. PayPal and CashApp are available upon request.'
    },
    {
      category: 'deposits',
      question: 'How long do deposits take to process?',
      answer: 'Card payments are instant, bank transfers take 1-3 business days, and cryptocurrency deposits are confirmed after 3 network confirmations (usually 10-60 minutes).'
    },
    {
      category: 'deposits',
      question: 'Is there a minimum deposit amount?',
      answer: 'Yes, the minimum deposit is $50 for card payments and cryptocurrency deposits, and $100 for bank transfers.'
    },
    {
      category: 'security',
      question: 'How secure is my money on BIANOTRADES?',
      answer: 'We use bank-level security including 256-bit SSL encryption, cold storage for cryptocurrencies, two-factor authentication, and regular security audits. Your funds are protected by industry-leading security measures.'
    },
    {
      category: 'security',
      question: 'Do you offer two-factor authentication?',
      answer: 'Yes, we strongly recommend enabling 2FA for additional account security. You can use Google Authenticator, Authy, or SMS-based authentication.'
    },
    {
      category: 'fees',
      question: 'What are your trading fees?',
      answer: 'We charge a 5% fee for buying and selling cryptocurrencies, and a 1% fee for crypto-to-crypto conversions. These fees are automatically calculated and displayed before you confirm any transaction.'
    },
    {
      category: 'fees',
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in complete transparency. All fees are clearly displayed before you complete any transaction. There are no hidden charges or surprise fees.'
    },
    {
      category: 'deposits',
      question: 'Can I send cryptocurrency to friends?',
      answer: 'Yes! Our "Send to Friends" feature allows you to send cryptocurrency to other BIANOTRADES users instantly. You\'ll need a verified account and sufficient balance.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a secure link to reset your password. Make sure to check your spam folder if you don\'t see the email.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find quick answers to common questions about BIANOTRADES
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No FAQs found matching your search criteria.
            </p>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 opacity-90">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}