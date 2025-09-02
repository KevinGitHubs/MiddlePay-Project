'use client';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/6288218776877" 
            className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.6-.17-.06-.3-.09-.42.09-.12.18-.47.6-.58.72-.11.12-.22.13-.41.04s-1.26-.47-2.4-1.54a8.93 8.93 0 0 1-1.8-2.24c-.18-.31.02-.48.14-.57.11-.09.25-.11.42-.19.17-.08.28-.14.42-.23.14-.09.22-.19.28-.31.06-.12.03-.22-.02-.31s-.36-.87-.49-1.19c-.13-.32-.27-.28-.36-.28-.09-.01-.19-.01-.3-.01s-.26.04-.4.12c-.14.08-.53.51-.53 1.25 0 .74.54 1.46 1.62 2.5 1.08 1.04 2.1 1.69 3.06 2.07.95.38 1.54.42 2.1.38.56-.04.87-.27.97-.4.1-.13.17-.29.19-.48.02-.19.01-.34-.01-.47s-.08-.23-.17-.32z"/>
            </svg>
            CS
          </a>
        </div>
      </div>
    </header>
  );
}
