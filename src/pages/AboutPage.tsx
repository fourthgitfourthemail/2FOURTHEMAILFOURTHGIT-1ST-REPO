import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Award, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About BIANOTRADES
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing cryptocurrency trading with a platform that combines 
              cutting-edge technology, unmatched security, and user-friendly design to make 
              crypto accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize access to cryptocurrency trading by providing a secure, 
                  intuitive, and comprehensive platform that empowers both beginners and 
                  experienced traders to participate in the digital economy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We believe that everyone should have the opportunity to benefit from 
                  the revolutionary potential of blockchain technology and digital assets.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Founded in 2024</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <span>50,000+ Active Users</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 mr-3" />
                    <span>Available in 100+ Countries</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    <span>$500M+ Trading Volume</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose BIANOTRADES?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're committed to providing the best trading experience possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your funds and data are protected with military-grade encryption, cold storage, and multi-factor authentication.',
                color: 'text-green-600'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Execute trades in milliseconds with our high-performance trading engine and real-time market data.',
                color: 'text-yellow-600'
              },
              {
                icon: Users,
                title: 'Beginner Friendly',
                description: 'Intuitive interface, educational resources, and 24/7 support make crypto trading accessible to everyone.',
                color: 'text-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Advanced Tools',
                description: 'Professional trading tools, charts, and analytics for experienced traders and institutions.',
                color: 'text-purple-600'
              },
              {
                icon: Globe,
                title: 'Global Access',
                description: 'Trade from anywhere in the world with support for multiple currencies and payment methods.',
                color: 'text-indigo-600'
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized by industry leaders for innovation, security, and customer satisfaction.',
                color: 'text-red-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bilal Munir',
                role: 'Founder & CEO',
                bio: 'Visionary leader with 10+ years in fintech and blockchain technology.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Sarah Johnson',
                role: 'CTO',
                bio: 'Former Google engineer specializing in distributed systems and security.',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Trading',
                bio: 'Ex-Goldman Sachs trader with expertise in algorithmic trading systems.',
                image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl opacity-90 mb-12">
              The principles that guide everything we do
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Transparency', desc: 'Open and honest in all our dealings' },
                { title: 'Security', desc: 'Your safety is our top priority' },
                { title: 'Innovation', desc: 'Constantly improving and evolving' },
                { title: 'Support', desc: 'Always here when you need us' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="opacity-90">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}