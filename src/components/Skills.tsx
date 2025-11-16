export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS'],
    },
    {
      category: 'Libraries & Frameworks',
      skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'Firebase', 'MySQL'],
    },
    {
      category: 'Core Subjects',
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'OOP', 'DBMS', 'Computer Networks', 'Machine Learning'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'JWT', 'Socket.io', 'Twilio', 'Recharts', 'GSAP', 'Vite'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-solving', 'Flexibility', 'Humility', 'Team Collaboration', 'Self-Learning'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-scale-in group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center relative z-10">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
