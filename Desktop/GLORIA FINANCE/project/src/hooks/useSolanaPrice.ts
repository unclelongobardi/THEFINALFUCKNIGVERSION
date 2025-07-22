import { useState, useEffect } from 'react';

interface SolanaPriceData {
  price: number;
  change24h: number;
  isLoading: boolean;
  error: string | null;
}

export const useSolanaPrice = (): SolanaPriceData => {
  const [priceData, setPriceData] = useState<SolanaPriceData>({
    price: 0,
    change24h: 0,
    isLoading: true,
    error: null,
  });

  const fetchSolanaPrice = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch Solana price');
      }

      const data = await response.json();
      
      setPriceData({
        price: data.solana.usd,
        change24h: data.solana.usd_24h_change,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setPriceData(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  };

  useEffect(() => {
    // Fetch immediately
    fetchSolanaPrice();
    
    // Set up interval to fetch every 30 seconds
    const interval = setInterval(fetchSolanaPrice, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return priceData;
}; 