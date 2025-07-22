import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity, AlertCircle, RefreshCw, ExternalLink, Shield, Filter, BarChart3 } from 'lucide-react';
import { useYieldData } from '../hooks/useYieldData';
import GlassCard from './GlassCard';

const YieldDashboard: React.FC = () => {
  const { pools, isLoading, error, lastUpdated, refetch } = useYieldData('Solana', 100000);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'stable' | 'high' | 'safe'>('all');
  const [sortBy, setSortBy] = useState<'apy' | 'tvl' | 'risk'>('apy');

  const formatCurrency = (amount: number | null | undefined) => {
    if (!amount || typeof amount !== 'number' || isNaN(amount)) return '$0';
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(1)}K`;
    return `$${amount.toFixed(0)}`;
  };

  const formatAPY = (apy: number | null | undefined) => {
    if (!apy || typeof apy !== 'number' || isNaN(apy)) return '0.00%';
    return `${apy.toFixed(2)}%`;
  };

  const getRiskLevel = (apy: number, isStable?: boolean): { level: string; color: string; score: number } => {
    if (isStable) return { level: 'STABLE', color: 'text-blue-400', score: 95 };
    if (apy >= 100) return { level: 'EXTREME', color: 'text-purple-400', score: 20 };
    if (apy >= 50) return { level: 'HIGH', color: 'text-red-400', score: 40 };
    if (apy >= 20) return { level: 'MEDIUM', color: 'text-amber-400', score: 70 };
    if (apy >= 10) return { level: 'LOW', color: 'text-green-400', score: 85 };
    return { level: 'SAFE', color: 'text-blue-400', score: 95 };
  };

  const getProtocolUrl = (project: string, url?: string) => {
    if (url) return url;
    
    // Direct protocol URLs for investment
    const protocolUrls: Record<string, string> = {
      'raydium': 'https://raydium.io/liquidity/add',
      'orca': 'https://www.orca.so/pools',
      'kamino': 'https://app.kamino.finance/lending',
      'solend': 'https://solend.fi/dashboard',
      'marinade': 'https://marinade.finance/app/staking',
      'lido': 'https://solana.lido.fi/',
      'jupiter': 'https://jup.ag/swap',
      'drift': 'https://app.drift.trade/trade',
      'mango': 'https://trade.mango.markets/',
      'tulip': 'https://tulip.garden/vaults',
      'francium': 'https://francium.io/app',
      'saber': 'https://app.saber.so/',
      'port': 'https://port.finance/app',
      'apricot': 'https://app.apricot.one/',
      'meanfi': 'https://app.meanfi.com/',
      'friktion': 'https://app.friktion.fi/',
      'parrot': 'https://parrot.fi/mint',
      'credix': 'https://app.credix.finance/',
      'quarry': 'https://app.quarry.so/',
      'aldrin': 'https://dex.aldrin.com/',
      'lifinity': 'https://lifinity.io/',
      'mercurial': 'https://mercurial.finance/',
      'larix': 'https://projectlarix.com/',
      'hubble': 'https://app.hubbleprotocol.io/',
      'solend v2': 'https://beta.solend.fi/',
      'oxygen': 'https://app.oxygen.org/',
      'sunny': 'https://app.sunny.ag/',
      'step': 'https://app.step.finance/',
      'socean': 'https://app.socean.fi/',
      'cashio': 'https://cashio.app/',
      'atrix': 'https://app.atrix.finance/',
      'jet': 'https://app.jetprotocol.io/',
      'msol': 'https://marinade.finance/app/staking',
      'jpool': 'https://jpool.one/',
      'dai': 'https://jup.ag/swap',
      'usdc': 'https://jup.ag/swap',
      'usdt': 'https://jup.ag/swap',
      'sol': 'https://jup.ag/swap'
    };
    
    // Try exact match first, then lowercase match
    const directUrl = protocolUrls[project] || protocolUrls[project.toLowerCase()];
    if (directUrl) return directUrl;
    
    // For unknown protocols, try to construct a reasonable URL
    // Default to Jupiter for token swaps if no protocol-specific URL
    return 'https://jup.ag/swap';
  };

  const filteredAndSortedPools = (pools || [])
    .filter(pool => {
      if (!pool) return false;
      const apy = pool.apy || 0;
      const tvl = pool.tvlUsd || 0;
      
      switch (selectedFilter) {
        case 'stable': return pool.stablecoin || apy < 15;
        case 'high': return apy >= 30;
        case 'safe': return apy < 30 && tvl > 1000000;
        default: return true;
      }
    })
    .sort((a, b) => {
      const apyA = a?.apy || 0;
      const apyB = b?.apy || 0;
      const tvlA = a?.tvlUsd || 0;
      const tvlB = b?.tvlUsd || 0;
      
      switch (sortBy) {
        case 'tvl': return tvlB - tvlA;
        case 'risk': return getRiskLevel(apyB, b?.stablecoin).score - getRiskLevel(apyA, a?.stablecoin).score;
        default: return apyB - apyA;
      }
    });

  // Show loading state while initial data loads
  if (isLoading && pools.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <RefreshCw className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-display">
              Loading Live Yield Opportunities
            </h3>
            <p className="text-slate-400 font-body">
              Fetching real-time APY data from Solana DeFi protocols...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error Banner */}
      {error && (
        <GlassCard className="p-4 border-l-4 border-amber-400">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-amber-400 font-semibold text-sm">API Notice</div>
              <div className="text-slate-300 text-sm font-mono">{error}</div>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
        <div>
          <h3 className="text-3xl font-bold font-display text-white mb-2 flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <span>Live Yield Opportunities</span>
          </h3>
          <p className="text-slate-400 font-body text-lg">
            Real-time APY data from Solana DeFi protocols • Click to invest
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {lastUpdated && (
            <div className="text-xs text-slate-500 font-mono">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
          <motion.button
            onClick={refetch}
            className="p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            <RefreshCw className={`w-5 h-5 text-blue-400 ${isLoading ? 'animate-spin' : ''}`} />
          </motion.button>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-400 font-body">Filter:</span>
          {(['all', 'stable', 'high', 'safe'] as const).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <BarChart3 className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-400 font-body">Sort by:</span>
          {(['apy', 'tvl', 'risk'] as const).map((sort) => (
            <motion.button
              key={sort}
              onClick={() => setSortBy(sort)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                sortBy === sort
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sort.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400 font-body mb-1">Average APY</div>
              <div className="text-2xl font-bold font-mono text-white">
                {filteredAndSortedPools.length > 0 
                  ? formatAPY(filteredAndSortedPools.reduce((sum, pool) => sum + (pool?.apy || 0), 0) / filteredAndSortedPools.length)
                  : '-.-%'
                }
              </div>
            </div>
            <div className="p-3 rounded-xl bg-green-600/20">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400 font-body mb-1">Total TVL</div>
              <div className="text-2xl font-bold font-mono text-white">
                {filteredAndSortedPools.length > 0 
                  ? formatCurrency(filteredAndSortedPools.reduce((sum, pool) => sum + (pool?.tvlUsd || 0), 0))
                  : '$-'
                }
              </div>
            </div>
            <div className="p-3 rounded-xl bg-blue-600/20">
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400 font-body mb-1">Active Pools</div>
              <div className="text-2xl font-bold font-mono text-white">
                {filteredAndSortedPools.length}
              </div>
              <div className="text-xs text-slate-500 font-body">
                of {pools.length} total
              </div>
            </div>
            <div className="p-3 rounded-xl bg-purple-600/20">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400 font-body mb-1">Best APY</div>
              <div className="text-2xl font-bold font-mono text-white">
                {filteredAndSortedPools.length > 0 
                  ? formatAPY(Math.max(...filteredAndSortedPools.map(p => p?.apy || 0)))
                  : '-.-%'
                }
              </div>
            </div>
            <div className="p-3 rounded-xl bg-amber-600/20">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Pools Table */}
      <GlassCard className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-4 px-6 font-display text-slate-300">Protocol</th>
                <th className="text-left py-4 px-6 font-display text-slate-300">Pool Details</th>
                <th className="text-right py-4 px-6 font-display text-slate-300">APY Breakdown</th>
                <th className="text-right py-4 px-6 font-display text-slate-300">TVL</th>
                <th className="text-center py-4 px-6 font-display text-slate-300">Risk Score</th>
                <th className="text-center py-4 px-6 font-display text-slate-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="flex items-center justify-center space-x-2">
                      <RefreshCw className="w-6 h-6 animate-spin text-blue-400" />
                      <span className="text-slate-400 font-mono text-lg">Loading yield opportunities...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredAndSortedPools.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400 font-mono">
                    No yield opportunities found matching selected criteria
                  </td>
                </tr>
              ) : (
                filteredAndSortedPools.map((pool, index) => {
                  const risk = getRiskLevel(pool?.apy || 0, pool?.stablecoin);
                  const protocolUrl = getProtocolUrl(pool?.project || '', pool?.url);
                  
                  return (
                    <motion.tr
                      key={`${pool.project}-${pool.symbol}-${index}`}
                      className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-all duration-200 cursor-pointer group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => window.open(protocolUrl, '_blank')}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <span className="font-bold text-white text-sm">
                              {(pool?.project || '?').charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-white font-body group-hover:text-blue-400 transition-colors">
                              {pool?.project || 'Unknown'}
                            </div>
                            <div className="text-xs text-slate-500 font-mono">
                              {pool?.chain || 'Unknown'}
                            </div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="py-4 px-6">
                        <div className="text-slate-200 font-mono text-sm font-semibold">
                          {pool?.symbol || 'Unknown'}
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-1">
                          {pool?.exposure || 'Unknown'}
                        </div>
                        {pool?.stablecoin && (
                          <div className="inline-flex items-center mt-1">
                            <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold text-blue-400 bg-blue-400/10">
                              STABLE
                            </span>
                          </div>
                        )}
                      </td>
                      
                      <td className="py-4 px-6 text-right">
                        <div className="font-bold font-mono text-white text-lg">
                          {formatAPY(pool?.apy)}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          Base: {formatAPY(pool?.apyBase)}
                        </div>
                        {(pool?.apyReward || 0) > 0 && (
                          <div className="text-xs text-green-400 font-mono">
                            Rewards: +{formatAPY(pool?.apyReward)}
                          </div>
                        )}
                      </td>
                      
                      <td className="py-4 px-6 text-right">
                        <div className="font-mono text-slate-200 font-semibold">
                          {formatCurrency(pool?.tvlUsd)}
                        </div>
                        <div className="text-xs text-slate-500 font-mono">
                          {(pool?.tvlUsd || 0) > 10000000 ? 'High Liquidity' : 
                           (pool?.tvlUsd || 0) > 1000000 ? 'Good Liquidity' : 'Limited Liquidity'}
                        </div>
                      </td>
                      
                      <td className="py-4 px-6 text-center">
                        <div className="flex flex-col items-center space-y-1">
                          <span className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${risk.color} bg-slate-800/50`}>
                            {risk.level}
                          </span>
                          <div className="text-xs text-slate-500 font-mono">
                            {risk.score}/100
                          </div>
                        </div>
                      </td>
                      
                      <td className="py-4 px-6 text-center">
                        <motion.div 
                          className="inline-flex items-center space-x-1 text-blue-400 group-hover:text-blue-300 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs font-medium">INVEST</span>
                        </motion.div>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Disclaimer */}
      <div className="text-xs text-slate-500 text-center font-body">
        * APY data is provided by DeFiLlama. Past performance does not guarantee future results. 
        Always conduct your own research before investing.
      </div>
    </div>
  );
};

export default YieldDashboard; 