import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - ModiFile",
    description: "Get in touch with the ModiFile team",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                        We&apos;d love to hear from you. Get in touch with our team.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
                        <p className="text-slate-700 dark:text-slate-300">
                            Contact form coming soon. For now, reach out to us directly!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
