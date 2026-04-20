'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [backendMessage, setBackendMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Makes a request to your FastAPI root endpoint
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Error connecting to backend'));
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-2xl w-full z-10 border border-white/10 bg-white/5 backdrop-blur-xl p-12 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Stack Online
          </div>
          
          <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            UpSkillMe
          </h1>
          
          <p className="text-lg text-gray-400 font-light max-w-md">
            Next.js frontend successfully wired to the FastAPI backend.
          </p>

          <div className="w-full mt-8 p-6 rounded-2xl bg-black/40 border border-white/5 text-left group hover:border-purple-500/30 transition-colors">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Backend Response</h2>
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${backendMessage.includes('Error') || backendMessage === 'Loading...' ? 'bg-orange-500 animate-pulse' : 'bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]'}`} />
              <p className="font-mono text-emerald-400 text-lg">{backendMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
