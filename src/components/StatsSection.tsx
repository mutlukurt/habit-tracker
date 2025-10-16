import { Users, Star, Calendar, Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Active Users'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'App Store Rating'
    },
    {
      icon: Calendar,
      value: '2M+',
      label: 'Habits Tracked'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate'
    }
  ];

  return (
    <section id="stats" className="relative bg-gradient-to-br from-lime-400 to-lime-500 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-black/10 rounded-full sm:rounded-2xl mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-black/80 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
