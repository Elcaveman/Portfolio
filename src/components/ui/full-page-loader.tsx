"use client";

import * as React from "react";

// Full-page modern loading screen styled closer to portfolio theme (dark, gradient accent, elegant)
// Usage: <FullPageLoader message="Loading app..." progress={45} />

export default function FullPageLoader({
  message = "Chargement en cours...",
  progress = null, // set 0-100 to show determinate progress bar; null for indeterminate
}) {
  const pct = typeof progress === "number" ? Math.max(0, Math.min(100, progress)) : null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0f1a] text-center"
    >
      {/* Decorative glowing circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-purple-600 opacity-10 blur-3xl animate-pulse delay-500" />
      </div>

      {/* Avatar / Logo loader */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 p-[3px] animate-spin-slow">
          <div className="w-full h-full rounded-full bg-[#0d0f1a] flex items-center justify-center">
            <span className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
              MD
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
        Bienvenue
      </h2>
      <p className="mt-2 text-gray-400 text-sm max-w-md">{message}</p>

      {/* Progress bar */}
      <div className="mt-8 w-64">
        {pct === null ? (
          <div className="relative h-2 w-full rounded-full overflow-hidden bg-gray-700/40">
            <div className="absolute h-full left-[-40%] w-2/3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 animate-slide" />
          </div>
        ) : (
          <div className="h-2 w-full rounded-full bg-gray-700/40 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        )}
        <div className="mt-3 text-xs text-gray-500">{pct === null ? "Chargement..." : `${pct}%`}</div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-xs text-gray-600">© 2025 🇵🇸 Free palestine </div>

      {/* Animations */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 6s linear infinite; }

        @keyframes slide {
          0% { left: -60%; }
          50% { left: 40%; }
          100% { left: 120%; }
        }
        .animate-slide { animation: slide 2s cubic-bezier(.2,.8,.2,1) infinite; }
      `}</style>
    </div>
  );
}
