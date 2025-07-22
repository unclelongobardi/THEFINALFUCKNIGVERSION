import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, 
  TrendingUp, 
  AlertCircle,
  BarChart3,
  Layers,
  Clock,
  Target,
  ArrowUpDown
} from 'lucide-react';
import GlassCard from './GlassCard';

interface LiquidityPool {
  id: string;
  name: string;
  tvl: number;
  volume24h: number;
  marketDepth: number;
  slippage1k: number;
  slippage10k: number;
  slippage100k: number;
  utilization: number;
  apy: number;
  riskLevel: 'low' | 'medium' | 'high';
}

interface MarketImpactData {
  size: string;
  impact: number;
  executionTime: string;
}

const LiquidityAnalysis: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  
  const [liquidityPools] = useState<LiquidityPool[]>([
    {
      id: '1',
      name: 'SOL/USDC',
      tvl: 145.7,
      volume24h: 28.4,
      marketDepth: 892.3,
      slippage1k: 0.03,
      slippage10k: 0.12,
      slippage100k: 0.89,
      utilization: 67.8,
      apy: 14.2,
      riskLevel: 'low'
    },
    {
      id: '2', 
      name: 'mSOL/SOL',
      tvl: 89.2,
      volume24h: 15.7,
      marketDepth: 543.1,
      slippage1k: 0.05,
      slippage10k: 0.18,
      slippage100k: 1.24,
      utilization: 45.3,
      apy: 18.9,
      riskLevel: 'medium'
    },
    {
      id: '3',
      name: 'RAY/USDC',
      tvl: 23.8,
      volume24h: 8.9,
      marketDepth: 178.4,
      slippage1k: 0.08,
      slippage10k: 0.35,
      slippage100k: 2.67,
      utilization: 73.2,
      apy: 28.4,
      riskLevel: 'high'
    }
  ]);

  const marketImpactData: MarketImpactData[] = [
    { size: '$1K', impact: 0.05, executionTime: '<1s' },
    { size: '$10K', impact: 0.18, executionTime: '1-2s' },
    { size: '$100K', impact: 0.89, executionTime: '2-5s' },
    { size: '$1M', impact: 3.24, executionTime: '5-15s' },
    { size: '$10M', impact: 12.7, executionTime: '15-60s' }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <Waves className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white font-display">Liquidity Intelligence</h2>
        </div>
        <div className="flex space-x-2">
          {['1H', '24H', '7D', '30D'].map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                selectedTimeframe === timeframe 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Market Depth Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid lg:grid-cols-4 gap-4"
      >
        <GlassCard className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-400">Total Depth</span>
          </div>
          <div className="text-xl font-bold text-white">$1.61B</div>
          <div className="text-xs text-green-400">+5.7% vs yesterday</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-400">Avg Slippage</span>
          </div>
          <div className="text-xl font-bold text-white">0.089%</div>
          <div className="text-xs text-red-400">+0.012% vs yesterday</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-sm text-slate-400">Efficiency Score</span>
          </div>
          <div className="text-xl font-bold text-white">87.3</div>
          <div className="text-xs text-green-400">+2.1 pts</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-400">Avg Execution</span>
          </div>
          <div className="text-xl font-bold text-white">2.3s</div>
          <div className="text-xs text-green-400">-0.4s vs yesterday</div>
        </GlassCard>
      </motion.div>

      {/* Detailed Pool Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid lg:grid-cols-2 gap-6"
      >
        {/* Pool Performance Table */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Liquidity Pools</h3>
          <div className="space-y-4">
            {liquidityPools.map((pool) => (
              <div key={pool.id} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg font-bold text-white">{pool.name}</div>
                    <div className={`px-2 py-1 rounded text-xs font-medium border ${getRiskColor(pool.riskLevel)}`}>
                      {pool.riskLevel}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">{pool.apy.toFixed(1)}%</div>
                    <div className="text-xs text-slate-400">APY</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">TVL</div>
                    <div className="font-medium text-white">{formatCurrency(pool.tvl * 1000000)}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">24h Volume</div>
                    <div className="font-medium text-white">{formatCurrency(pool.volume24h * 1000000)}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Utilization</div>
                    <div className="font-medium text-white">{pool.utilization.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-700/50">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Slippage (1K/10K/100K):</span>
                    <span className="text-white font-mono">
                      {pool.slippage1k.toFixed(2)}% / {pool.slippage10k.toFixed(2)}% / {pool.slippage100k.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Market Impact Analysis */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Market Impact Analysis</h3>
          
          <div className="mb-6">
            <div className="text-sm text-slate-400 mb-2">Expected price impact for SOL/USDC trades:</div>
            <div className="space-y-3">
              {marketImpactData.map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium text-white w-12">{data.size}</div>
                    <div className="flex-1">
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            data.impact < 0.5 ? 'bg-green-400' : 
                            data.impact < 2 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${Math.min(data.impact * 10, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      data.impact < 0.5 ? 'text-green-400' : 
                      data.impact < 2 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {data.impact.toFixed(2)}%
                    </div>
                    <div className="text-xs text-slate-400">{data.executionTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-blue-400">Execution Recommendation</div>
                <div className="text-xs text-slate-400 mt-1">
                  For orders &gt;$100K, consider splitting across multiple pools or using time-weighted execution to minimize market impact.
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Liquidity Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Liquidity Flow Analysis</h3>
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Net Inflow: +$23.4M</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">+$45.7M</div>
              <div className="text-sm text-slate-400">Inflows (24h)</div>
              <div className="text-xs text-slate-500 mt-1">+18.3% vs yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">-$22.3M</div>
              <div className="text-sm text-slate-400">Outflows (24h)</div>
              <div className="text-xs text-slate-500 mt-1">-5.2% vs yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2.05x</div>
              <div className="text-sm text-slate-400">Turnover Ratio</div>
              <div className="text-xs text-slate-500 mt-1">Industry average: 1.8x</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default LiquidityAnalysis; 