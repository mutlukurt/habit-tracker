import { Sparkles, Flower2, Rocket, Leaf, Smile } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="inline-block bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8">
          HABIT-TRACKER
        </div>

        <div className="relative max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 sm:mb-12">
            The neuroscience
            <br />
            <span className="inline-flex items-center gap-2 sm:gap-3">
              of happiness
              <Flower2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400 inline-block" />
            </span>
            <br />
            in your pocket!
          </h1>

          <Sparkles className="absolute -top-4 left-0 w-6 h-6 sm:w-8 sm:h-8 text-lime-400" />
          <Sparkles className="absolute top-20 -right-4 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
          <Sparkles className="absolute bottom-0 left-20 w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
        </div>

        <div className="max-w-md mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-white/80 mb-2">Adonis</p>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            Track your activity and get insights on how it works for your happiness. Reduce stress and make your life happier with Growth Up.
          </p>
        </div>

        <div className="hidden sm:block absolute sm:top-24 sm:right-8 md:top-32 md:right-16 lg:right-20 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center opacity-90 pointer-events-none">
          <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="hidden sm:flex absolute sm:bottom-6 sm:right-12 md:bottom-8 md:right-20 lg:bottom-12 lg:right-32 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-full items-center justify-center pointer-events-none">
          <div className="flex gap-4 md:gap-5 lg:gap-6">
            <div className="w-4 h-8 md:w-5 md:h-9 lg:h-10 bg-white rounded-full"></div>
            <div className="w-4 h-8 md:w-5 md:h-9 lg:h-10 bg-white rounded-full"></div>
          </div>
        </div>

        <Rocket className="hidden sm:block absolute sm:top-36 sm:right-32 md:top-1/4 md:right-1/4 w-6 h-6 md:w-8 md:h-8 text-orange-400 pointer-events-none" />
        <Leaf className="hidden sm:block absolute sm:bottom-1/3 sm:left-20 md:left-1/4 w-6 h-6 md:w-7 md:h-7 text-lime-400 pointer-events-none" />
        <Smile className="hidden sm:block absolute top-1/2 sm:right-12 md:right-16 w-6 h-6 md:w-7 md:h-7 text-yellow-400 pointer-events-none" />
        <Sparkles className="hidden sm:block absolute sm:bottom-1/4 sm:right-1/3 w-5 h-5 md:w-6 md:h-6 text-blue-400 pointer-events-none" />
      </div>
    </section>
  );
}
