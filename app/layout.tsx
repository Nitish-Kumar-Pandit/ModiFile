import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/navbar";
import { Toaster } from "../components/ui/toaster";
import { ThemeProvider } from "../components/theme-provider";
import PageTransition from "../components/page-transition";
import ErrorBoundary from "../components/ErrorBoundary";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";
import FloatingThemeToggle from "../components/ScrollToTop";
const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
    title: "ModiFile - Transform Files",
    description: `Silky smooth file conversion that feels like butter. Experience ModiFile – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions.
  Smooth as butter, fast as lightning.`,
    creator: "ModiFile Team",
    keywords: "file converter, image converter, video converter, audio converter, smooth file conversion, unlimited converter, modifile",
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#6366f1" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />



                {/* Development cache control and scripts */}
                {process.env.NODE_ENV === 'development' && (
                    <>
                        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                        <meta httpEquiv="Pragma" content="no-cache" />
                        <meta httpEquiv="Expires" content="0" />
                        <script src="/cache-buster.js" defer />
                        <script src="/force-refresh.js" defer />
                        <script src="/suppress-warnings.js" defer />
                        <script src="/debug-errors.js" defer />
                    </>
                )}
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <ServiceWorkerRegistration />
                    <Navbar />
                    <Toaster />
                    <ErrorBoundary>
                        <div className="min-h-screen">
                            <PageTransition>
                                {children}
                            </PageTransition>
                            {/* <PremiumFooter /> */}
                            <FloatingThemeToggle />
                        </div>
                    </ErrorBoundary>
                </ThemeProvider>

                {/* Google Analytics with comprehensive error handling */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-52GQ441X7H"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        try {
                            if (typeof window !== 'undefined') {
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){
                                    try {
                                        dataLayer.push(arguments);
                                    } catch (e) {
                                        console.log('GA dataLayer push failed:', e);
                                    }
                                }
                                gtag('js', new Date());
                                gtag('config', 'G-52GQ441X7H', {
                                    page_path: window.location.pathname,
                                });
                            }
                        } catch (error) {
                            console.log('Google Analytics initialization failed:', error);
                        }
                    `}
                </Script>
            </body>
        </html>
    );
}
