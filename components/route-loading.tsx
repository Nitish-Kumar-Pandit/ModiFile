"use client";

import { motion } from "framer-motion";

export default function RouteLoading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
            style={{
                // Hardware acceleration
                transform: "translateZ(0)",
                willChange: "opacity",
            }}
        >
            <div className="flex flex-col items-center space-y-4">
                {/* Animated logo or spinner */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full"
                />
                
                {/* Loading text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    );
}
