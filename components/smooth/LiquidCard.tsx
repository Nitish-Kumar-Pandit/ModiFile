"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassEffect?: boolean;
  magneticHover?: boolean;
}

export default function LiquidCard({
  children,
  className,
  hover = true,
  glassEffect = true,
  magneticHover = false,
}: LiquidCardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-cream-200/50 gpu-accelerated',
        glassEffect && 'backdrop-blur-sm bg-white/80 dark:bg-gray-900/80',
        !glassEffect && 'bg-white dark:bg-gray-900',
        'shadow-lg hover:shadow-2xl transition-all duration-600 ease-silk',
        className
      )}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      whileHover={hover ? {
        y: -8,
        scale: magneticHover ? 1.02 : 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      } : {}}
    >
      {/* Liquid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50/50 via-cream-50/30 to-coral-100/50 opacity-0 hover:opacity-100 transition-opacity duration-600" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-coral-500/20 via-cream-300/20 to-coral-500/20 opacity-0 hover:opacity-100 transition-opacity duration-600" />
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent hover:animate-shimmer" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-coral-400/30 rounded-full animate-float" />
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-cream-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-coral-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </motion.div>
  );
}
