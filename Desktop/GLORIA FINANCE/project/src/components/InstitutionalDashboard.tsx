import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Shield,
  AlertTriangle,
  BarChart3,
  PieChart,
  Clock,
  Target,
  Zap,
  Eye,
  Brain,
  Signal,
  DollarSign,
  Percent
} from 'lucide-react';
import GlassCard from './GlassCard';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  trend?: number[];
}

interface RiskMetric {
  name: string;
  score: number;
  status: 'low' | 'medium' | 'high' | 'critical';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, icon, trend }) => (
  <GlassCard className="p-4 relative overflow-hidden">
    <div className="flex items-start justify-between mb-3">
      <div className="text-blue-400">{icon}</div>
      <div className={`text-xs font-medium px-2 py-1 rounded ${
        isPositive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
      }`}>
        {change}
      </div>
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-slate-400">{title}</div>
    
    {trend && (
      <div className="absolute bottom-0 right-0 w-16 h-8 opacity-30">
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <polyline
            fill="none"
            stroke={isPositive ? "#22c55e" : "#ef4444"}
            strokeWidth="2"
            points={trend.map((val, idx) => `${idx * 10},${30 - val}`).join(' ')}
          />
        </svg>
      </div>
    )}
  </GlassCard>
);

const RiskIndicator: React.FC<{ metric: RiskMetric }> = ({ metric }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-slate-700/50 last:border-b-0">
      <div className="flex-1">
        <div className="text-sm font-medium text-white">{metric.name}</div>
        <div className="text-xs text-slate-400 mt-1">{metric.description}</div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <div className="text-sm font-bold text-white">{metric.score}/100</div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(metric.status)}`}>
          {metric.status.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

const InstitutionalDashboard: React.FC = () => {
  const [marketData, setMarketData] = useState({
    totalTVL: 2847.3,
    totalVolume24h: 892.5,
    activeProtocols: 247,
    avgAPY: 12.4,
    riskScore: 78,
    liquidityRatio: 0.89
  });

  const [riskMetrics] = useState<RiskMetric[]>([
    {
      name: 'Smart Contract Risk',
      score: 85,
      status: 'low',
      description: 'Code audit coverage and vulnerability assessment'
    },
    {
      name: 'Liquidity Risk', 
      score: 72,
      status: 'medium',
      description: 'Market depth and slippage analysis'
    },
    {
      name: 'Economic Risk',
      score: 68,
      status: 'medium', 
      description: 'Token economics and inflation dynamics'
    },
    {
      name: 'Governance Risk',
      score: 91,
      status: 'low',
      description: 'Decentralization and voting power distribution'
    },
    {
      name: 'Oracle Risk',
      score: 58,
      status: 'high',
      description: 'Price feed reliability and manipulation resistance'
    }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        totalTVL: prev.totalTVL + (Math.random() - 0.5) * 10,
        totalVolume24h: prev.totalVolume24h + (Math.random() - 0.5) * 20,
        avgAPY: prev.avgAPY + (Math.random() - 0.5) * 0.2,
        riskScore: Math.max(0, Math.min(100, prev.riskScore + (Math.random() - 0.5) * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trendData = [15, 18, 12, 25, 20, 28];

  return (
    <div className="space-y-6">
      {/* Real-time Market Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white font-display">Market Intelligence</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">Live Data</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <MetricCard
            title="Total TVL"
            value={`$${marketData.totalTVL.toFixed(1)}M`}
            change="+3.2%"
            isPositive={true}
            icon={<DollarSign className="w-5 h-5" />}
            trend={trendData}
          />
          <MetricCard
            title="24h Volume"
            value={`$${marketData.totalVolume24h.toFixed(1)}M`}
            change="-1.8%"
            isPositive={false}
            icon={<Activity className="w-5 h-5" />}
            trend={[20, 25, 15, 30, 28, 22]}
          />
          <MetricCard
            title="Active Protocols"
            value={marketData.activeProtocols.toString()}
            change="+5"
            isPositive={true}
            icon={<Target className="w-5 h-5" />}
          />
          <MetricCard
            title="Avg APY"
            value={`${marketData.avgAPY.toFixed(1)}%`}
            change="+0.3%"
            isPositive={true}
            icon={<Percent className="w-5 h-5" />}
            trend={[12, 14, 11, 16, 15, 13]}
          />
          <MetricCard
            title="Risk Score"
            value={marketData.riskScore.toFixed(0)}
            change="-2pts"
            isPositive={false}
            icon={<Shield className="w-5 h-5" />}
          />
          <MetricCard
            title="Liquidity Ratio"
            value={marketData.liquidityRatio.toFixed(2)}
            change="+0.05"
            isPositive={true}
            icon={<Signal className="w-5 h-5" />}
          />
        </div>
      </motion.div>

      {/* Advanced Analytics Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        {/* Risk Assessment Panel */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Risk Assessment</h3>
            </div>
            <div className="space-y-1">
              {riskMetrics.map((metric, index) => (
                <RiskIndicator key={index} metric={metric} />
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-xs font-medium text-blue-400 mb-1">Overall Risk Rating</div>
              <div className="text-lg font-bold text-white">B+ (Moderate)</div>
              <div className="text-xs text-slate-400">Based on 247 protocols analyzed</div>
            </div>
          </GlassCard>
        </div>

        {/* Market Concentration */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <PieChart className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Market Concentration</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { protocol: 'Marinade', share: 23.4, color: 'bg-blue-400' },
                { protocol: 'Jito', share: 18.7, color: 'bg-green-400' },
                { protocol: 'Orca', share: 15.2, color: 'bg-purple-400' },
                { protocol: 'Raydium', share: 12.8, color: 'bg-yellow-400' },
                { protocol: 'Others', share: 29.9, color: 'bg-slate-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-sm text-slate-300">{item.protocol}</span>
                    <span className="text-sm font-medium text-white">{item.share}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <div className="text-xs font-medium text-amber-400 mb-1">Concentration Alert</div>
              <div className="text-xs text-slate-400">Top 4 protocols control 70.1% of TVL</div>
            </div>
          </GlassCard>
        </div>

        {/* Alert Center */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Alert Center</h3>
            </div>
            
            <div className="space-y-3">
              {[
                {
                  type: 'warning',
                  message: 'High slippage detected on ORCA/USDC pool',
                  time: '2m ago',
                  severity: 'medium'
                },
                {
                  type: 'info',
                  message: 'New liquidity mining program launched',
                  time: '15m ago',
                  severity: 'low'
                },
                {
                  type: 'critical',
                  message: 'Smart contract upgrade detected',
                  time: '1h ago',
                  severity: 'high'
                }
              ].map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  alert.severity === 'high' ? 'bg-red-500/10 border-red-500/30' :
                  alert.severity === 'medium' ? 'bg-amber-500/10 border-amber-500/30' :
                  'bg-blue-500/10 border-blue-500/30'
                }`}>
                  <div className="text-xs font-medium text-white">{alert.message}</div>
                  <div className="text-xs text-slate-400 mt-1">{alert.time}</div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
              View All Alerts
            </button>
          </GlassCard>
        </div>
      </motion.div>

      {/* Performance Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Performance Analytics</h3>
            </div>
            <div className="flex space-x-2">
              {['1H', '1D', '7D', '30D'].map((period) => (
                <button
                  key={period}
                  className="px-3 py-1 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">+127.3%</div>
              <div className="text-sm text-slate-400">YTD Returns</div>
              <div className="text-xs text-slate-500 mt-1">vs -12.4% traditional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2.34</div>
              <div className="text-sm text-slate-400">Sharpe Ratio</div>
              <div className="text-xs text-slate-500 mt-1">30-day average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">18.7%</div>
              <div className="text-sm text-slate-400">Max Drawdown</div>
              <div className="text-xs text-slate-500 mt-1">Historical worst</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">0.73</div>
              <div className="text-sm text-slate-400">Beta to SOL</div>
              <div className="text-xs text-slate-500 mt-1">Market correlation</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default InstitutionalDashboard; 