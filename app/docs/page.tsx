import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation - ModiFile",
    description: "Learn how to use ModiFile for all your file conversion needs",
};

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Documentation
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                        Coming soon - Comprehensive guides and API documentation
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
                        <p className="text-slate-700 dark:text-slate-300">
                            We&apos;re preparing detailed documentation to help you get the most out of ModiFile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
