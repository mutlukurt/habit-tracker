import { Brain, Heart, TrendingUp, Target, Zap, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Science-Based',
      description: 'Built on neuroscience research to help you understand your happiness patterns'
    },
    {
      icon: Heart,
      title: 'Track Wellness',
      description: 'Monitor your mental health, emotions, and daily habits in one place'
    },
    {
      icon: TrendingUp,
      title: 'See Progress',
      description: 'Visualize your growth with beautiful charts and insights over time'
    },
    {
      icon: Target,
      title: 'Set Goals',
      description: 'Create meaningful goals and get personalized recommendations'
    },
    {
      icon: Zap,
      title: 'Quick Check-ins',
      description: 'Daily check-ins take less than 2 minutes to complete'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'Your data is encrypted and completely private, always'
    }
  ];

  return (
    <section id="features" className="relative bg-black text-white py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Everything you need
            <br />
            to build better habits
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Powerful features designed to help you understand and improve your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-lime-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lime-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
