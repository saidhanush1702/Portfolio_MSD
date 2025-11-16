import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden pt-20" // Added padding-top for navbar
    >
      {/* Original SVG Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgydjJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 z-10">
        {/* NEW: Centered Layout */}
        <div className="text-center">

          {/* Original Monogram (now centered) */}
          <div className="flex justify-center animate-float mb-8">
            <div className="relative">
              {/* Reduced size for centered layout */}
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-8 border-gray-900 shadow-lg overflow-hidden">
                {/* Replaced the 'MSD' div with this img tag */}
                <img
                  src="/me.png"
                  alt="M. Sai Dhanush"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/240x240/701a75/e0e7ff?text=MSD&font=inter';
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* Original Text Content (now centered) */}
          <div className="flex-1 text-white animate-fade-in">
            <p className="text-purple-300 text-xl mb-2 font-light">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              Muthyala Sai Dhanush
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light">
              Full Stack Developer (MERN) | AI/ML Enthusiast
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl leading-relaxed mx-auto"> {/* Added mx-auto */}
              Computer Science student passionate about building scalable
              applications, solving complex problems, and delivering real-world
              solutions with the MERN stack.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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

          </div>

          
        </div>
      </div>

      {/* Original Scroll-Down Button */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}