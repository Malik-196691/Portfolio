import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-accent/25 to-primary/15 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"
      />

      {/* Moving particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
          className="absolute bottom-0 w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.line
          x1="100%"
          y1="100%"
          x2="0%"
          y2="20%"
          stroke="url(#gradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/20 rounded-lg"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          x: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-accent/20 rounded-full"
      />
    </div>
  );
};

export default HeroBackground;
