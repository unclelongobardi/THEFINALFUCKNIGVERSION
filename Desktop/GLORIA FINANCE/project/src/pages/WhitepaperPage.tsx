import React from 'react';
import Whitepaper from '../components/Whitepaper';
import TechBackground from '../components/TechBackground';

const WhitepaperPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <TechBackground />
      </div>
      <div className="relative z-10">
        <Whitepaper />
      </div>
    </div>
  );
};

export default WhitepaperPage; 