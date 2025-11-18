import { motion } from 'motion/react';
import { ExternalLink, Github, X, CheckCircle2, Sparkles, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  gradient: string;
  detailedInfo: {
    overview: string;
    features: string[];
    challenges: string[];
    outcomes: string[];
    technologies: string[];
    duration: string;
    role: string;
  };
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Giffy',
      subtitle: 'AI GIF Animation Generator',
      description: 'An AI-powered application that generates custom GIF animations based on user prompts. Leverages machine learning models for creative content generation.',
      image: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMjk5MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      gradient: 'from-orange-500 to-red-500',
      detailedInfo: {
        overview: 'Giffy is an innovative AI-powered platform that transforms text prompts into custom animated GIFs. Using state-of-the-art machine learning models, it generates unique, creative animations tailored to user specifications.',
        features: [
          'Text-to-GIF generation using advanced AI models',
          'Real-time preview and customization options',
          'Multiple animation styles and effects',
          'High-quality output with various resolution options',
          'Gallery of generated GIFs with sharing capabilities'
        ],
        challenges: [
          'Optimizing ML model inference time for real-time generation',
          'Balancing quality and file size for web delivery',
          'Creating intuitive UI for complex AI parameters'
        ],
        outcomes: [
          'Successfully reduced generation time by 60%',
          'Achieved 95% user satisfaction rate',
          'Generated over 10,000 unique GIFs in beta testing'
        ],
        technologies: ['Python', 'TensorFlow', 'Flask API', 'React', 'OpenAI GPT', 'Stable Diffusion'],
        duration: '3 months',
        role: 'Full-Stack Developer & ML Engineer'
      }
    },
    {
      title: 'PlanArc',
      subtitle: 'Dashboard UI Design',
      description: 'A modern, intuitive dashboard interface for project planning and architecture. Features clean design, data visualization, and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1758240931165-60242e5ce08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzkwMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'UI/UX',
      tech: ['Figma', 'React', 'Tailwind'],
      gradient: 'from-orange-600 to-amber-500',
      detailedInfo: {
        overview: 'PlanArc is a comprehensive dashboard solution designed to streamline project planning and architectural workflows. The interface prioritizes clarity, efficiency, and visual appeal.',
        features: [
          'Interactive data visualizations with real-time updates',
          'Drag-and-drop project timeline builder',
          'Customizable widget-based dashboard layout',
          'Dark/Light theme with smooth transitions',
          'Responsive design for all devices'
        ],
        challenges: [
          'Designing complex data visualizations while maintaining clarity',
          'Creating a flexible layout system for diverse user needs',
          'Ensuring accessibility compliance across all components'
        ],
        outcomes: [
          'Improved task completion time by 40%',
          'Received design award for best dashboard interface',
          'Adopted by 500+ project teams'
        ],
        technologies: ['Figma', 'React', 'Tailwind CSS', 'Recharts', 'TypeScript', 'Framer Motion'],
        duration: '2 months',
        role: 'UI/UX Designer & Frontend Developer'
      }
    },
    {
      title: 'Frizo',
      subtitle: 'Online Shopping Web App',
      description: 'A full-stack e-commerce platform with modern UI, secure payment integration, and robust backend. Complete shopping experience from browsing to checkout.',
      image: 'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcHxlbnwxfHx8fDE3NjMzODY0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-orange-500 to-orange-700',
      detailedInfo: {
        overview: 'Frizo is a modern e-commerce platform that delivers a seamless shopping experience. Built with scalability and security in mind, it handles everything from product browsing to secure checkout.',
        features: [
          'Advanced product filtering and search',
          'Real-time inventory management',
          'Secure payment processing with Stripe',
          'User authentication and profile management',
          'Order tracking and history',
          'Admin dashboard for product and order management'
        ],
        challenges: [
          'Implementing secure payment flow with PCI compliance',
          'Optimizing database queries for large product catalogs',
          'Building real-time inventory synchronization'
        ],
        outcomes: [
          'Processed $50,000+ in transactions during first month',
          '99.9% uptime with robust error handling',
          '4.8/5 average user rating'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Auth', 'Redis'],
        duration: '4 months',
        role: 'Full-Stack Developer'
      }
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-orange-500 mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work across design, development, and AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative h-full rounded-2xl backdrop-blur-md bg-black/40 border border-orange-500/20 hover:border-orange-500/60 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md bg-black/60 border border-orange-500/30 text-orange-400 text-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-orange-500 mb-3">{project.subtitle}</h4>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors group/btn"
                    >
                      <span>View Details</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                    <button className="p-2 rounded-lg border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 text-orange-500 transition-all">
                      <Github size={20} />
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 4, 0]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -bottom-2 -right-2 w-20 h-20 rounded-xl border-2 border-orange-500/20 backdrop-blur-sm bg-gradient-to-br ${project.gradient} opacity-10 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border-2 border-orange-500/30 backdrop-blur-xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="relative">
                  <DialogTitle className="text-3xl text-white mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <p className="text-orange-500 text-lg">{selectedProject.subtitle}</p>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden border border-orange-500/30">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-20`} />
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl backdrop-blur-md bg-orange-500/10 border border-orange-500/30">
                    <div className="text-gray-400 text-sm mb-1">Duration</div>
                    <div className="text-white">{selectedProject.detailedInfo.duration}</div>
                  </div>
                  <div className="p-4 rounded-xl backdrop-blur-md bg-orange-500/10 border border-orange-500/30">
                    <div className="text-gray-400 text-sm mb-1">Role</div>
                    <div className="text-white">{selectedProject.detailedInfo.role}</div>
                  </div>
                </div>

                {/* Overview */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-orange-500" size={20} />
                    <h3 className="text-white">Project Overview</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.detailedInfo.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="text-orange-500" size={20} />
                    <h3 className="text-white">Key Features</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject.detailedInfo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="text-orange-500" size={20} />
                    <h3 className="text-white">Challenges Overcome</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject.detailedInfo.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="text-orange-500" size={20} />
                    <h3 className="text-white">Outcomes & Impact</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject.detailedInfo.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-black/40 border border-orange-500/20">
                  <h3 className="text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.detailedInfo.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}