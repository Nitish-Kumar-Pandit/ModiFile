'use client';

export default function CTAButton() {
  const handleClick = () => {
    const dropzoneElement = document.getElementById('dropzone');
    if (dropzoneElement) {
      dropzoneElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
      <button
        onClick={handleClick}
        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/20"
      >
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Start Converting Now</span>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
      </button>

      <p className="mt-6 text-sm text-slate-400 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
        No signup required • 100% secure • Lightning fast
      </p>
    </div>
  );
}
