import { Apple, Play, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8">
          GET STARTED TODAY
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Start your journey to
          <br />
          <span className="text-lime-400">a happier life</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
          Join thousands of users who are already building better habits and improving their mental wellness
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <button className="w-full sm:w-auto group bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 hover:bg-lime-400 transition-colors">
            <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
            Download for iOS
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full sm:w-auto group bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base border border-white/20 flex items-center justify-center gap-2 sm:gap-3 hover:bg-white/20 transition-colors">
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            Download for Android
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-black"></div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-lime-400 to-green-400 border-2 border-black"></div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-black"></div>
            </div>
            <span>50,000+ users</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Sparkles key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-1 sm:ml-2">4.9 rating</span>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-lime-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
