import { Sparkles, Brain, Heart, Star } from 'lucide-react';

export default function ProductSection() {
  return (
    <section id="product" className="relative bg-lime-400 min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm text-black/70">/// PRODUCT OVERVIEW</div>
          <div className="text-xs sm:text-sm text-black/70">/// 01</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 sm:mb-8">
              Learn how your actions, thoughts, habits and emotions influence outcomes.
            </h2>

            <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 bg-lime-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 sm:-bottom-12 left-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-lime-500 rounded-full opacity-60"></div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="relative bg-black rounded-[3rem] p-4 sm:p-6 aspect-[9/16] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] h-full flex flex-col items-center justify-center p-6 sm:p-8">
                  <div className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-6">9:41</div>

                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-white/60 text-sm sm:text-base mb-2 sm:mb-4">Howdy, Nilqa!</div>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-lime-400 mb-2">6</div>
                    <div className="text-white/60 text-xs sm:text-sm">/ 30</div>
                  </div>

                  <div className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 font-medium">Daily Check-In</div>

                  <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-400 flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-16 -right-8 sm:top-20 sm:-right-12 bg-black rounded-[2rem] p-3 sm:p-4 w-32 sm:w-40 md:w-48 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-3 sm:p-4">
                  <div className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">Steps</div>
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <div className="text-2xl sm:text-3xl font-bold text-lime-400">4/6</div>
                    <div className="text-white/40 text-xs sm:text-sm">58%</div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`w-1 h-8 sm:h-10 rounded-full ${
                          i <= 4 ? 'bg-lime-400' : 'bg-gray-800'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <Sparkles className="absolute -top-4 sm:-top-6 right-1/4 w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <Sparkles className="absolute top-1/4 -left-4 sm:-left-6 w-5 h-5 sm:w-6 sm:h-6 text-lime-500" />
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 bg-pink-300 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full ml-1"></div>
        </div>

        <div className="absolute bottom-20 right-10 flex gap-2 sm:gap-3">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
