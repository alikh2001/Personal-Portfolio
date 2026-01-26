import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cube 1 */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 border border-primary/20 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 90, 45],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Sphere 1 */}
      <motion.div
        className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-sm"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Triangle */}
      <motion.div
        className="absolute bottom-40 left-[20%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-secondary/20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Cube 2 */}
      <motion.div
        className="absolute bottom-60 right-[25%] w-12 h-12 border border-secondary/20 rotate-12"
        animate={{
          y: [0, 15, 0],
          rotate: [12, -30, 12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Ring */}
      <motion.div
        className="absolute top-1/3 left-[5%] w-20 h-20 rounded-full border-2 border-primary/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Dot cluster */}
      <motion.div
        className="absolute top-1/2 right-[8%] flex gap-2"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/30"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
      
      {/* Large gradient orb */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-radial from-primary/5 via-secondary/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Top left orb */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-radial from-secondary/5 via-primary/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingShapes;
