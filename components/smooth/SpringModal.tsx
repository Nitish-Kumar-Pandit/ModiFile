"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface SpringModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnBackdropClick?: boolean;
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export default function SpringModal({
  isOpen,
  onClose,
  children,
  className,
  size = 'md',
  closeOnBackdropClick = true,
}: SpringModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnBackdropClick ? onClose : undefined}
          />
          
          {/* Modal */}
          <motion.div
            className={cn(
              'relative w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden',
              'border border-cream-200/50 backdrop-blur-sm',
              sizes[size],
              className
            )}
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: -15 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: -15 
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-cream-700 hover:text-cream-900 transition-colors duration-200"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
            >
              <X size={20} />
            </motion.button>
            
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral-50/30 via-cream-50/20 to-coral-100/30" />
            
            {/* Content */}
            <div className="relative z-10">
              {children}
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-8 right-16 w-2 h-2 bg-coral-400/20 rounded-full animate-float" />
            <div className="absolute bottom-12 left-8 w-1 h-1 bg-cream-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-coral-300/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
