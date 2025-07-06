"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 1.02,
    },
};

const pageTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
};

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [routeKey, setRouteKey] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Force re-render on route change to trigger animation
        setRouteKey(prev => prev + 1);
    }, [pathname]);

    if (!mounted) {
        return <div className="w-full">{children}</div>;
    }

    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.div
                key={`${pathname}-${routeKey}`}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
                style={{
                    // Hardware acceleration
                    transform: "translateZ(0)",
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
