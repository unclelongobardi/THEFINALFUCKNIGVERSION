import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { Pool } from '../hooks/useSolanaData';

interface PoolChartsProps {
  pools: Pool[];
}

const PoolCharts: React.FC<PoolChartsProps> = ({ pools }) => {
  // Safety check for pools data
  const safePools = Array.isArray(pools) ? pools : [];
  
  // Show loading state if no pools data
  if (safePools.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="text-slate-400 font-body">Loading analytics...</div>
        </div>
      </div>
    );
  }
  
  // Prepare data for risk distribution
  const riskData = React.useMemo(() => {
    const riskCounts = safePools.reduce((acc, pool) => {
      if (pool && pool.riskScore) {
        acc[pool.riskScore] = (acc[pool.riskScore] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return [
      { name: 'Low Risk', value: riskCounts.Low || 0, color: '#10B981' },
      { name: 'Medium Risk', value: riskCounts.Medium || 0, color: '#F59E0B' },
      { name: 'High Risk', value: riskCounts.High || 0, color: '#EF4444' }
    ];
  }, [safePools]);

  // Prepare data for APY comparison
  const apyData = React.useMemo(() => {
    return safePools
      .slice(0, 8)
      .map(pool => ({
        name: pool.name?.split('-')[0] || pool.name?.substring(0, 8) || 'Unknown',
        apy: pool.apy || 0,
        protocol: pool.protocol || 'Unknown'
      }))
      .sort((a, b) => b.apy - a.apy);
  }, [safePools]);

  // Prepare data for TVL comparison
  const tvlData = React.useMemo(() => {
    return pools
      .slice(0, 6)
      .map(pool => {
        const tvlValue = parseFloat(pool.tvl.replace(/[$,]/g, ''));
        const multiplier = pool.tvl.includes('B') ? 1000 : pool.tvl.includes('M') ? 1 : 0.001;
        return {
          name: pool.name.split('-')[0] || pool.name.substring(0, 8),
          tvl: tvlValue * multiplier,
          protocol: pool.protocol
        };
      })
      .sort((a, b) => b.tvl - a.tvl);
  }, [pools]);

  // Generate trending data for APY chart
  const trendingData = React.useMemo(() => {
    const days = 7;
    return Array.from({ length: days }, (_, i) => ({
      day: `Day ${i + 1}`,
      avgAPY: 8 + Math.random() * 12 + Math.sin(i) * 3,
      volume: 1000000 + Math.random() * 5000000
    }));
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-institutional-secondary/95 backdrop-blur-sm border border-institutional-border/50 rounded-lg p-3 shadow-xl">
          <p className="text-institutional-muted text-sm">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-institutional-accent font-medium">
              {`${entry.name}: ${entry.value}${entry.name.includes('APY') ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Risk Distribution Pie Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 institutional-text">Risk Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={riskData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {riskData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-4 mt-4">
          {riskData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* APY Comparison Bar Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 gradient-text">Top APY Pools</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={apyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <YAxis 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="apy" 
              fill="url(#apyGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="apyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9945ff" />
                <stop offset="100%" stopColor="#14f195" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* TVL Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 gradient-text">Total Value Locked</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={tvlData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              type="number"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <YAxis 
              type="category"
              dataKey="name"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="tvl" 
              fill="url(#tvlGradient)"
              radius={[0, 4, 4, 0]}
            />
            <defs>
              <linearGradient id="tvlGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00d1ff" />
                <stop offset="100%" stopColor="#9945ff" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* APY Trend Line Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-semibold mb-4 gradient-text">APY Trends</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={trendingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <YAxis 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#6B7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="avgAPY"
              stroke="#14f195"
              fill="url(#areaGradient)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14f195" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#14f195" stopOpacity={0.05} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PoolCharts; 