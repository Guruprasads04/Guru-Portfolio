import { motion } from 'motion/react';
import { ArrowRight, Contact, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypingEffect } from './TypingEffect';
import profilePhoto from 'figma:asset/3dde703682aa590c4049aaaffab8f068ef1c951c.png';

export function HeroSection() {
  const roles = [
    'UI/UX Developer',
    'Frontend Developer',
    '3D Model Developer',
    'Machine Learning Developer'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-24 h-24 border-2 border-orange-500/30 rounded-lg backdrop-blur-sm bg-orange-500/5"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-20 w-40 h-40 border-2 border-orange-500/20 rounded-full backdrop-blur-sm bg-orange-500/5"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-orange-500/30 backdrop-blur-sm bg-orange-500/5"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* RIGHT SIDE - Profile Photo (First on mobile, second on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end lg:order-2"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-orange-500/30 rounded-3xl blur-2xl opacity-75" />
              
              {/* Rotating Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-3xl blur-sm"
              />

              {/* Glass Morphism Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-black/60 via-black/40 to-black/60 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/30">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10" />
                
                {/* Profile Image */}
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Guruprasad"
                  className="w-full h-full object-cover"
                />
                
                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Skill Badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 px-5 py-3 rounded-2xl backdrop-blur-xl bg-black/70 border-2 border-orange-500/50 text-orange-400 shadow-lg shadow-orange-500/30"
              >
                <span className="text-sm md:text-base">UI/UX</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl backdrop-blur-xl bg-black/70 border-2 border-orange-500/50 text-orange-400 shadow-lg shadow-orange-500/30"
              >
                <span className="text-sm md:text-base">3D Dev</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 -right-6 px-5 py-3 rounded-2xl backdrop-blur-xl bg-black/70 border-2 border-orange-500/50 text-orange-400 shadow-lg shadow-orange-500/30"
              >
                <span className="text-sm md:text-base">ML/AI</span>
              </motion.div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-orange-500/30 rounded-lg backdrop-blur-sm bg-orange-500/5 rotate-12" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-orange-500/30 rounded-full backdrop-blur-sm bg-orange-500/5" />
            </motion.div>
          </motion.div>
          
          {/* LEFT SIDE - Text Content (Second on mobile, first on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:order-1"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="px-6 py-3 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 backdrop-blur-sm">
                <span className="text-sm md:text-base">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* Main Headline with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Glass Morphism Background for Text */}
              <div className="relative p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-orange-500/20">
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 opacity-50" />
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 blur-xl opacity-50" />
                
                <div className="relative z-10 space-y-6">
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight tracking-tight">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-[0_0_30px_rgba(255,115,0,0.5)]">
                      Guruprasad
                    </span>
                  </h1>
                  
                  <div className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed text-gray-300">
                    Building Digital Experiences as a
                    <div className="mt-4 min-h-[50px] md:min-h-[60px] flex items-center">
                      <TypingEffect roles={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base md:text-lg xl:text-xl leading-relaxed max-w-xl"
            >
              A multi-disciplinary creator specializing in design, development, and emerging technologies. 
              Transforming ideas into immersive digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a
                href="#projects"
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl transition-all duration-300 overflow-hidden flex items-center gap-3 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
              >
                <span className="relative z-10 text-base md:text-lg">View Projects</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="#contact"
                className="group relative px-8 md:px-10 py-4 md:py-5 border-2 border-orange-500/50 hover:border-orange-500 text-orange-500 hover:text-white rounded-2xl transition-all duration-300 backdrop-blur-sm bg-orange-500/5 hover:bg-orange-500 flex items-center gap-3 hover:scale-105"
              >
                <span className="relative z-10 text-base md:text-lg">Contact Me</span>
                <Contact size={20} className="relative z-10" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}