import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgydjJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white animate-fade-in">
            <p className="text-purple-300 text-lg mb-2 font-light">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              M. Sai Dhanush
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light">
              Full-Stack Developer & AI/ML Enthusiast
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl leading-relaxed">
              Computer Science student passionate about building scalable applications,
              solving complex problems, and delivering real-world solutions with the MERN stack.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 hover:gap-2"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 group"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://github.com/saidhanush1702"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 animate-float-icon"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sai-dhanush-3a75b4262"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/50 animate-float-icon"
                style={{ animationDelay: '0.1s' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:muthyalasaidhanush@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/50 animate-float-icon"
                style={{ animationDelay: '0.2s' }}
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919687351816"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-green-500/50 animate-float-icon"
                style={{ animationDelay: '0.3s' }}
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative animate-float">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-2 shadow-2xl shadow-purple-500/50 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-8xl font-bold relative overflow-hidden group cursor-pointer">
                  <span className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500 rounded-full"></span>
                  <span className="relative animate-scale-in">SD</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-50 animate-bounce"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 rounded-full animate-rotate-slow" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.3), transparent)', opacity: 0.3 }}></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
