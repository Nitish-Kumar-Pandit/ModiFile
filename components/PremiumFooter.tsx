"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagneticHover } from './smooth';

export default function PremiumFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <MagneticHover>
                <Link href="/" className="inline-block mb-6">
                  <Image 
                    src="/images/modifile-logo.svg" 
                    alt="ModiFile Logo" 
                    width={200} 
                    height={60}
                    className="h-12 w-auto"
                  />
                </Link>
              </MagneticHover>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                Transform any file format with professional quality and lightning speed. 
                The most powerful, beautiful, and intuitive file conversion platform.
              </p>

              {/* Social Links */}
              <div className="flex space-x-6">
                {[
                  { name: 'GitHub', href: 'https://github.com', icon: '🐙' },
                  { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
                  { name: 'Discord', href: 'https://discord.com', icon: '💬' },
                  { name: 'Email', href: 'mailto:hello@modifile.com', icon: '📧' }
                ].map((social) => (
                  <MagneticHover key={social.name}>
                    <Link
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </Link>
                  </MagneticHover>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Features', href: '/features' },
                  { name: 'About', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'API', href: '/api' },
                  { name: 'Blog', href: '/blog' }
                ].map((link) => (
                  <li key={link.name}>
                    <MagneticHover>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        {link.name}
                      </Link>
                    </MagneticHover>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Help Center', href: '/help' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                  { name: 'GDPR', href: '/gdpr' },
                  { name: 'Status', href: '/status' }
                ].map((link) => (
                  <li key={link.name}>
                    <MagneticHover>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        {link.name}
                      </Link>
                    </MagneticHover>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © 2024 ModiFile. All rights reserved. Made with ❤️ for creators worldwide.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  All systems operational
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                  99.9% uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
