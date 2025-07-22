import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '-20px 0px'
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, opacity: 0 };
      case 'down': return { y: -60, opacity: 0 };
      case 'left': return { x: -60, opacity: 0 };
      case 'right': return { x: 60, opacity: 0 };
      case 'fade': return { opacity: 0, scale: 0.95 };
      default: return { y: 60, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'fade': return { opacity: 1, scale: 1 };
      default: return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
        type: "spring",
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 