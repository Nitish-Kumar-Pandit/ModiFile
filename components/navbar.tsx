"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";
import { MagneticHover } from "./smooth/index";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                setIsScrolled(window.scrollY > 80);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-16 py-2 ${
            isScrolled
                ? 'backdrop-blur-xl shadow-lg'
                : 'bg-transparent'
        }`}>
            {/* Glassmorphism background overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
                isScrolled
                    ? 'opacity-100 bg-gradient-to-r from-white/5 via-white/10 to-white/5 dark:from-slate-900/5 dark:via-slate-900/10 dark:to-slate-900/5'
                    : 'opacity-0'
            }`} />

            <div className="relative z-10 flex items-center justify-between w-full h-full px-4 mx-auto max-w-6xl md:px-6 lg:px-8">
                {/* Logo Section */}
                <MagneticHover className="flex-shrink-0">
                    <Link
                        href="/"
                        className="flex items-center space-x-3"
                        prefetch={true}
                        style={{
                            // Hardware acceleration
                            transform: "translateZ(0)",
                            willChange: "transform",
                        }}
                    >
                        <div>
                            <Image
                                alt="ModiFile Logo"
                                className="w-auto h-10"
                                src="/images/modifile-logo.svg"
                                height={40}
                                width={160}
                                priority
                            />
                        </div>
                    </Link>
                </MagneticHover>
                {/* Desktop Navigation - Right Aligned */}
                <div className="hidden md:flex items-center space-x-1 ml-auto">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <MagneticHover key={item.href} strength={0.2} distance={40}>
                                <Link
                                    href={item.href}
                                    className="relative group"
                                    prefetch={true}
                                    style={{
                                        // Hardware acceleration for smooth transitions
                                        transform: "translateZ(0)",
                                        willChange: "transform",
                                    }}
                                >
                                    <Button
                                        variant="ghost"
                                        className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-transparent ${
                                            isActive
                                                ? 'text-indigo-600 dark:text-indigo-400'
                                                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                                        }`}
                                    >
                                        {item.label}
                                        {/* Underline animation - only for active state */}
                                        <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-200 transform -translate-x-1/2 ${
                                            isActive
                                                ? 'w-full opacity-100'
                                                : 'w-0 opacity-0'
                                        }`} />

                                    </Button>
                                </Link>
                            </MagneticHover>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    isScrolled
                                        ? 'bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20'
                                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                            >
                                <LuMenu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-white/20 dark:border-slate-700/20"
                        >
                            <SheetHeader className="text-left">
                                <SheetTitle>
                                    <Image
                                        src="/images/modifile-logo.svg"
                                        alt="ModiFile Logo"
                                        width={160}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </SheetTitle>
                                <SheetDescription className="text-slate-600 dark:text-slate-400">
                                    Transform any file, instantly
                                </SheetDescription>
                            </SheetHeader>

                            {/* Mobile Navigation Items */}
                            <div className="mt-8 space-y-2">
                                {navigationItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <MagneticHover key={item.href} strength={0.2} distance={30}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block"
                                                prefetch={true}
                                                style={{
                                                    // Hardware acceleration
                                                    transform: "translateZ(0)",
                                                    willChange: "transform",
                                                }}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    className={`w-full justify-start text-left p-4 h-auto rounded-xl transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                                                    }`}
                                                >
                                                    <span className="text-lg font-medium">
                                                        {item.label}
                                                    </span>
                                                    {isActive && (
                                                        <span className="ml-auto w-2 h-2 bg-indigo-500 rounded-full" />
                                                    )}
                                                </Button>
                                            </Link>
                                        </MagneticHover>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
