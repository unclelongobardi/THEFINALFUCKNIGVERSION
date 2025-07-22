import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  minimal?: boolean;
  variant?: 'default' | 'data' | 'accent' | 'success' | 'warning';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  minimal = true,
  variant = 'default'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'accent':
        return 'border-institutional-accent/30 bg-institutional-accent/5';
      case 'success':
        return 'border-institutional-success/30 bg-institutional-success/5';
      case 'warning':
        return 'border-institutional-warning/30 bg-institutional-warning/5';
      case 'data':
        return 'border-institutional-border/40 bg-institutional-secondary/60';
      default:
        return 'border-institutional-border/30 bg-institutional-secondary/80';
    }
  };

  const hoverEffects = hover
    ? {
        scale: 1.02,
        y: -5,
      }
    : {};

  return (
    <motion.div
      whileHover={hoverEffects}
      className={`
        relative backdrop-blur-sm border rounded-lg p-6 shadow-lg
        ${getVariantClasses()}
        ${hover ? 'cursor-pointer professional-hover' : ''}
        ${minimal ? 'transition-all duration-200' : ''}
        ${className}
      `}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 rounded-lg opacity-10 bg-gradient-to-br from-institutional-accent/5 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValue;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}{Math.round(displayValue * 10) / 10}{suffix}
    </span>
  );
};

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  tooltip?: string;
  variant?: 'primary' | 'secondary';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  tooltip,
  variant = 'primary'
}) => {
  const variants = {
    primary: 'bg-institutional-accent hover:bg-institutional-accent/90',
    secondary: 'bg-institutional-secondary border border-institutional-border'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg
        flex items-center justify-center text-white z-50
        ${variants[variant]}
        backdrop-blur-sm hover:shadow-xl transition-all
      `}
      title={tooltip}
    >
      {icon}
    </motion.button>
  );
};

interface PulsingDotProps {
  color?: 'green' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export const PulsingDot: React.FC<PulsingDotProps> = ({
  color = 'green',
  size = 'md'
}) => {
  const colorClasses = {
    green: 'bg-institutional-success',
    yellow: 'bg-institutional-warning',
    red: 'bg-institutional-error'
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`} />
      <div className={`absolute inset-0 ${colorClasses[color]} rounded-full animate-ping opacity-75`} />
    </div>
  );
};

export default GlassCard; 