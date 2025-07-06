"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FluidProgressProps {
  value: number; // 0-100
  className?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'wave' | 'liquid';
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
};

export default function FluidProgress({
  value,
  className,
  showPercentage = false,
  variant = 'default',
  size = 'md',
}: FluidProgressProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  if (variant === 'wave') {
    return (
      <div className={cn('relative w-full', sizes[size], className)}>
        <div className="absolute inset-0 bg-cream-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600 relative"
            initial={{ width: 0 }}
            animate={{ width: `${clampedValue}%` }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1.1
            }}
          >
            {/* Wave effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave-flow" />
            
            {/* Liquid bubbles */}
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-liquid-pulse" />
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-liquid-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>
        </div>
        
        {showPercentage && (
          <motion.span
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-2 text-sm font-medium text-coral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {Math.round(clampedValue)}%
          </motion.span>
        )}
      </div>
    );
  }

  if (variant === 'liquid') {
    return (
      <div className={cn('relative w-full', sizes[size], className)}>
        <div className="absolute inset-0 bg-cream-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${clampedValue}%` }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              mass: 1.2
            }}
          >
            {/* Liquid gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600" />
            
            {/* Liquid surface animation */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,10 Q25,5 50,10 T100,10 L100,20 L0,20 Z"
                fill="rgba(255,255,255,0.2)"
                animate={{
                  d: [
                    "M0,10 Q25,5 50,10 T100,10 L100,20 L0,20 Z",
                    "M0,10 Q25,15 50,10 T100,10 L100,20 L0,20 Z",
                    "M0,10 Q25,5 50,10 T100,10 L100,20 L0,20 Z"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        </div>
        
        {showPercentage && (
          <motion.span
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-2 text-sm font-medium text-coral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {Math.round(clampedValue)}%
          </motion.span>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('relative w-full', sizes[size], className)}>
      <div className="absolute inset-0 bg-cream-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-coral-500 to-coral-600 rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
      
      {showPercentage && (
        <motion.span
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-2 text-sm font-medium text-coral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Math.round(clampedValue)}%
        </motion.span>
      )}
    </div>
  );
}
