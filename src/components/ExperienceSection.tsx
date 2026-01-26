import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const experiences = [
  {
    year: '2024',
    title: 'Senior Developer',
    organization: 'Tech Innovation Hub',
    description: 'Leading development of enterprise-grade applications using Java and MySQL.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: '2023',
    title: 'Database Certification',
    organization: 'Oracle',
    description: 'Completed advanced MySQL database administration and optimization certification.',
    icon: Award,
    type: 'certification',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    organization: 'Digital Solutions Co.',
    description: 'Developed responsive web applications and optimized database performance.',
    icon: Code,
    type: 'work',
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    organization: 'University of Technology',
    description: 'Bachelor\'s degree with focus on systems programming and data structures.',
    icon: GraduationCap,
    type: 'education',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">MY JOURNEY</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/50 md:-translate-x-1/2"
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.year}-${exp.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card-hover p-6 group"
                  >
                    <span className="text-primary font-mono text-sm">{exp.year}</span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary text-sm mt-1">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10"
                >
                  <exp.icon className="w-5 h-5 text-primary" />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Animated dot traveling down */}
          <motion.div
            initial={{ top: 0 }}
            animate={isInView ? { top: '100%' } : {}}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-pulse-glow"
            style={{ marginLeft: '-5px', marginTop: '-6px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
