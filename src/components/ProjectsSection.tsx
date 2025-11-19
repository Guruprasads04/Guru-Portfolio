import { motion } from 'motion/react';
import { ExternalLink, Github, X, CheckCircle2, Sparkles, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import planarcImg from '../assets/Planarc.png';
import frizoImg from '../assets/Frizo.png';
import GiffyImg from '../assets/Giffy.png';
import model3DImg from '../assets/tea shop.png';
import NtptImg from '../assets/NTPT.png';
import HotwheelsImg from '../assets/hotwheels.png';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'Giffy',
      subtitle: 'AI GIF Animation Generator',
      description: 'An AI-powered application that generates custom GIF animations based on user prompts. Leverages machine learning models for creative content generation.',
      image: GiffyImg,
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
        title: 'NTPT',
        subtitle: 'Network Traffic Prediction Tool',
        description: 'A machine learning-driven system designed to analyze and predict network traffic patterns for improved security, performance, and anomaly detection.',
        image: NtptImg,
        category: 'AI/ML',
        tech: ['Python', 'scikit-learn', 'TensorFlow', 'Flask'],
        gradient: 'from-blue-600 to-cyan-500',
        detailedInfo: {
          overview: 'NTPT (Network Traffic Prediction Tool) is an AI-powered system built to forecast network traffic and detect anomalies using Random Forest and LSTM deep learning models. It processes real-time traffic parameters and delivers accurate predictions to help users analyze usage trends and security insights.',
          features: [
            'Real-time network traffic prediction',
            'Random Forest + LSTM hybrid prediction engine',
            'Interactive dashboard for analytics and visualization',
            'Detection of unusual traffic spikes and anomalies',
            'REST API for integrating predictions with other platforms'
          ],
          challenges: [
            'Preprocessing high-dimensional network traffic data',
            'Improving prediction accuracy across varying traffic patterns',
            'Optimizing LSTM performance for time-series data',
            'Designing a smooth UI for complex data interpretation'
          ],
          outcomes: [
            'Achieved over 90% prediction accuracy',
            'Reduced prediction latency with optimized feature selection',
            'Successfully deployed a full-stack ML application using Flask',
            'Enabled real-time prediction visualization for end users'
          ],
          technologies: [
            'Python',
            'scikit-learn (Random Forest)',
            'TensorFlow (LSTM)',
            'Flask API',
            'HTML, CSS, JavaScript'
          ],
          duration: '3 months',
          role: 'Full-Stack Developer & ML Engineer'
        }
      },
      {
        title: 'Hot Wheels 3D UI Experience',
        subtitle: 'Interactive Automotive Website Prototype',
        description: 'A high-fidelity 3D-inspired website prototype designed in Figma and Sketch, featuring dynamic visuals, smooth transitions, and an immersive car-themed interface.',
        image: HotwheelsImg,
        category: 'UI/UX',
        tech: ['Figma', 'Sketch', 'Prototyping'],
        gradient: 'from-red-600 to-orange-500',
        detailedInfo: {
          overview: 'This project is a visually compelling UI/UX prototype inspired by Hot Wheels. Designed entirely using Figma and Sketch, it features 3D styled elements, animated transitions, and a bold color palette. The focus was on creating an engaging, immersive automotive experience without any code fully driven by design and prototyping tools.',
          features: [
            '3D-inspired car visualization and layout',
            'Smooth screen-to-screen prototype transitions',
            'Interactive hotspots and animated user flows',
            'Custom icons, typography, and automotive color palette',
            'Story-driven UI showcasing car details and branding'
          ],
          challenges: [
            'Simulating 3D depth and reflections using only Figma tools',
            'Achieving fluid micro-interactions within prototype limits',
            'Maintaining visual balance with bold colors and heavy graphics',
            'Designing a consistent layout across multiple interactive screens'
          ],
          outcomes: [
            'Delivered a high-quality interactive prototype with strong visual appeal',
            'Created a smooth and realistic 3D-like user experience without code',
            'Successfully showcased visual storytelling and design skills',
            'Received positive feedback for creativity and presentation'
          ],
          technologies: [
            'Figma (UI Design + Prototyping)',
            'Sketch (Visual Design + Components)'
          ],
          duration: '3 weeks',
          role: 'UI/UX Designer & Prototype Developer'
        }
      },
    {
      title: 'PlanArc',
      subtitle: 'Dashboard UI & Frontend Implementation',
      description: 'Designed and implemented a modern dashboard UI covering visual design, component library, and frontend implementation for performant, accessible interfaces.',
      image: planarcImg,
      category: 'Web Design',
      tech: ['Figma', 'React', 'Tailwind', 'TypeScript'],
      gradient: 'from-orange-600 to-amber-500',
      detailedInfo: {
        overview: 'PlanArc is a comprehensive dashboard solution focused on clear information architecture and polished UI. I led the visual design, created a reusable component library, and implemented the frontend with emphasis on accessibility and performance.',
        features: [
          'Pixel-perfect UI components implemented as reusable React components',
          'Interactive data visualizations with performant rendering',
          'Drag-and-drop project timeline built with accessible controls',
          'Token-based theming and light/dark mode support',
          'Responsive layouts with fluid grid and breakpoint-aware components'
        ],
        challenges: [
          'Translating high-fidelity designs into reusable, accessible components',
          'Ensuring performant rendering for data-heavy visualizations',
          'Maintaining visual consistency across varying screen sizes and states'
        ],
        outcomes: [
          'Delivered a component library that reduced new UI development time by 50%',
          'Improved task completion time by 40% through clearer information hierarchy',
          'Achieved WCAG AA accessibility for core flows'
        ],
        technologies: ['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'D3'],
        duration: '2 months',
        role: 'UI Designer & Frontend Developer'
      }
    },
    {
      title: 'Frizo',
      subtitle: 'E‑commerce UI/UX Redesign',
      description: 'A UI/UX focused redesign of an online shopping platform. Delivered user research, interaction design, prototypes, and a scalable design system to improve conversion and retention.',
      image: frizoImg,
      category: 'UI/UX',
      tech: ['Figma', 'Sketch', 'Adobe XD', 'Principle'],
      gradient: 'from-orange-500 to-orange-700',
      detailedInfo: {
        overview: 'Frizo is a user-centered redesign project aimed at elevating the shopping experience. Work included discovery research, high-fidelity prototypes, iterative usability testing, and handoff-ready design deliverables for engineering.',
        features: [
          'End-to-end UX research (surveys, interviews, usability tests)',
          'High-fidelity interactive prototypes for key flows (checkout, search, product pages)',
          'Design system with reusable components and token-based theming',
          'Responsive, accessible layouts for mobile and desktop',
          'Micro-interactions and motion guidelines to improve delight and clarity'
        ],
        challenges: [
          'Aligning business goals with user needs across diverse user segments',
          'Maintaining visual polish while ensuring performance-friendly assets',
          'Establishing a consistent design system and developer handoff process'
        ],
        outcomes: [
          'Raised conversion rate by 18% after redesign',
          'Reduced support inquiries related to checkout by 32%',
          'Design system adopted across product teams, speeding up feature delivery'
        ],
        technologies: ['Figma', 'Sketch', 'Principle', 'Zeplin (handoff)', 'UserTesting.com'],
        duration: '3 months',
        role: 'Lead UI/UX Designer'
      }
    },
    
    {
      title: 'Tea Shop Model',
      subtitle: '3D Model Crafted Using Blender & Maya',
      description: 'A detailed 3D model of a tea shop created using Blender and Maya. Focused on realistic texturing, lighting, and architectural accuracy for visualization and animation purposes.',
      image: model3DImg,
      category: '3D Model',
      tech: ['Blender', 'Maya', 'Substance Painter'],
      gradient: 'from-indigo-500 to-purple-500',
      detailedInfo: {
        overview: 'This project features a highly detailed tea shop model designed for architectural visualization and animation. The workflow included modeling in Blender and Maya, texturing in Substance Painter, and post-processing in Photoshop.',
        features: [
          'Realistic architectural modeling with accurate proportions',
          'High-resolution textures and PBR materials',
          'Advanced lighting setup for photorealistic renders',
          'Optimized mesh for smooth animation and rendering',
          'Custom props and interior detailing'
        ],
        challenges: [
          'Achieving realism while keeping polygon count optimized',
          'Seamless integration of assets between Blender and Maya',
          'Fine-tuning lighting for different moods and times of day'
        ],
        outcomes: [
          'Produced portfolio-ready renders and walkthrough animations',
          'Model used in client presentations and marketing materials',
          'Demonstrated proficiency in both Blender and Maya workflows'
        ],
        technologies: ['Blender', 'Maya', 'Substance Painter', 'Photoshop'],
        duration: '2 weeks',
        role: '3D Artist & Visualizer'
      }
    }
  ];

  // derive categories (keep order: All first)
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${selectedCategory === cat ? 'bg-orange-500 text-white border-orange-500' : 'bg-black/20 text-gray-300 border-transparent hover:border-orange-500/20'}`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  {/* <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} /> */}
                  
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
                    <button
                    onClick={() => window.open('https://github.com/Guruprasads04/giffy', '_blank', 'noopener,noreferrer')} 
                    className="p-2 rounded-lg border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 text-orange-500 transition-all">
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
                className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-xl border-2 border-orange-500/20 backdrop-blur-sm bg-gradient-to-br ${project.gradient} opacity-10 pointer-events-none Z-10`}
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
                  <div className={`absolute inset-0 -to-t ${selectedProject.gradient} opacity-0`} />
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