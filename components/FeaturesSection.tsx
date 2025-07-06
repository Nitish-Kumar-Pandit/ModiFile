"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidCard, MagneticHover } from './smooth';
import { Zap, Waves, Folder, Star } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Buttery Smooth 🧈',
    description: 'Every interaction feels like silk. Ultra-smooth animations at 60fps make file conversion a delightful experience.',
    gradient: 'from-coral-400 to-coral-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast ⚡',
    description: 'WebAssembly-powered conversion engine processes your files at blazing speed without compromising quality.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Waves,
    title: 'Zero Friction 🌊',
    description: 'Drag, drop, convert. No sign-ups, no limits, no hassle. Just pure, frictionless file transformation.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Folder,
    title: '100+ Formats 📁',
    description: 'Support for all major image, video, and audio formats. Convert between any format with pixel-perfect precision.',
    gradient: 'from-green-400 to-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-coral-600 to-coral-800 bg-clip-text text-transparent mb-4">
            Why Choose ModiFile?
          </h2>
          <p className="text-lg md:text-xl text-cream-700 max-w-2xl mx-auto">
            Experience file conversion like never before with our ultra-smooth, butter-like interface
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MagneticHover strength={0.15} distance={60}>
                <LiquidCard
                  className="h-full p-8 group cursor-pointer"
                  magneticHover={true}
                >
                  <div className="space-y-4">
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      {/* Floating sparkle */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-coral-400/60 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-coral-800 group-hover:text-coral-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-cream-700 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className="w-0 h-1 bg-gradient-to-r from-coral-500 to-coral-600 rounded-full group-hover:w-full transition-all duration-500 ease-silk"
                    />
                  </div>
                </LiquidCard>
              </MagneticHover>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.5,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'File Formats' },
              { number: '∞', label: 'Conversions' },
              { number: '60fps', label: 'Smooth Animations' },
              { number: '0ms', label: 'Loading Time' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: index * 0.1 + 0.7,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-coral-600 to-coral-800 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-cream-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
