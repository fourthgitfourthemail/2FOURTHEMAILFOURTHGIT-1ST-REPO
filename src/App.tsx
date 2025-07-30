import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import BuyCryptoPage from './pages/BuyCryptoPage';
import SellCryptoPage from './pages/SellCryptoPage';
import ConvertPage from './pages/ConvertPage';
import DepositPage from './pages/DepositPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import HelpPage from './pages/HelpPage';

function App() {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            
            <Navbar onNavigate={() => setShowSplash(true)} />
            
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/buy" element={<BuyCryptoPage />} />
                <Route path="/sell" element={<SellCryptoPage />} />
                <Route path="/convert" element={<ConvertPage />} />
                <Route path="/deposit" element={<DepositPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/help" element={<HelpPage />} />
              </Routes>
            </main>
            
            <Footer />
            <Chatbot />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;