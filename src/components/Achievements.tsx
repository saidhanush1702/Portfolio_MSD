import { Trophy, Code, Award, BookOpen } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Code,
      title: '500+ DSA Problems Solved',
      description: 'Active problem solver on LeetCode and GeeksforGeeks with Top-10 rank in college on GFG',
      color: 'from-purple-600 to-purple-800',
    },
    {
      icon: Trophy,
      title: '1st Place – Code Addicts',
      description: 'Won first prize in coding competition at Yuga 2K23 technical fest',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Award,
      title: '3rd Place – Unreal Racer',
      description: 'Secured third position in Project Expo at Byte Fest 2024',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Award,
      title: '2nd Place – Debug Technix',
      description: 'Runner-up in debugging competition at Yuga 2K23',
      color: 'from-indigo-600 to-indigo-800',
    },
    {
      icon: BookOpen,
      title: 'AIML Mentorship Program',
      description: 'Completed comprehensive 3-month AI/ML mentorship program by Pregrad',
      color: 'from-purple-600 to-blue-600',
    },
    {
      icon: Code,
      title: 'Git & GitHub Workshop',
      description: 'Participated in hands-on Git & GitHub workshop at JNTUHCES',
      color: 'from-green-600 to-green-800',
    },
  ];

  const extracurricular = [
    {
      title: 'Technical Coordinator',
      description: 'Led technical operations for college fest at JNTUH Sultanpur',
      icon: '🎯',
    },
    {
      title: 'Swimming',
      description: 'Passionate swimmer with focus on endurance and technique',
      icon: '🏊',
    },
    {
      title: 'Skating',
      description: 'Recreational skating enthusiast',
      icon: '⛸️',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-purple-100 animate-scale-in group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-current/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                  <achievement.icon className="w-7 h-7 text-white group-hover:animate-float-icon" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 relative z-10 group-hover:text-purple-600 transition-colors">{achievement.title}</h3>
                <p className="text-gray-600 text-sm relative z-10 group-hover:text-gray-700 transition-colors">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-scale-in group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
                <div className="text-5xl mb-4 group-hover:scale-150 group-hover:animate-float-icon transition-all duration-300 relative z-10">{activity.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10 group-hover:text-purple-600 transition-colors">{activity.title}</h4>
                <p className="text-gray-600 text-sm relative z-10 group-hover:text-gray-700 transition-colors">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
