import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Loader2 } from 'lucide-react';
import { useSolanaPrice } from '../hooks/useSolanaPrice';

const SolanaLogo = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 100 100" 
    className="w-6 h-6"
  >
    <defs>
      <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D4AA" />
        <stop offset="50%" stopColor="#4E44CE" />
        <stop offset="100%" stopColor="#9945FF" />
      </linearGradient>
    </defs>
    <path
      d="M20.4 78.8c.7-.7 1.7-1.1 2.7-1.1h64.1c1.3 0 2 1.6 1.1 2.5L73.6 94.9c-.7.7-1.7 1.1-2.7 1.1H6.8c-1.3 0-2-1.6-1.1-2.5L20.4 78.8zM20.4 4.2c.7-.7 1.7-1.1 2.7-1.1h64.1c1.3 0 2 1.6 1.1 2.5L73.6 20.3c-.7.7-1.7 1.1-2.7 1.1H6.8c-1.3 0-2-1.6-1.1-2.5L20.4 4.2zM79.6 39.5c-.7-.7-1.7-1.1-2.7-1.1H12.8c-1.3 0-2 1.6-1.1 2.5l14.7 14.7c.7.7 1.7 1.1 2.7 1.1h64.1c1.3 0 2-1.6 1.1-2.5L79.6 39.5z"
      fill="url(#solanaGradient)"
    />
  </svg>
);

const SolanaPrice: React.FC = () => {
  const { price, change24h, isLoading, error } = useSolanaPrice();

  if (error) {
    return (
      <div className="flex items-center space-x-2 text-red-400 text-sm font-mono">
        <span>SOL: Error</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-slate-400 text-sm font-mono">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Loading SOL...</span>
      </div>
    );
  }

  const isPositive = change24h >= 0;
  const formatPrice = (price: number | null | undefined) => {
    if (!price || typeof price !== 'number' || isNaN(price)) return '$0.00';
    return `$${price.toFixed(2)}`;
  };
  const formatChange = (change: number | null | undefined) => {
    if (!change || typeof change !== 'number' || isNaN(change)) return '0.00%';
    return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
  };

  return (
    <motion.div 
      className="flex items-center space-x-3 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-700/50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-2">
        <SolanaLogo />
        <span className="text-white font-semibold font-mono">SOL</span>
      </div>
      
      <motion.span 
        className="text-white font-bold font-mono text-base"
        key={price} // This will trigger animation on price change
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {formatPrice(price)}
      </motion.span>
      
      <motion.div 
        className={`flex items-center space-x-1 font-mono ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {isPositive ? (
          <TrendingUp className="w-4 h-4" />
        ) : (
          <TrendingDown className="w-4 h-4" />
        )}
        <span className="font-semibold text-sm">
          {formatChange(change24h)}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default SolanaPrice; 