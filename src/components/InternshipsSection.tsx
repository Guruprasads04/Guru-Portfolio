import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function InternshipsSection() {
  const internships = [
    {
      role: 'Frontend Developer Intern',
      company: 'Synkdesk',
      location: 'Puducherry',
      period: '2025',
      description: 'Developed responsive web applications using React and modern frontend technologies. Collaborated with design team to implement pixel-perfect UI components.',
      achievements: [
        'Built reusable component library',
        'Improved page load time by 40%',
        'Implemented responsive designs across devices'
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'VEI Technologies',
      location: 'Chennai',
      period: '2024',
      description: 'Worked on ML models and data analysis projects. Implemented algorithms for predictive analytics and data-driven solutions.',
      achievements: [
        'Developed ML models with 85% accuracy',
        'Processed and analyzed large datasets',
        'Created data visualization dashboards'
      ]
    }
  ];

  return (
    <section id="internships" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-orange-500 mb-4">Internship Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional experience across leading technology companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-black shadow-lg shadow-orange-500/50" />
                  <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75" />
                </div>

                {/* Content card */}
                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                  <div className="group relative">
                    {/* Glass card */}
                    <div className="relative p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20 hover:border-orange-500/60 transition-all duration-500 overflow-hidden">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-4 ${
                          index % 2 === 0 ? 'lg:float-right lg:ml-4' : ''
                        }`}>
                          <Briefcase size={24} />
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-white mb-2">{internship.role}</h3>
                        <h4 className="text-orange-400 mb-4">{internship.company}</h4>

                        {/* Meta info */}
                        <div className={`flex flex-wrap gap-4 mb-4 text-gray-400 ${
                          index % 2 === 0 ? 'lg:justify-end' : ''
                        }`}>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-orange-500" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-orange-500" />
                            <span>{internship.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4">
                          {internship.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {internship.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className={`flex items-start gap-2 text-gray-300 ${
                                index % 2 === 0 ? 'lg:justify-end lg:text-right' : ''
                              }`}
                            >
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 ${
                                index % 2 === 0 ? 'lg:order-2' : ''
                              }`} />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 3, 0]
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute -top-3 w-16 h-16 rounded-lg border-2 border-orange-500/20 backdrop-blur-sm bg-orange-500/5 pointer-events-none ${
                        index % 2 === 0 ? '-left-3' : '-right-3'
                      }`}
                    />
                  </div>
                </div>

                {/* Empty space for timeline */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
