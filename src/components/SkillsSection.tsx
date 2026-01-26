import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  {
    name: 'C',
    level: 90,
    description: 'Systems programming powerhouse - Building efficient, low-level solutions',
    icon: '⚙️',
    color: 'from-primary to-primary/70',
  },
  {
    name: 'Java',
    level: 85,
    description: 'Enterprise-grade applications with robust OOP principles',
    icon: '☕',
    color: 'from-secondary to-secondary/70',
  },
  {
    name: 'HTML',
    level: 95,
    description: 'Semantic markup and accessible web structures',
    icon: '🌐',
    color: 'from-primary to-secondary',
  },
  {
    name: 'JavaScript',
    level: 95,
    description: 'Dynamic scripting for interactive web experiences',
    icon: '🟨',
    color: 'from-primary to-secondary',
  },
  {
    name: 'React.Js',
    level: 95,
    description: 'Component-based UI library for building modern web applications',
    icon: '⚛️',
    color: 'from-primary to-secondary',
  },
  {
    name: 'CSS',
    level: 88,
    description: 'Crafting pixel-perfect, responsive user interfaces',
    icon: '🎨',
    color: 'from-secondary to-primary',
  },
  {
    name: 'MongoDB',
    level: 95,
    description: 'NoSQL document database for flexible and scalable data management',
    icon: '🍃',
    color: 'from-primary to-secondary',
  },
  {
    name: 'MySQL',
    level: 82,
    description: 'Database design and optimization for scalable applications',
    icon: '🗃️',
    color: 'from-primary to-primary/70',
  },
  {
    name: 'PowerBI',
    level: 95,
    description: 'Business intelligence tool for data visualization and analytics',
    icon: '📊',
    color: 'from-primary to-secondary',
  },
];

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}

const SkillCard = ({ skill, index, isInView }: SkillCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="glass-card-hover p-6 cursor-pointer group"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{skill.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="font-mono text-primary">{skill.level}%</span>
        </div>
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-[0.02] overflow-hidden font-mono text-xs leading-loose pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {`function solve(problem) { return creativity + logic; } // ${Math.random().toString(36).slice(2)}`}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">WHAT I DO</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of technologies I've mastered over the years, 
            each one a powerful tool in my development toolkit.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured skill - larger */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card-hover p-8 h-full flex flex-col justify-between group"
            >
              <div>
                <span className="text-6xl mb-6 block">💻</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Full-Stack Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Combining front-end creativity with back-end logic to build 
                  complete, scalable applications from the ground up.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 text-sm bg-muted/50 rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Individual skill cards */}
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
