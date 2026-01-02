import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

export function ContactSection() {
  // Controlled form state (we'll use native form POST to Formspree for simplicity)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'guruprasadss2004@gmail.com',
      href: 'mailto:guruprasadss2004@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/guruprasad',
      href: 'https://www.linkedin.com/in/guruprasad-s-b12807343/'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/guruprasad',
      href: 'https://github.com/Guruprasads04'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9345663635',
      href: 'tel:+919345663635'
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 mb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 115, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur opacity-50" />
              
              <form action="https://formspree.io/f/mqanawor" method="POST" className="relative z-10 space-y-6">
                <input type="hidden" name="_replyto" value={formData.email} />
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-orange-500/30 focus:border-orange-500 text-white placeholder-gray-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20">
              <h3 className="text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-500 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                      <div className="text-white group-hover:text-orange-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white">Chennai / Puducherry, India</div>
                  <p className="text-gray-400 text-sm mt-2">
                    Available for remote work and on-site collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white">Available for New Projects</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new opportunities and collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-orange-500/20 text-center"
      >
        <p className="text-gray-400">
          © 2025 Guruprasad. Crafted with{' '}
          <span className="text-orange-500">passion</span> and{' '}
          <span className="text-orange-500">code</span>
        </p>
      </motion.div>
    </section>
  );
}
