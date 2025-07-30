import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText,
  Users,
  Shield,
  TrendingUp,
  CreditCard,
  Wallet,
  Settings
} from 'lucide-react';

export default function HelpPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of crypto trading',
      articles: [
        'How to create your first account',
        'Understanding cryptocurrency basics',
        'Your first crypto purchase',
        'Setting up security features'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Trading Guide',
      description: 'Master crypto trading strategies',
      articles: [
        'How to buy cryptocurrency',
        'Selling your crypto assets',
        'Converting between cryptocurrencies',
        'Reading market charts'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payments & Deposits',
      description: 'Fund your account securely',
      articles: [
        'Deposit methods explained',
        'Credit card payments',
        'Bank transfer guide',
        'Cryptocurrency deposits'
      ]
    },
    {
      icon: Shield,
      title: 'Security & KYC',
      description: 'Keep your account safe',
      articles: [
        'KYC verification process',
        'Two-factor authentication',
        'Account security best practices',
        'Understanding KYC tiers'
      ]
    },
    {
      icon: Wallet,
      title: 'Wallet Management',
      description: 'Manage your crypto portfolio',
      articles: [
        'Understanding your wallet',
        'Sending crypto to friends',
        'Transaction history',
        'Portfolio tracking'
      ]
    },
    {
      icon: Settings,
      title: 'Account Settings',
      description: 'Customize your experience',
      articles: [
        'Profile management',
        'Notification preferences',
        'Password and PIN setup',
        'Account verification'
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat',
      color: 'bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'bg-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      color: 'bg-purple-600'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other traders',
      availability: 'Always active',
      action: 'Join Forum',
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about using BIANOTRADES
          </p>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Help Categories */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse Help Topics
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find detailed guides and tutorials for every aspect of crypto trading
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                      • {article}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center"
          >
            <Video className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
            <p className="text-xl opacity-90 mb-8">
              Watch step-by-step video guides to master crypto trading
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Getting Started with BIANOTRADES',
                'How to Buy Your First Bitcoin',
                'Advanced Trading Strategies'
              ].map((video, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="aspect-video bg-white/20 rounded-lg mb-3 flex items-center justify-center">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">{video}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Support Options */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need Personal Help?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our support team is ready to assist you with any questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {option.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {option.availability}
                </p>
                <button className={`w-full ${option.color} text-white py-2 rounded-lg hover:opacity-90 transition-opacity`}>
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12"
          >
            <div className="text-center mb-8">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Popular Help Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Most frequently accessed help topics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'How to verify your account (KYC)',
                'Understanding trading fees and limits',
                'How to enable two-factor authentication',
                'Depositing funds with a credit card',
                'How to send cryptocurrency to friends',
                'Troubleshooting login issues',
                'Understanding market orders vs limit orders',
                'How to read cryptocurrency charts'
              ].map((article, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-white">{article}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}