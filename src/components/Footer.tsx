import { Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-4">
              GROWTH UP
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              The neuroscience of happiness in your pocket. Build better habits, track your progress, and live a happier life.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-lime-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-lime-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-lime-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-lime-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#download" className="text-white/70 hover:text-white transition-colors">Download</a></li>
              <li><a href="#updates" className="text-white/70 hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><a href="#help" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#feedback" className="text-white/70 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
            © 2025 Mutlu Kurt. Licensed under MIT License.
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-lime-400 fill-lime-400" />
            <span>for happier lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
