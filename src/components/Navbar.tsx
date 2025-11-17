import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* -------- LOGO (RESPONSIVE) -------- */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center"
          >
            <img
              src="/MSD_logo.png"
              alt="MSD Logo"
              className="w-20 sm:w-24 lg:w-28 object-contain transition-transform hover:scale-105"
            />

          </a>
          {/* ---------------------------------- */}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className="text-white hover:text-purple-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Resume Button (Desktop) */}
            <a
              href="/Sai_Dhanush_resume.pdf"
              download="M_Sai_Dhanush_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
            >
              <span>Resume</span>
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }}
                  className="text-white hover:text-purple-400 transition-colors font-medium py-2 border-b border-gray-800 last:border-0"
                >
                  {link.name}
                </a>
              ))}

              {/* Resume Button (Mobile) */}
              <a
                href="/Sai_Dhanush_resume.pdf"
                download="M_Sai_Dhanush_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                <span>Download Resume</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
