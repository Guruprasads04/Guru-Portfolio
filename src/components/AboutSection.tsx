import { motion } from 'motion/react';
import { GraduationCap, Mail, Linkedin, Award, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePhoto from 'figma:asset/3dde703682aa590c4049aaaffab8f068ef1c951c.png';

export function AboutSection() {
  const infoItems = [
    {
      icon: <GraduationCap className="text-orange-500" size={24} />,
      label: 'Education',
      value: 'Computer Science Engineering'
    },
    {
      icon: <Mail className="text-orange-500" size={24} />,
      label: 'Email',
      value: 'guruprasadss2004@gmail.com',
      href: 'mailto: guruprasadss2004@gmail.com'
    },
    {
      icon: <Linkedin className="text-orange-500" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/guruprasad',
      href: 'https://www.linkedin.com/in/guruprasad-s-b12807343/'
    },
    {
      icon: <Award className="text-orange-500" size={24} />,
      label: 'Experience',
      value: 'Multiple Internships',
      href: '/#internships'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-orange-500 mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              {/* Neon border effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl blur-sm opacity-75" />
              
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-orange-500/50">
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Guruprasad Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white mb-6">Multi-Disciplinary Creator</h3>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm a passionate creator with expertise spanning across multiple domains of technology 
                and design. My journey combines the artistic precision of UI/UX design, the technical 
                depth of frontend development, the innovation of machine learning, and the creativity 
                of 3D modeling.
              </p>
              <p>
                With hands-on experience from internships at leading tech companies, I've developed 
                a unique perspective on creating holistic digital solutions. I believe in the power 
                of merging aesthetics with functionality to build experiences that truly resonate with users.
              </p>
              <p>
                My approach is centered on continuous learning, experimentation, and pushing the 
                boundaries of what's possible in digital creation. From conceptualizing user interfaces 
                to implementing complex ML algorithms, I thrive on bringing ideas to life.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-4 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="https://drive.google.com/file/d/1ugYvvHCT44H1iOKZnbldQ4p_kBwzDZZP/view?usp=sharing"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span className="text-lg">Download My CV</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}