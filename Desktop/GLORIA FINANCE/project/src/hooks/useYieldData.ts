import { useState, useEffect } from 'react';

interface YieldPool {
  chain: string;
  project: string;
  symbol: string;
  tvlUsd: number;
  apy: number;
  apyBase: number;
  apyReward: number;
  poolMeta: string;
  url: string;
  exposure: string;
  underlyingTokens?: string[];
  rewardTokens?: string[];
  poolId?: string;
  stablecoin?: boolean;
  ilRisk?: string;
  count?: number;
  outlier?: boolean;
  predictions?: {
    predictedClass: string;
    predictedProbability: number;
    binnedConfidence: number;
  };
}

interface YieldDataState {
  pools: YieldPool[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

// Mock data for fallback
const mockPools: YieldPool[] = [
  {
    chain: 'Solana',
    project: 'Raydium',
    symbol: 'SOL-USDC',
    tvlUsd: 45000000,
    apy: 12.5,
    apyBase: 8.2,
    apyReward: 4.3,
    poolMeta: 'LP',
    url: 'https://raydium.io/liquidity/',
    exposure: 'single',
    stablecoin: false
  },
  {
    chain: 'Solana',
    project: 'Orca',
    symbol: 'USDC-USDT',
    tvlUsd: 23000000,
    apy: 5.8,
    apyBase: 5.8,
    apyReward: 0,
    poolMeta: 'Stable LP',
    url: 'https://www.orca.so/',
    exposure: 'stablecoin',
    stablecoin: true
  },
  {
    chain: 'Solana',
    project: 'Kamino',
    symbol: 'SOL-mSOL',
    tvlUsd: 18000000,
    apy: 18.7,
    apyBase: 12.1,
    apyReward: 6.6,
    poolMeta: 'Leveraged LP',
    url: 'https://app.kamino.finance/',
    exposure: 'single',
    stablecoin: false
  }
];

export const useYieldData = (chain: string = 'Solana', minTvl: number = 100000) => {
  const [yieldData, setYieldData] = useState<YieldDataState>({
    pools: [],
    isLoading: true,
    error: null,
    lastUpdated: null,
  });

  const fetchYieldData = async () => {
    try {
      setYieldData(prev => ({ ...prev, isLoading: true, error: null }));
      
      // DeFiLlama Yields API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('https://yields.llama.fi/pools', {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Safely check if data exists and has the expected structure
      if (!data || !Array.isArray(data.data)) {
        throw new Error('Invalid API response format');
      }
      
      // Filter for specified chain and minimum TVL with safer filtering
      const filteredPools = data.data
        .filter((pool: any) => {
          try {
            return pool && 
                   typeof pool.chain === 'string' &&
                   pool.chain === chain && 
                   typeof pool.tvlUsd === 'number' &&
                   pool.tvlUsd >= minTvl &&
                   typeof pool.apy === 'number' &&
                   pool.apy > 0 && 
                   pool.apy < 1000 && // Filter out unrealistic APYs
                   typeof pool.project === 'string' &&
                   typeof pool.symbol === 'string';
          } catch (e) {
            return false;
          }
        })
        .sort((a: YieldPool, b: YieldPool) => b.tvlUsd - a.tvlUsd) // Sort by TVL descending
        .slice(0, 20); // Top 20 pools

      setYieldData({
        pools: filteredPools,
        isLoading: false,
        error: null,
        lastUpdated: new Date(),
      });
      
    } catch (error) {
      console.error('Error fetching yield data:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Using demo data - ';
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage += 'API timeout';
        } else if (error.message.includes('fetch')) {
          errorMessage += 'Network error';
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += 'API unavailable';
      }
      
      // Use mock data as fallback to prevent empty state
      setYieldData({
        pools: mockPools,
        isLoading: false,
        error: errorMessage,
        lastUpdated: new Date(),
      });
    }
  };

  useEffect(() => {
    // Use mock data immediately to prevent loading issues
    setYieldData({
      pools: mockPools,
      isLoading: false,
      error: null,
      lastUpdated: new Date(),
    });
    
    // Then try to fetch real data
    const timer = setTimeout(() => {
      fetchYieldData();
    }, 1000);
    
    // Set up interval to fetch every 5 minutes (after initial load)
    const interval = setInterval(fetchYieldData, 5 * 60 * 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [chain, minTvl]);

  return {
    ...yieldData,
    refetch: fetchYieldData,
  };
}; 