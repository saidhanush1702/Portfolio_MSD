import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form. In production, this would send your message.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muthyalasaidhanush@gmail.com',
      href: 'mailto:muthyalasaidhanush@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9687351816',
      href: 'tel:+919687351816',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind & want to implement it? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group/contact animate-slide-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover/contact:shadow-purple-500/50 group-hover/contact:scale-125 group-hover/contact:rotate-12 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white group-hover/contact:animate-float-icon" />
                  </div>
                  <div className="group-hover/contact:translate-x-2 transition-transform duration-300">
                    <p className="text-gray-400 text-sm mb-1 group-hover/contact:text-gray-300 transition-colors">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-semibold hover:text-purple-300 group-hover/contact:text-purple-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold group-hover/contact:text-purple-300 transition-colors">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/50 hover:from-purple-900/50 hover:to-blue-900/50 transition-all duration-300 group/response animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-bold text-white mb-4 group-hover/response:text-purple-300 transition-colors">Response Time</h4>
              <p className="text-gray-400 text-sm group-hover/response:text-gray-300 transition-colors">
                I typically respond within 24-48 hours. For urgent matters, please feel free to call directly.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700 hover:shadow-purple-500/30 transition-all duration-300 group/form animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover/form:from-purple-600/10 group-hover/form:to-blue-600/10 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/75 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-110 group/btn"
              >
                <Send className="w-5 h-5 group-hover/btn:animate-float-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
