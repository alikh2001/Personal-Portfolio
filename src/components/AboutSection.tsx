import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Code2, Coffee, Rocket } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '3+', label: 'Years Experience', color: 'text-primary' },
  { icon: Rocket, value: '25+', label: 'Projects Completed', color: 'text-secondary' },
  { icon: Code2, value: '5+', label: 'Technologies', color: 'text-primary' },
  { icon: Coffee, value: '∞', label: 'Coffee Consumed', color: 'text-secondary' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">WHO AM I</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse-slow" />
              
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-rotate-slow" />
              <div className="absolute inset-2 rounded-full border border-secondary/30" />
              
              {/* Photo placeholder */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-muted to-card flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-7xl font-bold gradient-text">DH</div>
              </div>
              
              {/* Orbiting dot */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center 160px" }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Passionate Developer & <span className="text-primary">Tech Enthusiast</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated developer with a strong foundation in{' '}
                <span className="text-primary font-medium">systems programming</span> and{' '}
                <span className="text-secondary font-medium">database architecture</span>. 
                My journey in tech started with curiosity and evolved into a passion for 
                creating elegant, efficient solutions.
              </p>
              <p>
                With expertise in <span className="text-primary">C</span>,{' '}
                <span className="text-secondary">Java</span>,{' '}
                <span className="text-primary">HTML/CSS</span>, and{' '}
                <span className="text-secondary">MySQL</span>, I bring ideas to life through 
                clean code and thoughtful design. I believe in writing code that not only 
                works but tells a story.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or optimizing database queries 
                for that extra millisecond of performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 transition-transform group-hover:scale-110`} />
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
