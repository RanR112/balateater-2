import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete()
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  return (
    <motion.div 
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="splash-content">
        <motion.div 
          className="splash-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 2,
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        >
          <span className="logo-text">BALA</span>
          <span className="logo-text accent">TEATER</span>
        </motion.div>
        
        <div className="progress-container">
          <div className="progress-bar-container">
            <motion.div 
              className="progress-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="progress-text">{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

// Add this to your main App.jsx:
// const [loading, setLoading] = useState(true);
// {loading ? (
//   <SplashScreen onComplete={() => setLoading(false)} />
// ) : (
//   <main>Your actual website content</main>
// )}

export default SplashScreen;