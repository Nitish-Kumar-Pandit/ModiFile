"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // Log additional context for debugging
        console.error('Error stack:', error.stack);
        console.error('Component stack:', errorInfo.componentStack);

        // Try to identify common issues
        if (error.message.includes('document is not defined')) {
            console.error('SSR/Hydration issue: document accessed during server-side rendering');
        }
        if (error.message.includes('window is not defined')) {
            console.error('SSR/Hydration issue: window accessed during server-side rendering');
        }
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
                    <div className="max-w-md w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/20 shadow-xl p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-8 h-8 text-white" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Oops! Something went wrong
                        </h2>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            We encountered an unexpected error. Don&apos;t worry, your files are safe and secure.
                        </p>

                        {typeof window !== 'undefined' && this.state.error && (
                            <details className="mb-6 text-left">
                                <summary className="cursor-pointer text-sm text-slate-500 dark:text-slate-400 mb-2">
                                    Error Details (Development)
                                </summary>
                                <pre className="text-xs bg-slate-100 dark:bg-slate-700 p-3 rounded-lg overflow-auto max-h-32">
                                    {this.state.error.message}
                                </pre>
                            </details>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={this.handleReset}
                                className="flex-1 px-6 py-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Try Again
                            </button>

                            <button
                                onClick={this.handleReload}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 flex items-center justify-center"
                            >
                                Reload Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
