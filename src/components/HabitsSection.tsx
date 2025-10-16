import { Check, Sparkles, Smile } from 'lucide-react';

export default function HabitsSection() {
  return (
    <section id="habits" className="relative bg-lime-400 min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-8 sm:mb-12">
              Build
              <br />
              Healthy
              <br />
              Habits
            </h2>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <div className="relative bg-black rounded-[3rem] p-4 sm:p-6 aspect-[9/16] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] h-full flex flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="text-white/40 text-xs sm:text-sm">9:41</div>
                    <div className="text-white/40 text-xs sm:text-sm">Morning</div>
                  </div>

                  <div className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Well done!</div>

                  <div className="bg-gray-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <div className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">
                      You have just completed 30 Days in Screentime free. You got a new badge!
                    </div>

                    <div className="flex items-center justify-center py-6 sm:py-8">
                      <div className="text-6xl sm:text-7xl">🎉</div>
                    </div>

                    <div className="text-white text-base sm:text-lg font-medium mb-4 sm:mb-6">Today</div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 bg-gray-800/80 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        </div>
                        <div className="text-white/90 text-sm sm:text-base">Morning Meditation</div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 bg-gray-800/80 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        </div>
                        <div className="text-white/90 text-sm sm:text-base">Read 20 pages</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-lime-400 text-black font-semibold py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-lime-300 transition-colors">
                    Let's go!
                  </button>
                </div>
              </div>

              <div className="absolute -right-12 top-1/3 bg-black rounded-[2rem] p-3 sm:p-4 w-36 sm:w-44 aspect-[9/16] shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl h-full flex flex-col items-center justify-center p-3 sm:p-4">
                  <div className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">Daily Check-In</div>
                  <div className="text-4xl sm:text-5xl font-bold text-lime-400 mb-2 sm:mb-3">4/6</div>
                  <div className="text-white/40 text-xs sm:text-sm">58%</div>
                </div>
              </div>

              <div className="absolute -bottom-16 -right-8 sm:-bottom-20 sm:-right-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full p-4 sm:p-6 w-24 h-24 sm:w-32 sm:h-32 shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-300 flex items-center justify-center">
                <Smile className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>

              <Sparkles className="absolute -top-4 left-1/4 w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <Sparkles className="absolute bottom-1/4 -left-4 w-5 h-5 sm:w-6 sm:h-6 text-lime-500" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-pink-300 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
        <div className="flex items-center justify-between text-xs sm:text-sm text-black/70">
          <div>/// ABOUT</div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div>USERS' RESEARCH & ANALYSIS, USERS' NEED AND GOALS...</div>
            <div>/// 02</div>
          </div>
        </div>
      </div>
    </section>
  );
}
