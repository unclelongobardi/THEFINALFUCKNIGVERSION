import React from 'react';
import { motion } from 'framer-motion';

const InstitutionalOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Top institutional gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 opacity-60" />
      
      {/* Side accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      

      
      {/* Data visualization lines - subtle */}
      <div className="absolute bottom-20 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-24 left-16 right-16 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />
      
      {/* Breathing tech indicators */}
      <motion.div
        className="absolute bottom-8 right-8 w-3 h-3 bg-green-400 rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-8 right-16 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          opacity: [1, 0.3, 1],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default InstitutionalOverlay; 