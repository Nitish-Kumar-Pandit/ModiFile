'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, FileImage, ArrowRight } from 'lucide-react';
import DropzoneWrapper from '@/components/DropzoneWrapper';



export default function Home() {
  const [isDragActive, setIsDragActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file drop - scroll to conversion section
    if (typeof window !== 'undefined') {
      const readyToStartSection = document.getElementById('ready-to-start');
      if (readyToStartSection) {
        readyToStartSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive: dropzoneActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'],
      'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
      'application/pdf': ['.pdf'],
      'text/*': ['.txt', '.csv', '.json'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const handleStartConverting = () => {
    if (typeof window !== 'undefined') {
      const readyToStartSection = document.getElementById('ready-to-start');
      if (readyToStartSection) {
        readyToStartSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-800">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading ModiFile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Minimalist Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 via-transparent to-blue-100/50 dark:from-purple-900/10 dark:via-transparent dark:to-blue-900/10 animate-pulse" style={{ animationDuration: '4s' }} />
        </div>

        {/* Floating File Format Badges - Hidden on Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          {/* PDF Badge */}
          <div className="absolute top-24 left-12 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>
            <div className="w-20 h-20 bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-red-600 dark:text-red-400 hover:scale-110 hover:bg-red-500/30 transition-all duration-300">
              <FileText className="w-8 h-8 mb-1" />
              <span className="text-xs font-bold">PDF</span>
            </div>
          </div>

          {/* JPG Badge */}
          <div className="absolute top-48 left-8 animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }}>
            <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 hover:scale-110 hover:bg-blue-500/30 transition-all duration-300">
              <FileImage className="w-8 h-8 mb-1" />
              <span className="text-xs font-bold">JPG</span>
            </div>
          </div>

          {/* PNG Badge */}
          <div className="absolute bottom-48 left-16 animate-float" style={{ animationDelay: '3s', animationDuration: '8s' }}>
            <div className="w-20 h-20 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-green-600 dark:text-green-400 hover:scale-110 hover:bg-green-500/30 transition-all duration-300">
              <FileImage className="w-8 h-8 mb-1" />
              <span className="text-xs font-bold">PNG</span>
            </div>
          </div>

          {/* DOCX Badge */}
          <div className="absolute bottom-24 left-10 animate-float" style={{ animationDelay: '4.5s', animationDuration: '6.5s' }}>
            <div className="w-20 h-20 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-purple-600 dark:text-purple-400 hover:scale-110 hover:bg-purple-500/30 transition-all duration-300">
              <FileText className="w-8 h-8 mb-1" />
              <span className="text-xs font-bold">DOCX</span>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Professional Badge
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border border-orange-400/30 text-orange-800 dark:text-orange-200 text-sm font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
              <span className="mr-3 text-lg animate-pulse">⭐</span>
              Transform Any File, Instantly
            </div>
          </div> */}

          {/* Centered Content */}
          <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>

            {/* Compelling Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tight">
              Convert Files
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                Like Magic
              </span>
            </h1>

            {/* Value Proposition Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
              The most powerful, beautiful, and intuitive file conversion platform.
              <br className="hidden sm:block" />
              Transform any file format with professional-grade quality in seconds.
            </p>

            {/* Simple Conversion Flow Animation */}
            <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 dark:border-slate-700/20">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">FILE</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                <ArrowRight className="w-6 h-6 text-purple-600 animate-pulse" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
              </div>

              <div className="flex items-center space-x-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 dark:border-slate-700/20">
                <FileImage className="w-6 h-6 text-green-600" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">CONVERTED</span>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={handleStartConverting}
                className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 mb-6"
              >
                <div className="flex items-center space-x-3">
                  <span>Start Converting Now</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                No signup required • 100% secure • Lightning fast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section id="ready-to-start" className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Convert?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Drop your files below and experience the magic of instant conversion
            </p>
          </div>
          <DropzoneWrapper />
        </div>
      </section>



          {/* Features Section */}
          <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

            <div className="relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
                  ✨ Powerful Features
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                  Everything You Need for
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                    Perfect Conversions
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Professional-grade file conversion with enterprise security,
                  blazing-fast performance, and support for every format you need.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    title: "Image Conversion",
                    description: "Transform images between 50+ formats including JPG, PNG, WEBP, AVIF, and more with pixel-perfect quality.",
                    gradient: "from-blue-500 to-cyan-500",
                    formats: ["JPG", "PNG", "WEBP", "AVIF", "GIF"]
                  },
                  {
                    title: "Video Processing",
                    description: "Convert, compress, and optimize videos in 30+ formats. Support for 4K, HDR, and professional codecs.",
                    gradient: "from-purple-500 to-pink-500",
                    formats: ["MP4", "AVI", "MOV", "WEBM", "MKV"]
                  },
                  {
                    title: "Audio Transformation",
                    description: "High-fidelity audio conversion supporting lossless and compressed formats with custom quality settings.",
                    gradient: "from-green-500 to-emerald-500",
                    formats: ["MP3", "WAV", "FLAC", "AAC", "OGG"]
                  },
                  {
                    title: "Document Conversion",
                    description: "Convert documents, presentations, and spreadsheets while preserving formatting and metadata.",
                    gradient: "from-orange-500 to-red-500",
                    formats: ["PDF", "DOCX", "XLSX", "PPTX", "TXT"]
                  },
                  {
                    title: "Lightning Fast",
                    description: "Powered by WebAssembly for near-native performance. Convert files in seconds, not minutes.",
                    gradient: "from-yellow-500 to-orange-500",
                    formats: ["WASM", "GPU", "FAST", "EDGE", "CDN"]
                  },
                  {
                    title: "100% Secure",
                    description: "All processing happens in your browser. Your files never leave your device, ensuring complete privacy.",
                    gradient: "from-indigo-500 to-purple-500",
                    formats: ["LOCAL", "SAFE", "GDPR", "SOC2", "ISO"]
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white text-2xl font-bold`}>
                      {feature.title.charAt(0)}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {feature.formats.map((format) => (
                        <span
                          key={format}
                          className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                        >
                          {format}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

            <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                  How It Works
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Three simple steps to transform any file with professional quality
                </p>
              </div>

              {/* Process Steps */}
              <div className="relative">
                {/* Background Connection Lines */}
                <div className="hidden md:block absolute top-20 left-0 right-0 h-px">
                  <div className="flex items-center justify-between h-full max-w-4xl mx-auto px-12">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300 dark:from-transparent dark:via-slate-700 dark:to-slate-600"></div>
                    <div className="w-8"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent dark:from-slate-600 dark:via-slate-700 dark:to-transparent"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                  {[
                    {
                      step: "01",
                      title: "Upload Your Files",
                      description: "Drag & drop or click to select files from your device. Support for batch uploads and all major file formats.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      ),
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      step: "02",
                      title: "Choose Format & Settings",
                      description: "Select your desired output format and customize quality settings. Preview changes in real-time.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      step: "03",
                      title: "Download Results",
                      description: "Get your converted files instantly. Download individually or as a zip file for batch conversions.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      color: "from-green-500 to-emerald-500"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative group">
                      {/* Animated Line Behind This Step Only */}
                      {index < 2 && (
                        <div className="hidden md:block absolute top-20 left-1/2 w-full h-px z-0 pointer-events-none">
                          <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                        </div>
                      )}

                      <div className="relative z-10 text-center">
                        {/* Step Number Badge */}
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold text-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-200 dark:border-slate-700">
                          {step.step}
                        </div>

                        {/* Icon Container */}
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                          {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Flow Visualization */}
              <div className="relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-cyan-600/5" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    Live Conversion Flow
                  </h3>

                  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Input File */}
                    <div className="group text-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center text-white mb-3">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">INPUT.jpg</div>
                    </div>

                    {/* Arrow */}
                    <div className="text-2xl text-indigo-400">
                      {/* Right arrow for desktop */}
                      <svg className="w-6 h-6 animate-pulse hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      {/* Down arrow for mobile */}
                      <svg className="w-6 h-6 animate-pulse block md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Processing */}
                    <div className="group text-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center text-white mb-3">
                        <svg className="w-8 h-8 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">CONVERTING</div>
                    </div>

                    {/* Arrow */}
                    <div className="text-2xl text-indigo-400">
                      {/* Right arrow for desktop */}
                      <svg className="w-6 h-6 animate-pulse hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      {/* Down arrow for mobile */}
                      <svg className="w-6 h-6 animate-pulse block md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Output File */}
                    <div className="group text-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 flex items-center justify-center text-white mb-3">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">OUTPUT.png</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* Supported Formats Section */}
          <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

            <div className="relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                  50+ Supported Formats
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Convert between any file format with professional quality and lightning speed
                </p>
              </div>

              {/* Format Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {[
                  {
                    category: "Images",
                    icon: "🖼️",
                    color: "from-blue-500 to-cyan-500",
                    formats: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP", "TIFF", "SVG", "ICO", "PSD", "RAW", "HEIC"]
                  },
                  {
                    category: "Videos",
                    icon: "🎥",
                    color: "from-purple-500 to-pink-500",
                    formats: ["MP4", "AVI", "MOV", "WEBM", "MKV", "FLV", "WMV", "3GP", "M4V", "OGV", "TS", "VOB"]
                  },
                  {
                    category: "Audio",
                    icon: "🎵",
                    color: "from-green-500 to-emerald-500",
                    formats: ["MP3", "WAV", "FLAC", "AAC", "OGG", "WMA", "M4A", "AIFF", "AU", "RA", "AMR", "AC3"]
                  },
                  {
                    category: "Documents",
                    icon: "📄",
                    color: "from-orange-500 to-red-500",
                    formats: ["PDF", "DOCX", "XLSX", "PPTX", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "MOBI", "HTML"]
                  }
                ].map((category, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl p-8 group-hover:shadow-2xl transition-all duration-500">
                      {/* Category Header */}
                      <div className="flex items-center mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl`}>
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                            {category.category}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {category.formats.length}+ formats supported
                          </p>
                        </div>
                      </div>

                      {/* Format Badges */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {category.formats.map((format, formatIndex) => (
                          <div
                            key={format}
                            className="group/badge relative overflow-hidden"
                            style={{ animationDelay: `${formatIndex * 0.1}s` }}
                          >
                            <div className="px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-xl text-center font-medium text-slate-700 dark:text-slate-300 group-hover/badge:bg-white dark:group-hover/badge:bg-slate-600 group-hover/badge:scale-105 group-hover/badge:shadow-lg transition-all duration-300 cursor-pointer">
                              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover/badge:opacity-10 transition-opacity duration-300`} />
                              <span className="relative z-10 group-hover/badge:text-indigo-600 dark:group-hover/badge:text-indigo-400 transition-colors duration-300">
                                {format}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-20 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "50+", label: "File Formats", icon: "📁" },
                    { number: "10K+", label: "Files Converted", icon: "🔄" },
                    { number: "99.9%", label: "Success Rate", icon: "✅" },
                    { number: "0ms", label: "Server Delay", icon: "⚡" }
                  ].map((stat, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/20 p-6 group-hover:scale-105 transition-all duration-300">
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
      </section>
    </div>
  );
}
