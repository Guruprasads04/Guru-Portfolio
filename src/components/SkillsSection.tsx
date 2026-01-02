import { motion } from 'motion/react';
import { Palette, Code, Brain, Box } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: <Palette size={32} />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        'Wireframing',
        'Prototyping',
        'Figma',
        'Design Thinking',
        'User Research',
        'Information Architecture'
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Code size={32} />,
      color: 'from-orange-600 to-orange-700',
      skills: [
        'HTML & CSS',
        'JavaScript',
        'React',
        'Flask',
        'Tailwind CSS',
        'Responsive Design'
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Brain size={32} />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-Learn',
        'Pandas',
        'Data Analysis'
      ]
    },
    {
      title: '3D Development',
      icon: <Box size={32} />,
      color: 'from-orange-600 to-orange-700',
      skills: [
        'Modeling',
        'Texturing',
        'Animation',
        '3D Rendering',
        'Asset Creation',
        'Scene Composition'
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit across design, development, and emerging technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20 hover:border-orange-500/60 transition-all duration-500 overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated border glow */}
                {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-xl`} style={{ margin: '-2px' }} />
                </div> */}

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-4"
                  >
                    {category.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white mb-4">{category.title}</h3>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center gap-2 text-gray-300 group-hover:text-orange-400 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -top-2 -right-2 w-12 h-12 rounded-lg border-2 border-orange-500/20 backdrop-blur-sm bg-gradient-to-br ${category.color} opacity-10 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
