import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'JNTUH College of Engineering Sultanpur',
      period: '2022 – 2026',
      score: 'CGPA: 7.75',
      icon: '🎓',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      period: '2019 – 2021',
      score: '96.4%',
      icon: '📚',
    },
    {
      degree: '10th Grade (CBSE)',
      institution: 'DAV Public School, Safilguda',
      period: '2018 – 2019',
      score: 'CGPA: 8.0',
      icon: '🏫',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-12 md:ml-20 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute -left-[3.25rem] top-6 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hidden md:block group/dot cursor-pointer transition-all duration-300 hover:scale-125 animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 group cursor-pointer relative overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:via-purple-600/3 group-hover:to-blue-600/5 transition-all duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="text-4xl group-hover:scale-125 group-hover:animate-float-icon transition-all duration-300">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                          <p className="text-purple-600 font-semibold group-hover:text-blue-600 transition-colors">{edu.institution}</p>
                        </div>
                        <span className="px-4 py-2 bg-white rounded-lg text-purple-700 font-semibold text-sm shadow-sm mt-2 md:mt-0 inline-block group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-purple-400/50 transition-all duration-300">
                          {edu.period}
                        </span>
                      </div>
                      <div className="mt-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-bold shadow-lg group-hover:shadow-purple-500/50 group-hover:scale-105 transition-all duration-300 inline-block">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
