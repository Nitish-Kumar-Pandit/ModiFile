"use client";

import React from 'react';
import { SmoothButton, MagneticHover } from './smooth';
import { FileImage, FileVideo, FileAudio, FileText, ArrowRight, Star, Zap, Shield } from 'lucide-react';

const floatingFiles = [
  { Icon: FileImage, name: "JPG", color: "from-blue-500 to-cyan-500", delay: 0 },
  { Icon: FileVideo, name: "MP4", color: "from-purple-500 to-pink-500", delay: 0.5 },
  { Icon: FileAudio, name: "MP3", color: "from-green-500 to-emerald-500", delay: 1 },
  { Icon: FileText, name: "PDF", color: "from-orange-500 to-red-500", delay: 1.5 },
];

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Star className="w-4 h-4 mr-2 text-indigo-500" />
              Transform Any File, Instantly
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                Convert Files
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Like Magic
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The most powerful, beautiful, and intuitive file conversion platform. 
              Transform any file format with professional-grade quality in seconds.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticHover>
              <SmoothButton
                size="xl"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-3xl backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  document.getElementById('dropzone')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Converting Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </SmoothButton>
            </MagneticHover>
            
            <MagneticHover>
              <SmoothButton
                variant="outline"
                size="xl"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn More
              </SmoothButton>
            </MagneticHover>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              100% Secure & Private
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              No File Size Limits
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              200+ Formats Supported
            </div>
          </div>
        </div>

        {/* Floating File Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingFiles.map(({ Icon, name, color, delay }, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + (index % 2) * 40}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} shadow-2xl backdrop-blur-sm border border-white/20`}>
                <Icon className="w-8 h-8 text-white" />
                <div className="text-xs text-white font-medium mt-1">{name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion Flow Visualization */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileImage className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 animate-pulse" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FileVideo className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 animate-pulse" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <FileAudio className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
