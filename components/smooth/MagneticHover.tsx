"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MagneticHoverProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0-1, how strong the magnetic effect is
  distance?: number; // pixels, how far the effect reaches
  disabled?: boolean;
}

export default function MagneticHover({
  children,
  className,
  strength = 0.3,
  distance = 100,
  disabled = false,
}: MagneticHoverProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const element = elementRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distanceFromCenter < distance) {
        const moveX = (deltaX / distance) * strength * 20;
        const moveY = (deltaY / distance) * strength * 20;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, distance, disabled]);

  return (
    <div
      ref={elementRef}
      className={cn('relative transition-transform duration-300 ease-out', className)}
    >
      {children}
    </div>
  );
}
