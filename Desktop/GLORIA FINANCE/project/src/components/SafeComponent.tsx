import React, { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface SafeComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

const SafeComponent: React.FC<SafeComponentProps> = ({ 
  children, 
  fallback, 
  componentName = 'Component' 
}) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error(`SafeComponent caught error in ${componentName}:`, error);
    
    if (fallback) {
      return <>{fallback}</>;
    }
    
    return (
      <div className="flex items-center justify-center p-8 bg-slate-800/50 rounded-lg border border-red-400/20">
        <div className="text-center">
          <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <div className="text-red-400 font-semibold">Error in {componentName}</div>
          <div className="text-slate-400 text-sm">This section couldn't load properly</div>
        </div>
      </div>
    );
  }
};

export default SafeComponent; 