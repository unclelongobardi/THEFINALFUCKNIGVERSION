import { useState, useMemo } from 'react';
import { Pool } from './useSolanaData';

export type SortOption = 'apy' | 'risk' | 'tvl' | 'protocol';
export type FilterOption = 'all' | 'raydium' | 'orca' | 'marinade' | 'jupiter' | 'meteora';
export type RiskFilter = 'all' | 'low' | 'medium' | 'high';

export const usePoolFilters = (pools: Pool[]) => {
  const [protocolFilter, setProtocolFilter] = useState<FilterOption>('all');
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('apy');
  const [searchTerm, setSearchTerm] = useState('');

  // Parse TVL string to number for sorting
  const parseTVL = (tvlString: string): number => {
    const value = parseFloat(tvlString.replace(/[$,]/g, ''));
    if (tvlString.includes('B')) return value * 1000000000;
    if (tvlString.includes('M')) return value * 1000000;
    if (tvlString.includes('K')) return value * 1000;
    return value;
  };

  // Get risk score number for sorting
  const getRiskScore = (risk: string): number => {
    switch (risk.toLowerCase()) {
      case 'low': return 1;
      case 'medium': return 2;
      case 'high': return 3;
      default: return 2;
    }
  };

  // Filter and sort pools
  const filteredAndSortedPools = useMemo(() => {
    let filtered = pools;

    // Apply protocol filter
    if (protocolFilter !== 'all') {
      filtered = filtered.filter(pool => 
        pool.protocol.toLowerCase().includes(protocolFilter)
      );
    }

    // Apply risk filter
    if (riskFilter !== 'all') {
      filtered = filtered.filter(pool => 
        pool.riskScore.toLowerCase() === riskFilter
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(pool =>
        pool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pool.protocol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort pools
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'apy':
          return b.apy - a.apy; // Descending
        case 'tvl':
          return parseTVL(b.tvl) - parseTVL(a.tvl); // Descending
        case 'risk':
          return getRiskScore(a.riskScore) - getRiskScore(b.riskScore); // Ascending (Low to High)
        case 'protocol':
          return a.protocol.localeCompare(b.protocol); // Alphabetical
        default:
          return 0;
      }
    });

    return sorted;
  }, [pools, protocolFilter, riskFilter, sortBy, searchTerm]);

  // Get unique protocols for filter options
  const availableProtocols = useMemo(() => {
    const protocols = Array.from(new Set(pools.map(pool => pool.protocol.toLowerCase())));
    return protocols.sort();
  }, [pools]);

  // Reset all filters
  const resetFilters = () => {
    setProtocolFilter('all');
    setRiskFilter('all');
    setSortBy('apy');
    setSearchTerm('');
  };

  return {
    // Filtered data
    filteredPools: filteredAndSortedPools,
    totalPools: pools.length,
    filteredCount: filteredAndSortedPools.length,
    
    // Filter states
    protocolFilter,
    riskFilter,
    sortBy,
    searchTerm,
    
    // Filter setters
    setProtocolFilter,
    setRiskFilter,
    setSortBy,
    setSearchTerm,
    resetFilters,
    
    // Helper data
    availableProtocols
  };
}; 