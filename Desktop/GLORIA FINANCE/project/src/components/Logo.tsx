import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-14',
    xl: 'h-20'
  };

  const LogoImage = () => (
    <img
      src="https://i.ibb.co/bgCSh6d3/Logo-Without-Background.png"
      alt="GLORIA FINANCE"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
      onError={(e) => {
        // Fallback to text if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = 'block';
      }}
    />
  );

  const FallbackText = () => (
    <div 
      className={`font-display font-bold text-white hidden ${
        size === 'sm' ? 'text-lg' :
        size === 'md' ? 'text-2xl' :
        size === 'lg' ? 'text-3xl' :
        'text-4xl'
      }`}
    >
      <span className="text-white">GLORIA</span>
      <span className="text-blue-400 ml-2">FINANCE</span>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <LogoImage />
        <FallbackText />
      </motion.div>
    );
  }

  return (
    <div className="flex items-center">
      <LogoImage />
      <FallbackText />
    </div>
  );
};

export default Logo; 