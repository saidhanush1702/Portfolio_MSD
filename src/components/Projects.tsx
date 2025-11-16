import { ExternalLink, Github, Users, TrendingUp, Award } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Expense Tracking System',
      year: '2025',
      description: 'Full-stack expense management application with OTP authentication, payment handling, and real-time analytics dashboard.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS', 'Recharts', 'Twilio', 'Socket.io', 'JWT'],
      highlights: [
        'Built for 100+ users with real-time updates',
        'Secure OTP-based authentication system',
        'Interactive transaction analytics with charts',
        'Real-time notifications via Socket.io',
      ],
      metrics: [
        { icon: Users, value: '100+', label: 'Users' },
      ],
    },
    {
      title: 'RhythmX Dance Studio Website',
      year: '2025',
      description: 'Comprehensive dance studio website with admin dashboard, gallery management, and Firebase integration.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'MongoDB'],
      highlights: [
        'Fully responsive design with modern UI/UX',
        'Admin dashboard for content management',
        '95% Lighthouse performance score',
        'Attracts 500+ monthly visitors',
      ],
      metrics: [
        { icon: Users, value: '500+', label: 'Monthly Visitors' },
        { icon: TrendingUp, value: '95%', label: 'Performance' },
      ],
      liveLink: 'https://rhythmxwithshiva.com/',
    },
    {
      title: 'Titanic Survival Prediction',
      year: '2024',
      description: 'Machine learning model using logistic regression to predict passenger survival with high accuracy.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Achieved 82% prediction accuracy',
        'AUC score of 0.87',
        'Comprehensive data visualization',
        'Feature engineering and model optimization',
      ],
      metrics: [
        { icon: TrendingUp, value: '82%', label: 'Accuracy' },
        { icon: Award, value: '0.87', label: 'AUC Score' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development, machine learning, and problem-solving
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-3 border border-gray-700 animate-scale-in group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-blue-600/10 transition-all duration-500"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/75 transition-all duration-300">
                  {project.year}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors">{project.description}</p>

              <div className="mb-6 relative z-10">
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-gray-300 text-sm hover:text-gray-100 transition-colors group/item" style={{ animationDelay: `${hIndex * 0.05}s` }}>
                      <span className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {project.metrics.length > 0 && (
                <div className="flex gap-6 mb-6 pb-6 border-b border-gray-700 relative z-10">
                  {project.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="flex items-center gap-2 group/metric">
                      <metric.icon className="w-5 h-5 text-purple-400 group-hover/metric:text-blue-300 group-hover/metric:scale-125 group-hover/metric:animate-float-icon transition-all duration-300" />
                      <div className="group-hover/metric:translate-x-1 transition-transform duration-300">
                        <p className="text-lg font-bold text-white group-hover/metric:text-transparent group-hover/metric:bg-clip-text group-hover/metric:bg-gradient-to-r group-hover/metric:from-purple-300 group-hover/metric:to-blue-300 transition-all duration-300">{metric.value}</p>
                        <p className="text-xs text-gray-400 group-hover/metric:text-gray-300 transition-colors">{metric.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveLink && (
                <div className="flex gap-4 relative z-10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/75 hover:scale-110 transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
