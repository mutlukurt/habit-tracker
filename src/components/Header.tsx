import { Smartphone, Monitor, Tablet, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="text-white font-bold text-xs sm:text-sm md:text-base">iOS APP</div>
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-white/70 text-xs xl:text-sm">
              <a href="#hero" className="hover:text-white transition-colors">UX / UI</a>
              <a href="#product" className="hover:text-white transition-colors">PRODUCT DESIGN</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-white/70 text-xs xl:text-sm">
            <a href="#habits" className="hover:text-white transition-colors">3D+ SCREENS</a>
            <div className="flex items-center gap-1.5 xl:gap-2">
              <Smartphone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <Tablet className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <Monitor className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </div>
            <a href="#features" className="hover:text-white transition-colors">2022-2023</a>
            <a href="#stats" className="hover:text-white transition-colors border border-white/30 rounded-full px-3 xl:px-4 py-1 xl:py-1.5">HEALTHCARE</a>
            <a href="#hero" className="hover:text-white transition-colors">40+h</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-3">
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors text-sm">UX / UI</a>
            <a href="#product" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors text-sm">PRODUCT DESIGN</a>
            <a href="#habits" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors text-sm">3D+ SCREENS</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors text-sm">2022-2023</a>
            <a href="#stats" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors text-sm">HEALTHCARE</a>
            <div className="flex items-center gap-3 pt-2">
              <Smartphone className="w-4 h-4 text-white/70" />
              <Tablet className="w-4 h-4 text-white/70" />
              <Monitor className="w-4 h-4 text-white/70" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
