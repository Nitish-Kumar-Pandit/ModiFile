"use client";

import { motion } from "framer-motion";
import { MagneticHover } from "@/components/smooth";
import { Zap, Shield, Globe, Heart, FileImage, FileVideo, FileAudio, FileText, Users, Award, Star } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="space-y-6"
                        style={{
                            // Hardware acceleration
                            transform: "translateZ(0)",
                            willChange: "transform, opacity",
                        }}
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-lg">
                            ✨ About ModiFile
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            <span className="block bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                                Transform Files
                            </span>
                            <span className="block pb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Like Magic
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We believe file conversion should be instant, secure, and beautiful.
                            ModiFile makes the impossible feel effortless.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Our Mission
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            To democratize file conversion and make it accessible to everyone, everywhere
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Lightning Fast",
                                description: "Convert files in seconds with our optimized WebAssembly engine",
                                color: "from-yellow-500 to-orange-500"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "100% Secure",
                                description: "All processing happens locally in your browser. Your files never leave your device",
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Universal Access",
                                description: "Works on any device, any browser, anywhere in the world",
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Made with Love",
                                description: "Crafted with attention to detail and user experience in mind",
                                color: "from-pink-500 to-rose-500"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group"
                                style={{
                                    // Hardware acceleration
                                    transform: "translateZ(0)",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <MagneticHover strength={0.3} distance={50}>
                                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl p-8 group-hover:shadow-2xl transition-all duration-500 text-center">
                                        <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </MagneticHover>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Support Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            What We Support
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            From images to videos, audio to documents - we handle it all with professional quality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FileImage className="w-8 h-8" />,
                                title: "Images",
                                description: "JPG, PNG, WEBP, AVIF, GIF, BMP, TIFF, SVG, ICO, PSD, RAW, HEIC",
                                color: "from-blue-500 to-cyan-500",
                                count: "50+"
                            },
                            {
                                icon: <FileVideo className="w-8 h-8" />,
                                title: "Videos",
                                description: "MP4, AVI, MOV, WEBM, MKV, FLV, WMV, 3GP, M4V, OGV, TS, VOB",
                                color: "from-purple-500 to-pink-500",
                                count: "30+"
                            },
                            {
                                icon: <FileAudio className="w-8 h-8" />,
                                title: "Audio",
                                description: "MP3, WAV, FLAC, AAC, OGG, WMA, M4A, AIFF, AU, RA, AMR, AC3",
                                color: "from-green-500 to-emerald-500",
                                count: "25+"
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Documents",
                                description: "PDF, DOCX, XLSX, PPTX, TXT, RTF, ODT, ODS, ODP, EPUB, MOBI",
                                color: "from-orange-500 to-red-500",
                                count: "20+"
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <MagneticHover strength={0.3} distance={50}>
                                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl p-8 group-hover:shadow-2xl transition-all duration-500">
                                        <div className="flex items-center mb-6">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mr-4`}>
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                    {category.title}
                                                </h3>
                                                <span className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                                    {category.count} formats
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            {category.description}
                                        </p>
                                    </div>
                                </MagneticHover>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Trusted by Creators Worldwide
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Join thousands of professionals who trust ModiFile for their conversion needs
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "125+", label: "File Formats", icon: <Star className="w-6 h-6" /> },
                            { number: "50K+", label: "Files Converted", icon: <FileImage className="w-6 h-6" /> },
                            { number: "99.9%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
                            { number: "10K+", label: "Happy Users", icon: <Users className="w-6 h-6" /> }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group text-center"
                            >
                                <MagneticHover strength={0.2} distance={30}>
                                    <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/20 p-8 group-hover:scale-105 transition-all duration-300">
                                        <div className="text-indigo-500 dark:text-indigo-400 mb-4 flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </MagneticHover>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/30 animate-gradient-shift"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/30 to-blue-100/30 dark:from-transparent dark:via-purple-800/10 dark:to-blue-800/10 animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
                            Ready to Experience
                            <span className="block pb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                The Magic?
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Join thousands of creators who have discovered the power of effortless file conversion
                        </p>
                        <MagneticHover strength={0.4} distance={60}>
                            <button
                                onClick={() => {
                                    // Navigate to home page and scroll to ready to start section
                                    window.location.href = '/#ready-to-start';
                                }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                <div className="flex items-center space-x-2">
                                    <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Start Converting Now</span>
                                    <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                </div>
                            </button>
                        </MagneticHover>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
