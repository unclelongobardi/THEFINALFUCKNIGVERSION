import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import PoolCharts from '../components/PoolCharts';
import YieldDashboard from '../components/YieldDashboard';
import InstitutionalDashboard from '../components/InstitutionalDashboard';
import LiquidityAnalysis from '../components/LiquidityAnalysis';
import TechBackground from '../components/TechBackground';
import SafeComponent from '../components/SafeComponent';
import Logo from '../components/Logo';
import { useSolanaData } from '../hooks/useSolanaData';
import { usePoolFilters } from '../hooks/usePoolFilters';

const DAppPage: React.FC = () => {
  console.log('DAppPage rendering...');
  
  const { pools, loading, error, lastUpdated } = useSolanaData();
  console.log('Solana data:', { pools: pools?.length, loading, error });
  
  const {
    filteredPools,
    searchTerm,
    setSearchTerm,
    protocolFilter,
    setProtocolFilter,
    riskFilter,
    setRiskFilter,
    sortBy,
    setSortBy,
    availableProtocols
  } = usePoolFilters(pools || []);

  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  console.log('Filtered pools:', filteredPools?.length);

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-400 bg-green-400/10';
      case 'medium': return 'text-amber-400 bg-amber-400/10';
      case 'high': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const formatCurrency = (value: number | null | undefined) => {
    if (!value || typeof value !== 'number' || isNaN(value)) return '$0';
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  const getRiskText = (riskScore: string) => {
    return riskScore;
  };

  const getRiskScoreNumber = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
      case 'low': return 85;
      case 'medium': return 70;
      case 'high': return 45;
      default: return 60;
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      <TechBackground />
      {/* Professional Header */}
      <header className="bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-3">
                <Logo size="lg" animated={true} />
                <span className="text-slate-400">|</span>
                <span className="text-slate-300 font-body font-medium">Analysis Terminal</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300">
                  Updated: {lastUpdated?.toLocaleTimeString() || 'Never'}
                </span>
              </div>
              
              <Link 
                to="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Professional Terminal Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 font-display">
                GLORIA FINANCE Terminal
              </h1>
              <p className="text-slate-400 font-body">
                Professional-grade DeFi risk intelligence and portfolio analytics
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-400">LIVE</div>
              <div className="text-sm text-slate-400">Real-time data feed</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
            {[
              { id: 'overview', label: 'Market Overview', icon: '📊' },
              { id: 'liquidity', label: 'Liquidity Analysis', icon: '🌊' },
              { id: 'yields', label: 'Yield Strategies', icon: '💰' },
              { id: 'protocols', label: 'Protocol Scanner', icon: '🔍' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="relative">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SafeComponent componentName="InstitutionalDashboard">
                <InstitutionalDashboard />
              </SafeComponent>
            </motion.div>
          )}

          {activeTab === 'liquidity' && (
            <motion.div
              key="liquidity"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SafeComponent componentName="LiquidityAnalysis">
                <LiquidityAnalysis />
              </SafeComponent>
            </motion.div>
          )}

          {activeTab === 'yields' && (
            <motion.div
              key="yields"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SafeComponent componentName="YieldDashboard">
                <YieldDashboard />
              </SafeComponent>
            </motion.div>
          )}

          {activeTab === 'protocols' && (
            <motion.div
              key="protocols"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SafeComponent componentName="ProtocolScanner">
                <div className="space-y-6">
                  <SafeComponent componentName="PoolCharts">
                    <PoolCharts pools={filteredPools} />
                  </SafeComponent>

                  {/* Advanced Filters for Protocol Scanner */}
                  <GlassCard className="p-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Search Protocol
                        </label>
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search..."
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                                   text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Protocol Type
                        </label>
                        <select
                          value={protocolFilter}
                          onChange={(e) => setProtocolFilter(e.target.value as any)}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                                   text-white focus:border-blue-400 focus:outline-none"
                        >
                          <option value="all">All protocols</option>
                          {availableProtocols.map((protocol: string) => (
                            <option key={protocol} value={protocol}>{protocol}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Risk Level
                        </label>
                        <select
                          value={riskFilter}
                          onChange={(e) => setRiskFilter(e.target.value as any)}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                                   text-white focus:border-blue-400 focus:outline-none"
                        >
                          <option value="all">All risk levels</option>
                          <option value="low">Low Risk</option>
                          <option value="medium">Medium Risk</option>
                          <option value="high">High Risk</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Sort by
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as any)}
                          className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                                   text-white focus:border-blue-400 focus:outline-none"
                        >
                          <option value="apy">APY (High to Low)</option>
                          <option value="tvl">TVL (High to Low)</option>
                          <option value="risk">Risk Score</option>
                        </select>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </SafeComponent>
            </motion.div>
          )}
        </div>
      </div>

      {/* Pool Detail Modal */}
      {selectedPool && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPool.protocol}</h3>
                  <p className="text-slate-400">{selectedPool.name}</p>
                </div>
                <button 
                  onClick={() => setSelectedPool(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-sm">APY</label>
                  <div className="text-2xl font-bold text-green-400">
                    {(selectedPool?.apy || 0).toFixed(2)}%
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">TVL</label>
                  <div className="text-2xl font-bold text-white">
                    {selectedPool.tvl}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-slate-400 text-sm">Risk Level</label>
                <div className="mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(getRiskText(selectedPool.riskScore))}`}>
                    {getRiskText(selectedPool.riskScore)}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="text-slate-400 text-sm">Risk Score</label>
                <div className="mt-2 flex items-center space-x-3">
                  <div className="flex-1 bg-slate-700 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-red-400 via-amber-400 to-green-400"
                      style={{ width: `${getRiskScoreNumber(selectedPool.riskScore)}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium">{getRiskScoreNumber(selectedPool.riskScore)}/100</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-700">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DAppPage; 