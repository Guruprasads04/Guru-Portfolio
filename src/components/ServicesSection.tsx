import { motion } from 'motion/react';
import { Palette, Box, Code, Brain } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered designs that blend aesthetics with functionality. From wireframes to high-fidelity prototypes.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing'
      ],
      gradient: 'from-orange-500/20 to-red-500/20',
      borderGradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Box size={40} />,
      title: '3D Model Development',
      description: 'Crafting detailed 3D models and immersive experiences. From concept to final render with attention to detail.',
      features: [
        'Product Modeling',
        'Character Design',
        'Texturing & Shading',
        '3D Animation'
      ],
      gradient: 'from-orange-600/20 to-amber-500/20',
      borderGradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: <Code size={40} />,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks and best practices.',
      features: [
        'React Applications',
        'Responsive Design',
        'Performance Optimization',
        'Component Libraries'
      ],
      gradient: 'from-orange-500/20 to-orange-700/20',
      borderGradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: <Brain size={40} />,
      title: 'Machine Learning Solutions',
      description: 'Developing intelligent systems that learn and adapt. From data analysis to deployment of ML models.',
      features: [
        'Predictive Modeling',
        'Data Analysis',
        'Neural Networks',
        'ML Integration'
      ],
      gradient: 'from-orange-600/20 to-red-600/20',
      borderGradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-orange-500 mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.borderGradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-md bg-black/60 border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-500 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex p-4 rounded-2xl bg-orange-500/10 border-2 border-orange-500/30 text-orange-500 mb-6 group-hover:border-orange-500/60 transition-all"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.15) + (featureIndex * 0.05) }}
                        className="flex items-center gap-3 text-gray-300 group-hover:text-orange-300 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-24 h-24 border border-orange-500/10 rounded-full opacity-50" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-orange-500/10 rounded-lg opacity-50" />
              </div>

              {/* Floating 3D element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-xl border-2 border-orange-500/20 backdrop-blur-sm bg-gradient-to-br ${service.gradient} pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}