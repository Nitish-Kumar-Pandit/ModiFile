"use client";

import React from 'react';
import { MagneticHover } from './smooth';
import {
  FileImage, FileVideo, FileAudio, FileText,
  Zap, Shield, Globe, Star,
  Layers, Download, Upload, Settings
} from 'lucide-react';

const features = [
  {
    icon: FileImage,
    title: "Image Conversion",
    description: "Transform images between 50+ formats including JPG, PNG, WEBP, AVIF, and more with pixel-perfect quality.",
    gradient: "from-blue-500 to-cyan-500",
    formats: ["JPG", "PNG", "WEBP", "AVIF", "GIF"]
  },
  {
    icon: FileVideo,
    title: "Video Processing",
    description: "Convert, compress, and optimize videos in 30+ formats. Support for 4K, HDR, and professional codecs.",
    gradient: "from-purple-500 to-pink-500",
    formats: ["MP4", "AVI", "MOV", "WEBM", "MKV"]
  },
  {
    icon: FileAudio,
    title: "Audio Transformation",
    description: "High-fidelity audio conversion supporting lossless and compressed formats with custom quality settings.",
    gradient: "from-green-500 to-emerald-500",
    formats: ["MP3", "WAV", "FLAC", "AAC", "OGG"]
  },
  {
    icon: FileText,
    title: "Document Conversion",
    description: "Convert documents, presentations, and spreadsheets while preserving formatting and metadata.",
    gradient: "from-orange-500 to-red-500",
    formats: ["PDF", "DOCX", "XLSX", "PPTX", "TXT"]
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by WebAssembly for near-native performance. Convert files in seconds, not minutes.",
    gradient: "from-yellow-500 to-orange-500",
    formats: ["WASM", "GPU", "FAST", "EDGE", "CDN"]
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "All processing happens in your browser. Your files never leave your device, ensuring complete privacy.",
    gradient: "from-indigo-500 to-purple-500",
    formats: ["LOCAL", "SAFE", "GDPR", "SOC2", "ISO"]
  }
];

const stats = [
  { number: "200+", label: "File Formats" },
  { number: "10M+", label: "Files Converted" },
  { number: "99.9%", label: "Uptime" },
  { number: "0ms", label: "Server Delay" }
];

export default function PremiumFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
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
          {features.map((feature, index) => (
            <MagneticHover key={index}>
              <div className="group relative p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Format Badges */}
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

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </MagneticHover>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Upload, title: "Upload", description: "Drag & drop or select your files" },
              { icon: Settings, title: "Configure", description: "Choose format and quality settings" },
              { icon: Download, title: "Download", description: "Get your converted files instantly" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5 shadow-xl">
                  <step.icon className="w-full h-full text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
